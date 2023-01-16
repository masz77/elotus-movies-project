import Image from "next/image";
import { useEffect, useState } from "react";
import { Layout, Modal, Card, Spin, Pagination, Row, Col, Menu } from "antd";
import MovieDetailModal from "../components/MovieDetailModal";

const { Meta } = Card;
const { Header, Content, Sider } = Layout;

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [nowPlaying, setNowPlaying] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const API_KEY = "1d3a874ac3bfaee7edc952412c5f1522";
      const getNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${currentPage}`;
      const response = await fetch(getNowPlaying, { method: "GET" });
      const data = await response.json();
      setNowPlaying(data);
      setIsLoading(false);
      return data;
    }
    fetchData();
    return () => {};
  }, [currentPage]);

  const onPageChange = (page, pageSize) => {
    // console.log(page, pageSize)
    setCurrentPage(page);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "3%",
          flexWrap: "wrap",
          height: "90%",
          width: "100%",
          gap: "10px 20px",
        }}
      >
        {nowPlaying.results.map((movie) => {
          return (
            <Card
              onClick={() => {
                setMovieData(movie);
                showModal();
              }}
              className="card"
              key={movie.title}
              hoverable={true}
              // style={{ height: "auto", width: "30%" }}
              style={{ flex: "1 0 21%" }}
              cover={
                <Image
                  className="coverImage"
                  fills
                  width={300}
                  height={600}
                  // layout="fill"
                  // layout="responsive"
                  alt="poster"
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                />
              }
            >
              <Meta
                title={<span style={{ fontWeight: "700" }}>{movie.title}</span>}
              />
            </Card>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "3%",
          flexWrap: "wrap",
          height: "10%",
          width: "100%",
          justifyContent: "right",
        }}
      >
        <Pagination
          className="pagination"
          onChange={onPageChange}
          responsive={true}
          defaultPageSize={20}
          defaultCurrent={1}
          total={400}
        />
      </div>
      <MovieDetailModal
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
        movieData={movieData}
      />
    </>
  );
}
