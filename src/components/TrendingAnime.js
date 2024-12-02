// src/components/TrendingAnime.js
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

// Dữ liệu mẫu cho các hoạt hình thịnh hành
const trendingAnime = [
  {
    id: 1,
    title: "Attack on Titan Season 4",
    thumbnail: "https://cf.shopee.vn/file/f3b88b51c0ea1a66f396c11c4ed68e43",
  },
  {
    id: 2,
    title: "Jujutsu Kaisen",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSViswWMN1gKtvv9esXjEYwMfBtGBXPkoLPSA&s",
  },
  {
    id: 3,
    title: "Chainsaw Man",
    thumbnail:
      "https://toquoc.mediacdn.vn/280518851207290880/2022/2/18/chaic1-16451583862711318192432-1645188724557-16451887248472091654309.jpg",
  },
  {
    id: 4,
    title: "Spy x Family",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AHtgpo-EWGC1Bi4QoR_xm5ElthnMSGdvCw&s",
  },
];

const TrendingAnime = () => {
  return (
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      {trendingAnime.map((anime) => (
        <Grid item xs={6} sm={4} md={3} key={anime.id}>
          <Card
            sx={{
              boxShadow: 3,
              ":hover": { boxShadow: 6 },
              transition: "0.3s",
              backgroundColor: "#333",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={anime.thumbnail}
              alt={anime.title}
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                {anime.title}
              </Typography>
              {/* Nút "Xem ngay" */}
              <Link
                to={`/anime/${anime.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    backgroundColor: "#f1c40f",
                    color: "#000",
                    ":hover": { backgroundColor: "#e67e22" },
                    marginTop: 1,
                    width: "100%",
                    padding: "8px",
                    fontWeight: "bold",
                  }}
                >
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

export default TrendingAnime;
