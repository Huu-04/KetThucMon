import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link để điều hướng

const AnimeList = ({ searchQuery }) => {
  // Dữ liệu anime có sẵn
  const animeData = [
    {
      id: 1,
      title: "Naruto",
      thumbnail:
        "https://pic9.iqiyipic.com/image/20210812/10/4d/a_100464174_m_601_en_260_360.jpg",
    },
    {
      id: 2,
      title: "Dragon Ball",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/vi/4/4f/Dragon_Ball_Super_artwork.jpg",
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
        "https://upload.wikimedia.org/wikipedia/vi/8/8d/%C4%90%E1%BA%A1i_chi%E1%BA%BFn_Titan_manga_t%E1%BA%ADp_1_ti%E1%BA%BFng_Vi%E1%BB%87t.png",
    },
    {
      id: 5,
      title: "Demon Slayer",
      thumbnail:
        "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/d/e/demon-slayer-2024_1_.jpg",
    },
    {
      id: 6,
      title: "My Hero Academia",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/vi/c/c6/HocvienanhhungNhiemvugiaicuuthegioi.jpeg",
    },
    {
      id: 7,
      title: "Jujutsu Kaisen",
      thumbnail:
        "https://images-na.ssl-images-amazon.com/images/I/815Hq6BC0hL.jpg",
    },
    {
      id: 8,
      title: "Tokyo Revengers",
      thumbnail:
        "https://cdn0.fahasa.com/media/catalog/product/t/o/tokyo_revengers_character_book_1_bia_1.jpg",
    },
    {
      id: 9,
      title: "Fullmetal Alchemist",
      thumbnail:
        "https://play-lh.googleusercontent.com/OOewtgk0Z1f7o0Th6fF0ezNrvXiicH2VZraIBdaGsHVvgOnCXxg0D2o7uHK48eeIbHbKvA=w240-h480-rw",
    },
    {
      id: 10,
      title: "Sword Art Online",
      thumbnail:
        "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/s/a/saop_-_poster.jpg",
    },
    {
      id: 11,
      title: "Bleach",
      thumbnail:
        "https://play-lh.googleusercontent.com/KgrVS9wzFNB6TPiaPBK5ZiBletoT4M7pQ059htLN0cR9eYWL0Mbpgvh7eqAFalkoeonU",
    },
    {
      id: 12,
      title: "Death Note",
      thumbnail:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rblz-lodf664p2lm804",
    },
    {
      id: 13,
      title: "Hunter x Hunter",
      thumbnail:
        "https://play-lh.googleusercontent.com/dZK1RhvWopIxnjCLawCKuPoNCIGSkE2TZZrPQ9CB8SjPf7PwC0GY2esmGcYTjE2p6vMBVA",
    },
    {
      id: 14,
      title: "Fairy Tail",
      thumbnail:
        "https://m.media-amazon.com/images/I/91HDmjBfuxL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 15,
      title: "Black Clover",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7Jvky854Nfq2gvRXMWWsPAw5ynzM6o4pIg&s",
    },
  ];

  const [filteredAnime, setFilteredAnime] = useState(animeData);

  useEffect(() => {
    // Nếu có từ khóa tìm kiếm, lọc anime theo tên
    if (searchQuery) {
      const filtered = animeData.filter((anime) =>
        anime.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredAnime(filtered);
    } else {
      setFilteredAnime(animeData);
    }
  }, [searchQuery]); // Chạy lại khi searchQuery thay đổi

  return (
    <Grid container spacing={3}>
      {filteredAnime.length > 0 ? (
        filteredAnime.map((anime) => (
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
                  <Button variant="contained" sx={{ marginTop: 2 }}>
                    Xem Chi TIết
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="body1" sx={{ color: "#fff" }}>
          Không tìm thấy anime nào khớp với từ khóa của bạn.
        </Typography>
      )}
    </Grid>
  );
};

export default AnimeList;
