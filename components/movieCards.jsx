import { Spin, Col, Card, Image } from "antd";
const { Meta } = Card;


export default function PrimaryButton({nowPlaying, isLoading }) {
    return (
        <>
        
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
        </>
    )
}

