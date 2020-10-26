var Treeize = require("treeize");
var albums = new Treeize();

const ArtistSvc = require("./services/ArtistsService");
(async function () {
  const data = await ArtistSvc.getArtistsAndAlbums();
  let output = albums.grow(data).getData();

  console.log(JSON.stringify(output, null, " "));
})();
