import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Layout, Modal, Card, Spin, Pagination, Row, Col, Menu } from "antd";

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
    // console.log(page, pageSize);
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
      <Layout>
        <Content style={{ padding: "3%" }}>
          <Row
            justify={"start"}
            align={"middle"}
            gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
          >
            {isLoading == false &&
              nowPlaying.results.map((movie) => {
                return (
                  <Col key={movie.title} xs={{ span: 6 }} lg={{ span: 4 }}>
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
                          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                        />
                      }
                    >
                      <Meta
                        title={
                          <span style={{ fontWeight: "700" }}>
                            {movie.title}
                          </span>
                        }
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
    </>
  );
}
