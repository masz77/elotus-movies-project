import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Layout, Modal, Card, Spin, Pagination, Row, Col } from "antd";

const { Meta } = Card;
const { Header, Content } = Layout;

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
        <Header>Header</Header>
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
                  <Col key={movie.title} span={4}>
                    <Card
                      onClick={() => {
                        setMovieData(movie);
                        showModal();
                      }}
                      className="card"
                      key={movie.title}
                      hoverable={true}
                      style={styles}
                      cover={
                        <Image
                          className="coverImage"
                          width={240}
                          height={300}
                          // layout="fill"
                          layout="responsive"
                          alt="poster"
                          src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                        />
                      }
                    >
                      <Meta
                        style={{ textAlign: "center" }}
                        title={movie.title}
                      />
                    </Card>
                  </Col>
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
        title="Movie Info"
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <h2>
          {isLoading == false && `${movieData.title}`}
          {/* ${movieData.release_date.split("-")[0]} */}
        </h2>
        <h3>Overview</h3>
        <p>{movieData.overview}</p>
      </Modal>
    </>
  );
}
