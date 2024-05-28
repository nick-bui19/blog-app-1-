const express = require("express");
const cor = require ("cors");
const port = 8000;

const blogsRoute = require("./routes/blogsRoutes")

const app = express();

//Enabling Cors for any unknown origin
app.use(cors());

//Enabling the use of JSON for the body of the request.
app.use(express.json());

app.use("blogs", blogsRoute);

// Define a GET route for "/"
app.get("/", (req, res) => {
    res.send("Hello iX!");
  });

// Define the POST route for "/"
app.post ("/", (req, res) => {
    res.send("Hello World!");
});

app.listen (port, () => {
    console.log(`Example app listening on port ${port}`)
});
