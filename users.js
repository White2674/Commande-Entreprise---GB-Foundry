// users.js
// Gère les utilisateurs autorisés (identifiants)
// Tu peux ajouter/modifier ici les comptes

const users = [
  { username: "admin", password: "white.2674" },
  { username: "LS Customs", password: "LSC" },
  { username: "Auto-Exotic", password: "AutoE" },
  { username: "Custom Motors", password: "CustomM" },
  { username: "Flywheels", password: "FlyW" },
  { username: "Benny's", password: "Ben" },
  { username: "Dock Tease", password: "DockT" },
  { username: "LTD Grove Street", password: "LTDGS" },
  { username: "LTD Little Seoul", password: "LTDLS" },
  { username: "LTD Sandy Shores", password: "LTDSS" },
  { username: "LTD Paleto Bay", password: "LTDPB" },
  { username: "Davis Quartz", password: "DavisQ" },
  { username: "Marlowe Vineyard", password: "MarloweV" },
  { username: "Ferme Biogood", password: "FermeB" },
  { username: "Ferme Grapeseed", password: "FermeG" },
  { username: "LD Organic", password: "LDO" },
];

// Fonction pour vérifier les identifiants
function checkUser(username, password) {
  return users.some(
    (u) => u.username === username && u.password === password
  );
}
