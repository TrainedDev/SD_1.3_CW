const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

 const games = [
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      genre: 'Action-adventure',
      platform: 'Nintendo Switch',
      releaseYear: 2017,
    },
    {
      id: 2,
      title: 'God of War',
      genre: 'Action-adventure',
      platform: 'PlayStation 4',
      releaseYear: 2018,
    },
    {
      id: 3,
      title: 'Cyberpunk 2077',
      genre: 'Role-playing',
      platform: 'PC',
      releaseYear: 2020,
    },
    {
      id: 4,
      title: 'Hollow Knight',
      genre: 'Metroidvania',
      platform: 'PC',
      releaseYear: 2017,
    },
    {
      id: 5,
      title: 'Minecraft',
      genre: 'Sandbox',
      platform: 'Multi-platform',
      releaseYear: 2011,
    },
  ]

//   Question 2
app.get("/games", (req, res) => {
    res.status(200).json({ usersData: games });
});

//Question 3 
app.get("/games/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const data = games.find(ele => ele.id === id);

    res.json({ game: data });
});


app.get("/", (req, res) => res.send("Server Is Live"));

app.listen(3000, () => console.log("Server Is Ready"));