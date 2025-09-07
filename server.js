const express = require("express");
const cors = require("cors");
const app = express();

const movies = [
  {
    _id: "1",
    title: "Open Movie 1",
    description: "A sample movie description.",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    _id: "2",
    title: "Open Movie 2",
    description: "Another sample movie.",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  }
];

app.use(cors());
app.use(express.json());

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find(m => m._id === req.params.id);
  if (movie) res.json(movie);
  else res.status(404).json({ error: "Movie not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));