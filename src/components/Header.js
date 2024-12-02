// src/components/Header.js
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(""); // Lưu trữ giá trị tìm kiếm
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

  // Xử lý đăng xuất
  const handleLogout = () => {
    sessionStorage.removeItem("currentUser"); // Xóa thông tin người dùng khi đăng xuất
    navigate("/login"); // Chuyển hướng về trang đăng nhập
  };

  // Xử lý tìm kiếm khi người dùng nhấn Enter
  const handleSearch = () => {
    // Kiểm tra nếu có query tìm kiếm
    if (searchQuery) {
      // Tìm đến trang anime hoặc trang kết quả tìm kiếm
      navigate(`/search-results/${searchQuery}`);
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#111" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo Zing TV */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#f1c40f" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#f1c40f" }}>
            Zing TV
          </Link>
        </Typography>

        {/* Thanh tìm kiếm */}
        <TextField
          variant="outlined"
          placeholder="Tìm kiếm hoạt hình..."
          size="small"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "5px",
            marginRight: 2,
            width: "300px",
          }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Lưu trữ giá trị tìm kiếm
          onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Xử lý khi nhấn Enter
        />

        {/* Hiển thị thông tin người dùng nếu đã đăng nhập */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {currentUser ? (
            <>
              {/* Hiển thị nút Anime */}
              <Link to="/anime" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "#fff", marginRight: 2 }}>Anime</Button>
              </Link>
              {/* Thêm nút Hoạt hình hành động */}
              <Link to="/action" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "#fff", marginRight: 2 }}>
                  Hoạt hình hành động
                </Button>
              </Link>
              {/* Hiển thị tên người dùng */}
              <Typography sx={{ color: "#fff", marginRight: 2 }}>
                Chào, {currentUser.name}
              </Typography>
              {/* Nút Đăng xuất */}
              <Button sx={{ color: "#fff" }} onClick={handleLogout}>
                Đăng xuất
              </Button>
            </>
          ) : (
            <>
              {/* Nếu chưa đăng nhập, hiển thị nút Đăng nhập và Đăng ký */}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "#fff", marginRight: 2 }}>
                  Đăng nhập
                </Button>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "#fff" }}>Đăng ký</Button>
              </Link>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
