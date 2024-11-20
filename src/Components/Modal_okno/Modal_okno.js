import React from "react";
import "./Modal_okno.css";

const Modal = ({
  isVisible = false,
  title,
  content,
  footer,
  footer_left,
  onClose,
}) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          {footer && (
            <div className="modal-footer">
              {footer_left}
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
