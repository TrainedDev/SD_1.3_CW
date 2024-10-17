const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const users = [
    {
      id: 1,
      username: 'octocat',
      name: 'The Octocat',
      repoCount: 8,
      location: 'San Francisco',
    },
    {
      id: 2,
      username: 'torvalds',
      name: 'Linus Torvalds',
      repoCount: 25,
      location: 'Portland',
    },
    {
      id: 3,
      username: 'gaearon',
      name: 'Dan Abramov',
      repoCount: 50,
      location: 'London',
    },
    {
      id: 4,
      username: 'addyosmani',
      name: 'Addy Osmani',
      repoCount: 42,
      location: 'Mountain View',
    },
    {
      id: 5,
      username: 'tj',
      name: 'TJ Holowaychuk',
      repoCount: 150,
      location: 'Victoria',
    },
  ];

//   Question 2
app.get("/users", (req, res) => {
    res.status(200).json({ usersData: users });
});

//Question 3 
app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const data = users.find(ele => ele.id === id);

    res.json({ user: data });
});


app.get("/", (req, res) => res.send("Server Is Live"));

app.listen(3000, () => console.log("Server Is Ready"));