const mssql = require("mssql");
const dbConfig = require("../config/config");
var Treeize = require("treeize");

class ArtistsService {
  async getArtistsAndAlbums(req, res, next) {
    console.debug("ArtistsService :: getArtistsAndAlbums");

    try {
      let db = await mssql.connect(dbConfig);
      let result = await db.request().query(
        `
          SELECT artist.name
                ,artist.gender
                ,cd.title as 'albums:title'
                ,cd.genre as 'albums:genre'
                ,cd.year as 'albums:year'
          FROM artist
          join cd on artist.id = cd.artistid_fk          
          `
      );

      if (result.recordset) {
        db.close();
        const data = result.recordset;
        const artistalbums = new Treeize();
        let output = artistalbums.grow(data).getData();

        return res.status(200).json(output);
        //return res.status(200).json(result.recordset);
      }

      db.close();
      return res.status(404).send({ message: "No data..." });
    } catch (err) {
      console.debug(err);
      return res.status(500).send({ error: "Server error..." });
    }
  }
}

module.exports = new ArtistsService();
