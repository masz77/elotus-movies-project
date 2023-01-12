import { Layout, Modal, Card, Spin, Pagination, Row, Col, Menu } from "antd";
import Image from "next/image";

export default function MovieDetailModal(props) {
  return (
    <div>
      <Modal
        closable={false}
        footer={null}
        open={props.isModalOpen}
        onCancel={props.handleCancel}
        bodyStyle={{ padding: "0px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "5%",
          }}
        >
          <div>
            <Image
              width={600}
              height={900}
              quality={100}
              // placeholder={blur}
              alt="sider-poster"
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${props.movieData.poster_path}`}
            />
          </div>
          <div>
            <h2>
              {props.movieData.title}
              {/* ${movieData.release_date.split("-")[0]} */}
            </h2>
            <h3>Overview</h3>
            <p>{props.movieData.overview}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
