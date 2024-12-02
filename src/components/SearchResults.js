// src/components/SearchResults.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const SearchResults = () => {
  const { query } = useParams(); // Lấy query từ URL
  const [results, setResults] = useState([]); // Dữ liệu kết quả tìm kiếm
  const [loading, setLoading] = useState(true); // Trạng thái loading

  // Dữ liệu anime có sẵn
  const animeData = [
    {
      id: 1,
      title: "Naruto",
      thumbnail: "https://via.placeholder.com/300x400",
    },
    {
      id: 2,
      title: "One Piece",
      thumbnail: "https://via.placeholder.com/300x400",
    },
    {
      id: 3,
      title: "Attack on Titan",
      thumbnail: "https://via.placeholder.com/300x400",
    },
    {
      id: 4,
      title: "Dragon Ball",
      thumbnail: "https://via.placeholder.com/300x400",
    },
  ];

  useEffect(() => {
    // Giả lập tìm kiếm trong animeData
    const fetchResults = () => {
      // Lọc animeData theo query
      const filteredResults = animeData.filter((anime) =>
        anime.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
      setLoading(false);
    };

    fetchResults();
  }, [query]); // Chạy lại khi query thay đổi

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Kết quả tìm kiếm cho: "{query}"
      </Typography>

      {loading ? (
        <Typography variant="h6">Đang tìm kiếm...</Typography>
      ) : (
        <Grid container spacing={3}>
          {results.length > 0 ? (
            results.map((anime) => (
              <Grid item xs={6} sm={4} md={3} key={anime.id}>
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
                    image={anime.thumbnail}
                    alt={anime.title}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {anime.title}
                    </Typography>
                    <Link
                      to={`/anime/${anime.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="contained" sx={{ marginTop: 1 }}>
                        Xem chi tiết
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6">Không có kết quả nào.</Typography>
          )}
        </Grid>
      )}
    </div>
  );
};

export default SearchResults;
