let listeCourses = [
  {
    id: 1,
    nom: "Tshirt",
    quantite: 1,
    descriptif: "haut blanc basique",
    Image: "/public/images/tshirt.png",
  },
  {
    id: 2,
    nom: "Pull",
    quantite: 2,
    descriptif: "pull simple",
    Image: "/public/images/pull.png",
  },
  {
    id: 3,
    nom: "Sweat",
    quantite: 6,
    descriptif: "pour toute Saisons",
    Image: "/public/images/sweat.png",
  },
];

// Variable pour gérer les IDs auto-incrémentés
let nextId = 4;

module.exports = { listeCourses, nextId };
