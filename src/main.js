window.addEventListener("DOMContentLoaded", () => {
  fetch("https://bobuxstation.github.io/Coal-Web/games.json")
    .then((res) => {
      return res.json();
    })
    .then((data) =>
      data.items.forEach(items => {
        let gameList = document.getElementById("cards");
        let btn = document.createElement("div");
        let gamename = "<h4>" + items.name + "</h4>";
        btn.innerHTML = gamename;
        btn.className = "card";
        let banner = items.banner;
        btn.style.backgroundImage = "url(" + banner + ")";
        btn.onclick = () => {
          window.open(items.preview)
        };
        gameList.appendChild(btn);
      })
    );

  fetch("https://horangstudios.github.io/HorangStudios-Roblox-Games-API/")
    .then((res) => {
      return res.json();
    })
    .then((data) =>
      data.items.forEach(items => {
        let gameList = document.getElementById("cards");
        let btn = document.createElement("div");
        let gamename = "<h4>" + items.name + "</h4>";
        btn.innerHTML = gamename;
        btn.className = "card";
        let banner = items.banner;
        btn.style.backgroundImage = "url(" + banner + ")";
        btn.onclick = () => {
          window.location.replace(`roblox://placeId=${items.gameid}/`)
        };
        gameList.appendChild(btn);
      })
    );
});
