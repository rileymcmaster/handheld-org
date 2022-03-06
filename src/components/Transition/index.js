import React from "react";
import { CSSTransition } from "react-transition-group";

const Transition = ({ show, onExited = null, children }) => {
  return (
    <CSSTransition
      in={show}
      appear={true}
      timeout={1000}
      classNames="fade"
      unmountOnExit
      onExited={onExited}
    >
      {children}
    </CSSTransition>
  );
};

export default Transition;
