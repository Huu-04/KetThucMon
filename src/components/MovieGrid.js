// src/components/MovieGrid.js
import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

// Dữ liệu mock cho các phim
const movies = [
  {
    id: 1,
    title: "One Piece",
    thumbnail:
      "https://c4.wallpaperflare.com/wallpaper/965/883/624/manga-one-piece-wallpaper-preview.jpg",
    category: "Phim Bộ",
  },
  {
    id: 2,
    title: "Naruto",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqSFmV3aXQdU2gdJsshDtNdpwCr2gyzserg1FHij4ELZigXF0mAdR0wdRM_KNRrlpsbc&usqp=CAU",
    category: "Phim Bộ",
  },
  {
    id: 3,
    title: "Attack on Titan",
    thumbnail:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v8_ah.jpg",
    category: "Phim Lẻ",
  },
  {
    id: 4,
    title: "Doraemon",
    thumbnail:
      "https://cdn.popsww.com/blog/sites/2/2021/03/doraemon-wiki-1920x1080-1920x1080.jpg",
    category: "Phim Hoạt Hình",
  },
];

const MovieGrid = () => {
  return (
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      {movies.map((movie) => (
        <Grid item xs={6} sm={4} md={3} key={movie.id}>
          <Card
            sx={{
              boxShadow: 3,
              ":hover": { boxShadow: 6 },
              transition: "0.3s",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={movie.thumbnail}
              alt={movie.title}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {movie.title}
              </Typography>
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained" size="small" sx={{ marginTop: 1 }}>
                  Xem Chi Tiết
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieGrid;
