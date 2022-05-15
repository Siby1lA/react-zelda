import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useState } from "react";
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
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
  height: 630px;
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
  width: 750px;
  height: 422px;
`;
const Movies = styled.div`
  width: 750px;
  color: #fff3de;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
`;
const MoviesBox = styled.div`
  width: 235px;
`;
function TrailerModal() {
  const [movies, setMovies] = useState(
    "https://www.youtube.com/embed/GjPidZXIuzs"
  );
  const navigate = useNavigate();
  const { scrollY } = useViewportScroll();
  const trailerMatch: PathMatch<string> | null = useMatch("/trailer");
  const clicked =
    trailerMatch?.pathname && "/trailer" === trailerMatch?.pathname;
  const onOverlayClick = () => {
    navigate("/");
  };
  return (
    <>
      {clicked && (
        <AnimatePresence>
          <Overlay
            onClick={onOverlayClick}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 1 }}
          />
          <ModalWrap>
            <Contents
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", duration: 1 }}
              style={{ top: scrollY.get() + 80 }}
            >
              <Iframe src={movies}></Iframe>
              <Movies>
                <MoviesBox>
                  <span>1ST TRAILER</span>
                </MoviesBox>
                <MoviesBox>
                  <span>2ST TRAILER</span>
                </MoviesBox>
                <MoviesBox>
                  <span>3ST TRAILER</span>
                </MoviesBox>
              </Movies>
            </Contents>
          </ModalWrap>
        </AnimatePresence>
      )}
    </>
  );
}
export default TrailerModal;
