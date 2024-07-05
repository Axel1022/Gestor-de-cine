const express = require("express");
const router = express.Router();
const generoController = require("../controllers/generoController");
const serieController = require("../controllers/seriesController");

//Index
router.get("/managerSerie", serieController.getSerie);
router.get("/managerGenero", generoController.getGenero);
//Admins
router.get("/modGeneros", generoController.getModGenero);
router.get("/modSeries", serieController.getModSerie);
//Formularios
router.post("/AddSeries", serieController.postModSerie);
router.post("/AddGeneros", generoController.postModGenero);
//Detalle serie
router.get("/Detalle/:serieId", serieController.getSerieId);
//Deletes
router.post("/deteteGenero", generoController.postDeleteGenero);
router.post("/deteteSerie", serieController.postDeleteSerie);
//Editar Series
router.get("/EditSeries/:SerieId", serieController.getModEditSerie);
router.post("/SeriesEdit", serieController.postEditSerie);

//Editar Generos
router.get("/EditGeneros/:GeneroId", generoController.getModEditGenero);
router.post("/GeneroEdit", generoController.postEditGenero);

//Buscar
router.post("/buscarSeries", serieController.postBuscarSeries);


//Aquí puede que haya bobo

module.exports = router;
