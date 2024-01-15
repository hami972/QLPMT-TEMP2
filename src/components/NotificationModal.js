import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const NotificationModal = ({ show, onHide, title, message, onConfirm }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      {onConfirm && (
        <Modal.Footer>
          <button
            variant="secondary"
            onClick={onConfirm}
            style={{
              backgroundColor: "#01D09E",
              borderRadius: 5,
              borderColor: "#01D09E",
              color: "#fff",
            }}
          >
            Đồng ý
          </button>
          <button
            variant="secondary"
            onClick={onHide}
            style={{
              backgroundColor: "#fff",
              borderRadius: 5,
              borderColor: "#01D09E",
              color: "#01D09E",
            }}
          >
            Hủy
          </button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default NotificationModal;
