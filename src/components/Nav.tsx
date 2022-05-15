import { Link } from "react-router-dom";
import styled from "styled-components";
import navBack from "../Images/navback.png";
const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BackGround = styled.div<{ bgphoto: string }>`
  width: 100%;
  height: 45px;
  background-image: url(${(props) => props.bgphoto});
  position: absolute;
  z-index: -1;
`;
const Ul = styled.ul`
  display: flex;
  div {
    width: 140px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      border-bottom: 2px solid #0d5776;
      li {
        color: #0d5776;
      }
    }
  }
`;
const Li = styled.li`
  color: #fff3de;
  font-size: 20px;
  font-weight: 600;
`;
function Nav() {
  return (
    <Wrap>
      <BackGround bgphoto={navBack} />
      <Ul>
        <div>
          <Link to="/">
            <Li>TOP</Li>
          </Link>
        </div>
        <div>
          <Link to="/monster">
            <Li>MONSTER</Li>
          </Link>
        </div>
        <div>
          <Li>WORLD</Li>
        </div>
        <div>
          <Li>SEARCH</Li>
        </div>
        <div>
          <Li>BACK</Li>
        </div>
      </Ul>
    </Wrap>
  );
}
export default Nav;
