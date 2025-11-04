let listeCourses = [
  { id: 1, nom: "Tshirt", quantite: 1, descriptif: "haut Blanc basique" },
  { id: 2, nom: "Pull", quantite: 2, descriptif: "pull simple" },
  { id: 3, nom: "Sweat", quantite: 6, descriptif: "pour toute Saisons" },
];

// Variable pour gérer les IDs auto-incrémentés
let nextId = 4;

module.exports = { listeCourses, nextId };
