import React from "react";
import reactDOM from "react-dom";
import "./Modal.css";

const portalRoot = document.getElementById("portal-root");

function UIModal({ children}) {

   

  return reactDOM.createPortal(
    <div className="ui-modal__overlay">
      <div className="ui-modal">
        <button className="ui-modal__close-button" type="button">
          X
        </button>
        {children}
      </div>
    </div>,
    portalRoot
  );
}

export default UIModal;
