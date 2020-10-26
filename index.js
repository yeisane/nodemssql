var express = require("express");
var bodyParser = require("body-parser");
const ArtistSvc = require("./services/ArtistsService");

var app = express();
const port = 3000;

app.get("/artistalbums", ArtistSvc.getArtistsAndAlbums);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
