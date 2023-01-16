import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Card, Spin, Pagination } from "antd";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import MovieDetailModal from "../components/MovieDetailModal";
import axios from "axios";

const { Meta } = Card;

export default function TopRated() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [topRated, setTopRated] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const queryClient = useQueryClient();
  const {
    isSuccess,
    isLoading,
    isError,
    data: movies,
    error,
  } = useQuery({
    queryKey: ["topRated", currentPage],
    queryFn: () => fetchTopRated(currentPage),
  });

  if (isLoading) {
    return <Spin />;
  }

  // if (isLoading === false) {
  //   setTopRated(data);
  // }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

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

  if (isSuccess) {
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
          {movies.map((movie) => {
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
                  title={
                    <span style={{ fontWeight: "700" }}>{movie.title}</span>
                  }
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
}

const fetchTopRated = (currentPage) => {
  const API_KEY = "1d3a874ac3bfaee7edc952412c5f1522";
  const getTopRatedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${currentPage}`;
  // console.log(getTopRatedURL);
  // return fetch(getTopRatedURL, { method: "GET" }).then((res) => res.data);
  return axios.get(getTopRatedURL).then(({ data }) => data);
};
