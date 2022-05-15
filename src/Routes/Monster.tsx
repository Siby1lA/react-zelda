import { getMonster } from "../api";
import { useQuery } from "react-query";
import styled from "styled-components";
import Nav from "../components/Nav";
import logo_switch from "../Images/logo_switch.png";
import logo_wiiu from "../Images/logo_wiiu.png";
import { motion } from "framer-motion";
const Wrap = styled.div``;
const BackGround = styled.div<{ bgphoto: string }>`
  background-image: url(${(props) => props.bgphoto});
  width: 100vw;
  height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
const HeaderLogo = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;
const Contents = styled.div`
  padding: 10px;
  width: 1000px;
  height: 600px;
  background-color: aliceblue;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  overflow: hidden;
  overflow-y: scroll;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Img = styled(motion.div)<{ bgphoto: string }>`
  background-image: url(${(props) => props.bgphoto});
  height: 225px;
  width: 160px;
  background-position: center center;
  background-size: cover;
  margin: 10px;
`;
const Screen = styled.div`
  display: flex;
  justify-content: center;
`;

function Monster() {
  const { data: Monster, isLoading: Ml } = useQuery<any>(
    "monsters",
    getMonster
  );

  return (
    <>
      {Ml ? (
        <div>Loading...</div>
      ) : (
        <>
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
              <Screen>
                <Contents>
                  {Monster.data.map((monster: any) => (
                    <div key={monster.id}>
                      {monster.name}
                      <Img bgphoto={monster.image}></Img>
                    </div>
                  ))}
                </Contents>
              </Screen>
            </BackGround>
            <Nav></Nav>
          </Wrap>
        </>
      )}
    </>
  );
}
export default Monster;
