// src/components/Register.js
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra xem email đã tồn tại trong localStorage chưa
    const users = JSON.parse(localStorage.getItem("users")) || []; // Lấy danh sách người dùng, nếu chưa có thì tạo mới mảng
    const existingUser = users.find((user) => user.email === email); // Kiểm tra nếu email đã tồn tại

    if (existingUser) {
      setError("Tài khoản đã tồn tại. Vui lòng đăng nhập.");
    } else {
      // Thêm người dùng mới vào danh sách
      users.push({ name, email, password });

      // Lưu lại danh sách người dùng vào localStorage
      localStorage.setItem("users", JSON.stringify(users));

      navigate("/login"); // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "400px",
        margin: "auto",
        padding: "30px",
        backgroundColor: "#fff", // Nền form trắng
        borderRadius: "10px", // Bo góc form
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Thêm bóng đổ nhẹ
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ color: "#111", marginBottom: "20px" }}>
        Đăng ký
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Tên"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            input: { color: "#111" }, // Màu chữ trong input tối
            marginBottom: "10px",
            backgroundColor: "#f9f9f9", // Màu nền sáng của input
            borderRadius: "5px", // Bo góc input
          }}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            input: { color: "#111" },
            marginBottom: "10px",
            backgroundColor: "#f9f9f9", // Màu nền sáng của input
            borderRadius: "5px", // Bo góc input
          }}
        />
        <TextField
          label="Mật khẩu"
          fullWidth
          margin="normal"
          type="password"
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
          Đăng ký
        </Button>
      </form>
    </Box>
  );
};

export default Register;
