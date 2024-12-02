// src/components/Banner.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative", // Đảm bảo lớp phủ và hình ảnh không bị chồng lên nhau
        backgroundImage:
          "url(https://png.pngtree.com/thumb_back/fh260/background/20230718/pngtree-contemporary-wooden-table-with-sleek-led-lcd-tv-3d-rendering-image_3900336.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {/* Lớp phủ màu đen mờ */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu đen mờ
          zIndex: 1, // Đảm bảo lớp phủ nằm phía dưới chữ
        }}
      />

      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          zIndex: 2, // Đảm bảo văn bản nằm phía trên lớp phủ
        }}
      >
        Phim Hot Nhất
      </Typography>
      <Typography
        variant="h5"
        sx={{
          maxWidth: "600px",
          marginBottom: "20px",
          zIndex: 2, // Đảm bảo văn bản nằm phía trên lớp phủ
        }}
      >
        Khám phá các bộ phim mới nhất, nổi bật và hấp dẫn nhất ngay hôm nay!
      </Typography>

      {/* Link bọc nút để chuyển hướng */}
      <Link to="/trending-anime" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f1c40f",
            color: "#111",
            fontSize: "16px",
            padding: "10px 30px",
            zIndex: 2, // Đảm bảo nút bấm nằm phía trên lớp phủ
          }}
        >
          Xem Chi Tiết
        </Button>
      </Link>
    </Box>
  );
};

export default Banner;
