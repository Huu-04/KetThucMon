import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const AnimeDetail = () => {
  const { id } = useParams(); // Lấy id anime từ URL
  const [anime, setAnime] = useState(null); // Dữ liệu anime chi tiết
  const navigate = useNavigate(); // Dùng để chuyển hướng

  // Dữ liệu anime chi tiết
  const animeData = [
    {
      id: 1,
      title: "Naruto",
      thumbnail:
        "https://pic9.iqiyipic.com/image/20210812/10/4d/a_100464174_m_601_en_260_360.jpg",
      description: `
        **Naruto** kể về hành trình trưởng thành của Naruto Uzumaki, một cậu bé mồ côi có ước mơ lớn trở thành Hokage – người lãnh đạo và là biểu tượng sức mạnh của làng Lá. 
        Bị xa lánh bởi dân làng vì cậu chứa đựng Cửu Vĩ Hồ Ly, Naruto không ngừng nỗ lực để chứng minh bản thân. 
        Bộ phim mang đến những trận chiến ngoạn mục, thông điệp sâu sắc về tình bạn, ý chí vượt khó, và sự hy sinh vì một mục tiêu cao cả.`,
    },
    {
      id: 2,
      title: "Dragon Ball",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/vi/4/4f/Dragon_Ball_Super_artwork.jpg",
      description: `
        **Dragon Ball** kể về hành trình phiêu lưu của Goku từ một cậu bé hiếu kỳ đến một chiến binh mạnh nhất vũ trụ. 
        Cùng những người bạn, Goku chiến đấu bảo vệ Trái Đất trước những mối nguy hiểm từ vũ trụ và các ác nhân. 
        Sức mạnh vượt bậc, tinh thần quyết tâm và lòng trung thành là những giá trị cốt lõi của bộ phim.`,
    },
    {
      id: 3,
      title: "One Piece",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/vi/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
      description: `
        **One Piece** là câu chuyện đầy cảm hứng về Monkey D. Luffy và băng Mũ Rơm trên hành trình khám phá đại dương để tìm kiếm kho báu huyền thoại "One Piece". 
        Bộ phim không chỉ gây ấn tượng bởi các trận chiến mãn nhãn mà còn bởi tình bạn, lòng dũng cảm, và ý chí chinh phục mọi thử thách.`,
    },
    {
      id: 4,
      title: "Attack on Titan",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/vi/8/8d/%C4%90%E1%BA%A1i_chi%E1%BA%BFn_Titan_manga_t%E1%BA%ADp_1_ti%E1%BA%BFng_Vi%E1%BB%87t.png",
      description: `
        **Attack on Titan** là một tác phẩm sử thi về cuộc chiến giữa con người và những Titan khổng lồ. 
        Trong một thế giới bị giới hạn bởi các bức tường, Eren Yeager và bạn bè của mình đã đứng lên chống lại các Titan để tìm kiếm sự thật và bảo vệ nhân loại.`,
    },
    {
      id: 5,
      title: "Demon Slayer",
      thumbnail:
        "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/d/e/demon-slayer-2024_1_.jpg",
      description: `
        **Demon Slayer** kể về câu chuyện cảm động của Tanjiro Kamado, một thiếu niên dũng cảm phải đối mặt với bi kịch gia đình bị quỷ tàn sát. 
        Cùng em gái Nezuko, người bị biến thành quỷ, Tanjiro gia nhập đội diệt quỷ để trả thù và tìm cách biến em mình trở lại làm người.`,
    },
    {
      id: 6,
      title: "My Hero Academia",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/vi/c/c6/HocvienanhhungNhiemvugiaicuuthegioi.jpeg",
      description: `
        **My Hero Academia** lấy bối cảnh một thế giới nơi 80% dân số sở hữu siêu năng lực, và các siêu anh hùng là biểu tượng của công lý. 
        Izuku Midoriya, dù sinh ra không có sức mạnh, vẫn nuôi mơ ước trở thành anh hùng vĩ đại nhất. 
        Câu chuyện là hành trình vượt khó, quyết tâm và lòng kiên trì để theo đuổi ước mơ.`,
    },
  ];

  useEffect(() => {
    // Tìm kiếm anime trong animeData theo id
    const foundAnime = animeData.find((anime) => anime.id === parseInt(id));

    if (foundAnime) {
      setAnime(foundAnime); // Cập nhật anime nếu tìm thấy
    } else {
      // Nếu không tìm thấy anime, chuyển hướng về trang danh sách anime
      navigate("/anime");
    }
  }, [id, navigate]); // Chạy lại khi id thay đổi

  if (!anime) {
    return <Typography>Đang tải...</Typography>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="300"
          image={anime.thumbnail}
          alt={anime.title}
        />
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {anime.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: 2, whiteSpace: "pre-line" }}
          >
            {anime.description}
          </Typography>
          <Button
            variant="contained"
            sx={{ marginTop: 2 }}
            onClick={() => navigate("/anime")}
          >
            Trở về danh sách anime
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnimeDetail;
