import React, { LazyExoticComponent } from "react";
import { Button, Modal } from "react-bootstrap";
type JSXComponent = () => JSX.Element;

interface propsModalCustom {
  id: string;
  ComponentContent: LazyExoticComponent<JSXComponent> | JSXComponent;
  modalTitle: string;
  nameClose: string;
  nameSuccess: string;
  buttosFooter: boolean;
  show: boolean;
  onHide: () => void;
}

export const ModalCustom = ({
  id,
  ComponentContent,
  modalTitle,
  nameClose = "Close",
  nameSuccess = "Save changes",
  buttosFooter = true,
  onHide,
  show,
}: propsModalCustom) => {
  if (!show) return null;

  return (
    <Modal style={{ color: "black" }} show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {typeof ComponentContent === "function" && <ComponentContent />}{" "}
      </Modal.Body>
      {buttosFooter && (
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            {nameClose}
          </Button>
          <Button variant="primary" onClick={onHide}>
            {nameSuccess}
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );

};
