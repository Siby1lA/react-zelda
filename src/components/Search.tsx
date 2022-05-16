import styled from "styled-components";
import { motion } from "framer-motion";
const Overlay = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;
const Wrap = styled.div`
  color: white;
  width: 100%;
  height: 450px;
  background-color: whitesmoke;
  position: absolute;
  z-index: 1;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  padding: 20px;
`;
const InputWrap = styled.div``;
function Search() {
  return (
    <>
      <Overlay
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween", duration: 1 }}
      />
      <Wrap>
        <InputWrap>
          <input type="text"></input>
        </InputWrap>
      </Wrap>
    </>
  );
}
export default Search;
