import React from "react";
import { Box, Typography, Link, Avatar } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#111",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © 2024 Zing TV | All Rights Reserved
      </Typography>

      {/* Thêm thông tin cá nhân */}
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Căn giữa ngang
          justifyContent: "center", // Căn giữa dọc
        }}
      >
        <Avatar
          alt="Your Name"
          src="\img\z6058838867816_f03ca0b0bd8c88c99ee87c66876ffb8a.jpg" // Thay thế bằng URL hình ảnh của bạn
          sx={{ width: 100, height: 100, marginBottom: "10px" }}
        />
        <Typography variant="h6">Nguyễn Trọng Hữu</Typography>
        <Typography variant="body2">Số điện thoại: 0378184637</Typography>
        <Typography variant="body2" sx={{ marginTop: "10px" }}>
          <strong>Liên hệ:</strong>{" "}
          <Link
            href="mailto:huunguyen.2104@gmail.com"
            sx={{ color: "#fff", textDecoration: "none" }}
          >
            huunguyen.2104@gmail.com
          </Link>
        </Typography>
      </Box>

      {/* Các liên kết khác */}
      <Typography variant="body2" sx={{ marginTop: "20px" }}>
        <Link
          href="https://www.example.com"
          sx={{ color: "#fff", textDecoration: "none" }}
        >
          Chính sách bảo mật
        </Link>{" "}
        |
        <Link
          href="https://www.example.com"
          sx={{ color: "#fff", textDecoration: "none" }}
        >
          Điều khoản sử dụng
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
