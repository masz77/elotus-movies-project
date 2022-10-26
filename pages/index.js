// import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Layout, Modal, Card, Spin, Pagination, Row, Col, Image } from "antd";
import useQuery from "swr";

const { Meta } = Card;
const { Header, Content, Sider } = Layout;

const MovieCard = ({ movie, setMovieData, showModal }) => {
  return (
    <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} lg={{ span: 4 }}>
      <Card
        onClick={() => {
          setMovieData(movie);
          showModal();
        }}
        className="card"
        key={movie.title}
        hoverable={true}
        style={{ styles }}
        cover={
          <Image
            className="coverImage"
            preview={false}
            alt="poster"
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          />
        }
      >
        <Meta
          title={<span style={{ fontWeight: "700" }}>{movie.title}</span>}
        />
      </Card>
    </Col>
  );
};

function useToGetMovies(_API_KEY, _currentPage) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useQuery(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${_API_KEY}&language=en-US&page=${_currentPage}`,
    fetcher
  );

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
  };
}

function MyContent({ currentPage, setMovieData, showModal }) {
  const API_KEY = "1d3a874ac3bfaee7edc952412c5f1522";
  const { movies, isLoading, isError } = useToGetMovies(API_KEY, currentPage);

  if (isLoading) return <Spin></Spin>;
  if (isError) return <div>Error....</div>;
  return (
    <Row
      justify={"start"}
      align={"middle"}
      gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
    >
      {movies.results.map((movie) => (
        <MovieCard
          key={movie.title}
          movie={movie}
          setMovieData={setMovieData}
          showModal={showModal}
        />
      ))}
    </Row>
  );
}
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Layout>
        <Content style={{ padding: "3%" }}>
          <MyContent
            currentPage={currentPage}
            setMovieData={setMovieData}
            showModal={showModal}
          />
          <Row style={{ justifyContent: "right", padding: "20px" }}>
            <Pagination
              className="pagination"
              onChange={onPageChange}
              responsive={true}
              defaultPageSize={20}
              defaultCurrent={1}
              total={400}
            />
          </Row>
        </Content>
      </Layout>

      <Modal
        closable={false}
        width={"70vw"}
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
        style={{ maxWidth: "900px" }}
        bodyStyle={{
          display: "flex",
          height: "70vh",
          padding: "0px",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Image
          style={{ height: "100%", width: "auto", flex: "1 1 0" }}
          preview={false}
          alt="sider-poster"
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieData.poster_path}`}
        />
        <div style={{ flex: "1 1 0" }}>
          {<h2>{movieData.title}</h2>}
          <h3>Overview</h3>
          <p>{movieData.overview}</p>
        </div>
      </Modal>
    </>
  );
}
