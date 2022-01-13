import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchWord } from "../utils/fetchWord";
import { IoMdRefresh } from "react-icons/io";
import CanvasDraw from "react-canvas-draw";

const Draw = () => {
  const randomWord = useQuery("randomWord", fetchWord, { enabled: false });
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState(200);

  useEffect(() => {
    randomWord.refetch();

    const defineCanvasSize = () => {
      const finalSize =
        window.innerWidth <= 768
          ? wrapperRef.current.clientWidth - 50
          : window.innerWidth / 3 <= 400
          ? window.innerWidth / 3
          : 400;
      setCanvasSize(finalSize);
    };
    defineCanvasSize();
    window.addEventListener("resize", defineCanvasSize);
    return () => window.removeEventListener("resize", defineCanvasSize);
  }, []);

  const canvasProps = {
    brushRadius: 3,
    lazyRadius: 5,
    canvasWidth: canvasSize,
    canvasHeight: canvasSize,
    hideGrid: true,
    brushColor: "rgba(50,50,50,.9)",
  };

  const handleClick = () => {
    randomWord.refetch();
    canvasRef.current.clear();
  };

  return (
    <Wrapper ref={wrapperRef}>
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 100%;
  width: 100%;
  max-width: 420px;
  margin: auto;
  margin-top: 1rem;

  @media (min-width: 768px) {
    margin: auto;
  }
  font-size: 1rem;
  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: relative;
    padding-top: 1em;
    padding-bottom: 1em;

    text-align: center;
  }

  button {
    margin-left: auto;
    position: absolute;
    right: 0;
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
    transform: rotate(20deg);
  }
  button:focus-visible {
    box-shadow: 0 0 0 1px inset var(--primary-colour);
  }
  button:active {
    transform: rotate(65deg);
  }
`;

const DrawingPad = styled.div`
  border: 10px ridge var(--third-colour);
  margin: 0 20px;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;transform:rotate(45deg);'><text y='50%'>🖌</text></svg>") -100
      10,
    auto;
`;
export default Draw;
