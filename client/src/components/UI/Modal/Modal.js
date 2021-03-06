import React from "react";
// import reactDOM from "react-dom";
import "./Modal.css";

// const portalRoot = document.getElementById("portal-root");
// 
// function UIModal({ id = "modal", onClose = () => {}}) {
function UIModal({ id = "modal", onClose = () => {}, children }) {
  const handleOutSideClick = (evt) => {
    if (evt.target.id === id) onClose();
  };

  // return reactDOM.createPortal(
  return (
    <div id="modal" className="ui-modal__overlay" onClick={handleOutSideClick}>
      <div className="ui-modal">
        <button
          className="ui-modal__close-button"
          type="button"
          onClick={onClose}
        >
          X
        </button>
        <div className="ui-modal__content">{children}</div>
        {/* <div className="ui-modal__content"><h1>Comentários</h1></div> */}
      </div>
    </div>
    // ,
    // portalRoot
  );
}

export default UIModal;
