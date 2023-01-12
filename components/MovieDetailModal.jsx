import { Layout, Modal, Card, Spin, Pagination, Row, Col, Menu } from "antd";
import Image from "next/image";

export default function MovieDetailModal() {
  return (
    <div>
      <Modal
        closable={false}
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
        bodyStyle={{ padding: "0px" }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5%" }}>
          <div>
            <Image
              width={600}
              height={900}
              // layout="fill"
              layout="responsive"
              quality={100}
              // placeholder={blur}
              alt="sider-poster"
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieData.poster_path}`}
            />
          </div>
          <div>
            <h2>
              {isLoading == false && `${movieData.title}`}
              {/* ${movieData.release_date.split("-")[0]} */}
            </h2>
            <h3>Overview</h3>
            <p>{movieData.overview}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
