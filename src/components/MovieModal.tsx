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
const Movies = styled.div`
  width: 1000px;
  color: #fff3de;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #c6ad7b;
`;
const MoviesBox = styled.div`
  width: 300px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  &:hover {
    border-top: 2px solid #0d5776;
  }
  font-size: 18px;
  font-weight: 600;
`;
const TrailerImg = styled.div<{ bgphoto: string }>`
  background-image: url(${(props) => props.bgphoto});
  width: 180px;
  height: 100px;
  background-size: cover;
  background-position: center center;
`;

function MovieModal() {
  const [movies, setMovies] = useState(
    "https://www.youtube.com/embed/_xL2VGg8bXU"
  );
  const navigate = useNavigate();
  const { scrollY } = useViewportScroll();
  const Match: PathMatch<string> | null = useMatch("/moviemodal/:id");
  let id: string | undefined = Match?.params.id;
  console.log(id);

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
              <Iframe src={movies}></Iframe>
              <div style={{ height: "30px" }}></div>
            </Contents>
          </ModalWrap>
        </AnimatePresence>
      )}
    </>
  );
}
export default MovieModal;
