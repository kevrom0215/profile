import React from "react";
import "../../styles/global.css";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="wrapper">
      <img
        src="https://httpstatusdogs.com/img/200.jpg"
        style={{ height: "300px", width: "auto" }}
      ></img>
      <h2>Dashboard</h2>
      <p>Welcome to the Dashboard!</p>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>This is a Modal</h2>
        <p>You can place any content here.</p>
      </Modal>
    </div>
  );
};

export default Dashboard;
