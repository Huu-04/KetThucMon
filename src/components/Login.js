// src/components/Login.js
import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Thêm state để hiển thị lỗi

  const handleLogin = (e) => {
    e.preventDefault();

    // Lấy danh sách người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Tìm người dùng có email khớp
    const existingUser = users.find((user) => user.email === email);

    if (existingUser && existingUser.password === password) {
      // Nếu tìm thấy người dùng và mật khẩu khớp, đăng nhập thành công
      console.log("Đăng nhập thành công:", { email, password });

      // Lưu thông tin người dùng vào sessionStorage để truy cập sau này
      sessionStorage.setItem("currentUser", JSON.stringify(existingUser));

      navigate("/"); // Chuyển hướng về trang chủ sau khi đăng nhập thành công
    } else {
      // Nếu không tìm thấy hoặc mật khẩu không khớp
      setError("Email hoặc mật khẩu không đúng. Vui lòng thử lại.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "30px",
        backgroundColor: "#fff", // Nền form trắng
        borderRadius: "10px", // Bo góc form
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Thêm bóng đổ nhẹ
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ color: "#111", marginBottom: "20px" }}>
        Đăng nhập
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            input: { color: "#111" }, // Màu chữ trong input tối
            marginBottom: "10px",
            backgroundColor: "#f9f9f9", // Màu nền sáng của input
            borderRadius: "5px", // Bo góc input
          }}
        />
        <TextField
          label="Mật khẩu"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            input: { color: "#111" },
            marginBottom: "20px",
            backgroundColor: "#f9f9f9", // Màu nền sáng của input
            borderRadius: "5px", // Bo góc input
          }}
        />
        {error && (
          <Typography
            sx={{ color: "red", marginTop: "10px", fontSize: "14px" }}
          >
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: "100%",
            marginTop: "20px",
            backgroundColor: "#111", // Màu nền nút tối
            color: "#fff", // Chữ trắng
            fontSize: "16px",
            padding: "12px 0",
            "&:hover": {
              backgroundColor: "#333", // Màu nền tối hơn khi hover
            },
          }}
        >
          Đăng nhập
        </Button>
      </form>
      <Typography sx={{ marginTop: "10px" }}>
        Chưa có tài khoản?{" "}
        <Link to="/register" style={{ textDecoration: "none" }}>
          Đăng ký ngay
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
