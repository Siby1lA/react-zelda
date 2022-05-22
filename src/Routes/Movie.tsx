import { getMonster } from "../api";
import { useQuery } from "react-query";
import styled from "styled-components";
import Nav from "../components/Nav";
import logo_switch from "../Images/logo_switch.png";
import logo_wiiu from "../Images/logo_wiiu.png";
import { trailerDatas } from "../components/trailerDatas";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import MovieModal from "../components/MovieModal";

const Wrap = styled.div``;
const BackGround = styled.div<{ bgphoto: string }>`
  background-image: url(${(props) => props.bgphoto});
  width: 100vw;
  height: 80vh;
  padding-bottom: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const HeaderLogo = styled.div`
  div {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Movies = styled.div`
  color: #fff3de;
  font-size: 18px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
`;
const MoviesBox = styled.div`
  width: fit-content;
  height: 130px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px 10px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
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
  margin-bottom: 5px;
`;
const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  color: #fff3de;
  margin-bottom: 30px;
  border-bottom: 2px solid #fff3de;
  padding-bottom: 10px;
  text-align: center;
  width: 180px;
`;
function Movie() {
  const navigate = useNavigate();

  const onMovieClicked = (index: number) => {
    navigate(`moviemodal/${index}`);
  };
  return (
    <Wrap>
      <BackGround
        bgphoto={"https://pbs.twimg.com/media/Ddkr-pcU0AAqMIl.jpg:large"}
      >
        <HeaderLogo>
          <div>
            <img src={logo_wiiu}></img>
            <img src={logo_switch}></img>
          </div>
        </HeaderLogo>
        <Screen>
          <Title>MOVIE</Title>
          <Movies>
            {trailerDatas.back.map((val: any, index) => (
              <MoviesBox key={index} onClick={() => onMovieClicked(index)}>
                <TrailerImg bgphoto={val}></TrailerImg>
                <div>{index + 1}ST TRAILER</div>
              </MoviesBox>
            ))}
          </Movies>
        </Screen>
      </BackGround>
      <Nav></Nav>
      <MovieModal />
    </Wrap>
  );
}
export default Movie;
