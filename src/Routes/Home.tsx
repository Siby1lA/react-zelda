import styled from "styled-components";
import Nav from "../components/Nav";
import logo_switch from "../Images/logo_switch.png";
import logo_wiiu from "../Images/logo_wiiu.png";
import { useNavigate } from "react-router-dom";
import TrailerModal from "../components/TrailerModal";
import { useQuery } from "react-query";
import { getMonsterSearch } from "../api";
import { useRecoilValue } from "recoil";
import { monsterSearch } from "../atoms";

const Wrap = styled.div``;
const BackGround = styled.div<{ bgphoto: string }>`
  background-image: url(${(props) => props.bgphoto});
  width: 100vw;
  height: 80vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
const HeaderLogo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  div {
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;
const Trailer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;
const Movie = styled.div`
  border: 3px solid #fff3de;
  width: fit-content;
  height: 428px;
  position: relative;
  cursor: pointer;
`;
const TrailerLogo = styled.div`
  position: absolute;
  color: #fff3de;
  font-size: 32px;
  font-weight: 600;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    width: 60px;
  }
`;

function Home() {
  const navigate = useNavigate();
  const onMovieClicked = () => {
    navigate("/trailer");
  };
  return (
    <Wrap>
      <>
        <BackGround
          bgphoto={
            "https://c.wallhere.com/photos/dc/fb/The_Legend_of_Zelda_Breath_of_the_Wild_landscape-39054.jpg!d"
          }
        >
          <HeaderLogo>
            <div>
              <img src={logo_wiiu}></img>
              <img src={logo_switch}></img>
            </div>
          </HeaderLogo>
          <Trailer>
            <Movie onClick={() => onMovieClicked()}>
              <video
                width="750px"
                autoPlay
                loop
                muted
                playsInline
                src="/videos/trailer.mp4"
              ></video>
              <TrailerLogo>
                <span>Trailer</span>
                <svg
                  fill="#fff3de"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </TrailerLogo>
            </Movie>
          </Trailer>
        </BackGround>
        <Nav></Nav>
        <TrailerModal />
      </>
    </Wrap>
  );
}
export default Home;
