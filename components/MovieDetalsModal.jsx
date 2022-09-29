import React, {useState} from 'react'
import { Modal } from 'antd'

export default function MovieDetalsModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
  return (
    <div>
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
    </div>
  )
}
