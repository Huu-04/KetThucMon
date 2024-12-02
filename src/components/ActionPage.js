// src/components/ActionPage.js
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

// Dữ liệu hoạt hình hành động
const actionAnimations = [
  {
    id: 1,
    title: "Naruto",
    thumbnail:
      "https://i.pinimg.com/originals/e8/9c/0d/e89c0d93db6152ebcc72f344785494a6.jpg",
  },
  {
    id: 2,
    title: "Dragon Ball",
    thumbnail: "https://genk.mediacdn.vn/2016/1-1481882932860.jpg",
  },
  {
    id: 3,
    title: "One Piece",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/vi/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
  },
  {
    id: 4,
    title: "Attack on Titan",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTProD6qGC0XREhExeXNN1RQJHMtbTLsaILtA&s",
  },
];

const ActionPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 3, color: "#fff" }}>
        Hoạt hình hành động
      </Typography>

      {/* Sử dụng Grid để tạo bố cục */}
      <Grid container spacing={3}>
        {actionAnimations.map((animation) => (
          <Grid item xs={12} sm={6} md={3} key={animation.id}>
            <Card
              sx={{
                backgroundColor: "#222", // Màu nền của card
                boxShadow: 3,
                ":hover": { boxShadow: 6 }, // Tăng độ bóng khi hover
                transition: "0.3s",
                height: "100%", // Đảm bảo các card có chiều cao đồng đều
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={animation.thumbnail}
                alt={animation.title}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    textAlign: "center",
                    marginBottom: 2,
                  }}
                >
                  {animation.title}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    marginTop: 1,
                    display: "block",
                    width: "100%",
                    backgroundColor: "#f1c40f", // Màu nền của nút
                    ":hover": {
                      backgroundColor: "#e67e22", // Màu nền khi hover
                    },
                  }}
                >
                  Xem Chi Tiết
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ActionPage;
