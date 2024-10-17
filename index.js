const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const players = [
    {
      id: 1,
      name: 'Virat Kohli',
      country: 'India',
      role: 'Batsman',
      runs: 12000,
      wickets: 4,
    },
    {
      id: 2,
      name: 'James Anderson',
      country: 'England',
      role: 'Bowler',
      runs: 1243,
      wickets: 600,
    },
    {
      id: 3,
      name: 'Kane Williamson',
      country: 'New Zealand',
      role: 'Batsman',
      runs: 7000,
      wickets: 29,
    },
    {
      id: 4,
      name: 'Pat Cummins',
      country: 'Australia',
      role: 'Bowler',
      runs: 750,
      wickets: 250,
    },
    {
      id: 5,
      name: 'Ben Stokes',
      country: 'England',
      role: 'All-rounder',
      runs: 4500,
      wickets: 150,
    },
  ];

//   Question 2
app.get("/players", (req, res) => {
    res.status(200).json({ usersData: players });
});

//Question 3 
app.get("/players/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const data = players.find(ele => ele.id === id);

    res.json({ player: data });
});


app.get("/", (req, res) => res.send("Server Is Live"));

app.listen(3000, () => console.log("Server Is Ready"));