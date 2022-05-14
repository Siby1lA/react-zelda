import styled from "styled-components";
import Nav from "../components/Nav";
import logo_switch from "../Images/logo_switch.png";
import logo_wiiu from "../Images/logo_wiiu.png";
const Wrap = styled.div``;
const BackGround = styled.div<{ bgphoto: string }>`
  background-image: url(${(props) => props.bgphoto});
  width: 100vw;
  height: 80vh;
  background-size: cover;
`;
const HeaderLogo = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;
const Trailer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const Movie = styled.div`
  border: 3px solid #fff3de;
  width: fit-content;
  height: 428px;
  position: relative;
`;
const TrailerLogo = styled.div`
  position: absolute;
  color: #fff3de;
  font-size: 28px;
  font-weight: 600;
  bottom: 0;
  right: 0;
  padding: 10px;
`;
const Iframe = styled.iframe``;
function Home() {
  return (
    <Wrap>
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
          <Movie>
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
            </TrailerLogo>
          </Movie>
        </Trailer>
      </BackGround>
      <Nav></Nav>
    </Wrap>
  );
}
export default Home;
