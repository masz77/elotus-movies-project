// import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Layout, Modal, Card, Spin, Pagination, Row, Col, Image } from "antd";

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
            // width={240}
            // height={300}
            // layout="fill"
            // layout="responsive"
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
    // console.log(page, pageSize);
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
          <Row
            justify={"start"}
            align={"middle"}
            gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
          >
            {isLoading == true && <Spin />}
            {isLoading == false &&
              nowPlaying.results.map((movie) => {
                return (
                  <MovieCard
                    key={movie.title}
                    movie={movie}
                    setMovieData={setMovieData}
                    showModal={showModal}
                  />
                );
              })}
          </Row>
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
        bodyStyle={{
          height: "70vh",
          padding: "0px",
          flexDirection: "row",
          maxHeight: "900px",
          justifyContent: "flex-start",
        }}
      >
        <Image
          // width={600}
          // height={900}
          //width={"100%"}
          height={"100%"}
          // layout="fill"
          // layout="responsive"
          // quality={100}
          // placeholder={blur}
          preview={false}
          alt="sider-poster"
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieData.poster_path}`}
        />

        {/* <Content style={{ flexGrow: "1" }}>
            {isLoading == false && <h2>{movieData.title}</h2>}

            <h3>Overview</h3>
            <p>{movieData.overview}</p>
          </Content> */}
        <Layout style={{ gap: "10px" }}>
          <Sider style={{ flexGrow: "1" }}></Sider>
        </Layout>
      </Modal>
    </>
  );
}
