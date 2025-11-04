const nodemon = require("nodemon");
const courses = require("../courses/App");

const listeCourses = courses.listeCourses;
const express = require("express");
const router = express.Router();

router.get("/produits", (req, res) => {
  res.send(listeCourses);
});

router.post("/ajouter", (req, res) => {
  const nouveauProduit = {
    id: courses.nextId,
    nom: req.body.nom,
    quantite: req.body.quantite,
    descriptif: req.body.descriptif,
  };
  courses.nextId++;
  courses.listeCourses.push(nouveauProduit);
  res.json(nouveauProduit);
});

router.put("/modifier/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const produit = listeCourses.find((item) => item.id === id);
  if (!produit) return res.status(404).json({ error: "Not found" });
  Object.assign(produit, req.body);
  res.json(produit);
});

router.delete("/supprimer/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = listeCourses.findIndex((item) => item.id === id);
  if (index === -1) return res.status(404).json({ error: "Not found" });
  listeCourses.splice(index, 1);
  res.json({ deleted: true });
});

module.exports = router;
