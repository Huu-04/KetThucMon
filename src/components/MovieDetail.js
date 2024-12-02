import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

// Dữ liệu mock cho các phim
const movies = [
  {
    id: 1,
    title: "One Piece",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtctxEKPODXyQW7LjXqqPsBhj7ORiYHsIfg&s",
    description: `
      **One Piece** là một trong những bộ manga và anime nổi tiếng nhất mọi thời đại của tác giả Oda Eiichiro. 
      Câu chuyện xoay quanh hành trình của Luffy, một chàng trai trẻ với ước mơ trở thành Vua Hải Tặc, người sẽ tìm kiếm kho báu huyền thoại "One Piece" do Vua Hải Tặc Gol D. Roger để lại. 
      
      Luffy cùng đồng đội của mình trên con tàu Thousand Sunny phải vượt qua nhiều thử thách nguy hiểm, đối đầu với các băng hải tặc khét tiếng, hải quân, và những kẻ thù mạnh mẽ khác. 
      Điểm nhấn của bộ phim là sự kết hợp giữa hành động, phiêu lưu, tình bạn, và các thông điệp sâu sắc về ý chí kiên cường.`,
  },
  {
    id: 2,
    title: "Naruto",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqSFmV3aXQdU2gdJsshDtNdpwCr2gyzserg1FHij4ELZigXF0mAdR0wdRM_KNRrlpsbc&usqp=CAU",
    description: `
      **Naruto** kể về hành trình trưởng thành của Naruto Uzumaki, một ninja trẻ tuổi, có ước mơ trở thành Hokage - người lãnh đạo làng Lá. 
      
      Naruto từng bị dân làng xa lánh vì bên trong cậu chứa đựng Cửu Vĩ Hồ Ly, một con quái thú từng phá hủy ngôi làng. Tuy nhiên, bằng sự kiên trì và ý chí, cậu dần chinh phục được lòng tin của mọi người. 
      
      Bộ phim nổi bật với những trận chiến hoành tráng, các mối quan hệ sâu sắc và thông điệp về sự hy sinh, tình bạn và ý chí vượt qua nghịch cảnh.`,
  },
  {
    id: 3,
    title: "Attack on Titan",
    thumbnail:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v8_ah.jpg",
    description: `
      **Attack on Titan** là một bộ phim hành động kịch tính kể về cuộc chiến sinh tồn của nhân loại trước những quái vật khổng lồ được gọi là Titan. 
      
      Nhân vật chính, Eren Yeager, cùng bạn bè của mình là Mikasa và Armin, đã chứng kiến sự sụp đổ của bức tường bảo vệ thành phố và cái chết bi thảm của mẹ cậu dưới tay Titan. 
      
      Bộ phim không chỉ mang đến các trận chiến gây cấn mà còn đặt ra những câu hỏi về đạo đức, sự phản bội và bản chất của tự do.`,
  },
  {
    id: 4,
    title: "Doraemon",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNTRjMDA5ZTQtNWVkMy00OTAwLWI2NmMtYjQxYWM4MTIxYWFhXkEyXkFqcGc@._V1_.jpg",
    description: `
      **Doraemon** là một bộ anime kinh điển kể về chú mèo máy đến từ tương lai với những bảo bối thần kỳ, giúp cậu bé Nobita vượt qua những khó khăn trong cuộc sống. 
      
      Mỗi tập phim là một bài học ý nghĩa về tình bạn, gia đình và cách giải quyết vấn đề. 
      Câu chuyện hài hước nhưng cũng đầy cảm xúc, phù hợp với mọi lứa tuổi và mang lại niềm vui cho khán giả suốt nhiều thập kỷ.`,
  },
];

const MovieDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const navigate = useNavigate(); // Điều hướng quay lại

  const movie = movies.find((movie) => movie.id === parseInt(id)); // Tìm phim theo id

  return (
    <Box
      sx={{
        padding: "20px",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {movie ? (
        <Card
          sx={{
            maxWidth: 800,
            backgroundColor: "#222",
            color: "#fff",
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            height="400"
            image={movie.thumbnail}
            alt={movie.title}
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {movie.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", whiteSpace: "pre-line" }}
            >
              {movie.description}
            </Typography>
            <Button
              sx={{
                backgroundColor: "#f1c40f",
                color: "#000",
                ":hover": { backgroundColor: "#e67e22" },
                marginTop: "20px",
              }}
              onClick={() => navigate(-1)} // Quay lại trang trước
            >
              Quay lại
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6">Phim không tìm thấy</Typography>
      )}
    </Box>
  );
};

export default MovieDetail;
