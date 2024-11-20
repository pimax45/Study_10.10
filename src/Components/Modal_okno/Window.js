import React from "react";
import Modal from "./Modal_okno";
import "./Modal_okno.css";

const Window = () => {
  const [isModal, setModal] = React.useState(false);
  return (
    <>
      <button onClick={() => setModal(true)}>Выйти</button>
      <Modal
        isVisible={isModal}
        title="Вы уверены?"
        //content={<p>Вы уверены?</p>}
        footer={<button>Cancel</button>}
        footer_left={<button>Выйти</button>}
        onClose={() => setModal(false)}
      />
    </>
  );
};

export default Window;
