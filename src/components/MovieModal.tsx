import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useState } from "react";
import { trailerDatas } from "./trailerDatas";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
`;
const ModalWrap = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Contents = styled(motion.div)`
  position: absolute;
  width: 760px;
  height: auto;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Iframe = styled.iframe`
  width: 1000px;
  height: 565px;
`;

function MovieModal() {
  const [movies, setMovies] = useState(
    "https://www.youtube.com/embed/_xL2VGg8bXU"
  );
  const navigate = useNavigate();
  const { scrollY } = useViewportScroll();
  const Match: PathMatch<string> | null = useMatch("movie/moviemodal/:id");
  let id: string | undefined = Match?.params.id;
  const onOverlayClick = () => {
    navigate("/movie");
  };
  return (
    <>
      {Match && (
        <AnimatePresence>
          <Overlay
            key={1}
            onClick={onOverlayClick}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 1 }}
          />
          <ModalWrap>
            <Contents
              key={2}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", duration: 1 }}
              style={{ top: scrollY.get() + 60 }}
            >
              <Iframe src={trailerDatas.url[Number(id)]}></Iframe>
              <div style={{ height: "30px" }}></div>
            </Contents>
          </ModalWrap>
        </AnimatePresence>
      )}
    </>
  );
}
export default MovieModal;
