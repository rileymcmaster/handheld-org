import React, { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchWord } from "../utils/fetchWord";
import { IoMdRefresh } from "react-icons/io";
import CanvasDraw from "react-canvas-draw";

const Draw = () => {
  const randomWord = useQuery("randomWord", fetchWord, { enabled: false });
  const canvasRef = useRef(null);

  useEffect(() => {
    randomWord.refetch();
  }, []);

  const canvasProps = {
    brushRadius: 5,
    lazyRadius: 0,
    hideInterface: true,
    hideGrid: true,
    brushColor: "rgba(50,50,50,.9)",
  };

  const handleClick = () => {
    randomWord.refetch();
    canvasRef.current.clear();
  };

  return (
    <Wrapper>
      <p>Draw this:</p>
      <div className="row">
        <h2>{randomWord.data?.[0]} </h2>
        <button onClick={handleClick}>
          <IoMdRefresh size={"1.5rem"} />
        </button>
      </div>

      <DrawingPad>
        <CanvasDraw ref={canvasRef} {...canvasProps} />
      </DrawingPad>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: draw;
  align-self: middle;
  justify-self: center;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  .row {
    width: 300px;
    padding-top: 1em;
    padding-bottom: 1em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    align-items: center;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    transform: translateY(50%);
    color: var(--primary-colour);
    border: none;
    outline: none;
    width: 3em;
    height: 3em;
    background: transparent;
    border-radius: 50%;
    transition: all 0.2s ease;
  }
  button:hover {
    transform: translateY(50%) rotate(20deg);
  }
  button:focus-visible {
    box-shadow: 0 0 0 1px inset var(--primary-colour);
  }
  button:active {
    transform: translateY(50%) rotate(65deg);
  }
`;

const DrawingPad = styled.div`
  border: 10px ridge var(--third-colour);

  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;transform:rotate(45deg);'><text y='50%'>🖌</text></svg>") -10
      10,
    auto;
`;
export default Draw;
