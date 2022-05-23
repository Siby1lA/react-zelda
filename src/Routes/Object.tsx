import { getCategory } from "../api";
import { useQuery } from "react-query";
import styled from "styled-components";
import Nav from "../components/Nav";
import logo_switch from "../Images/logo_switch.png";
import logo_wiiu from "../Images/logo_wiiu.png";
import { motion } from "framer-motion";
import { useState } from "react";
const Wrap = styled.div``;
const BackGround = styled.div<{ bgphoto: string }>`
  background-image: url(${(props) => props.bgphoto});
  width: 100vw;
  height: fit-content;
  padding-bottom: 30px;
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
  height: 70vh;
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
  flex-direction: column;
  align-items: center;
`;
const SelectCategory = styled.div`
  width: 1000px;
`;
const Ul = styled.ul`
  display: flex;
  background-color: #fff3de;
`;
const Li = styled.li`
  margin: 0px 10px;
  font-size: 24px;
  cursor: pointer;
`;
const vlaues = ["Monsters", "Creatures", "Equipment", "Materials", "Treasure"];
//Creatures Object diff
function Object() {
  const [value, setValue] = useState("monsters");
  const [food, setFood] = useState(true);
  const { data, isLoading } = useQuery<any>(
    value ? ["category", value] : "",
    () => value && getCategory(value ? value : "")
  );
  const onList = (val: string) => {
    if (val === "Creatures") setFood(false);
    else setFood(true);
    setValue(val.toLowerCase());
  };
  return (
    <>
      {isLoading ? (
        <div style={{ color: "whitesmoke" }}>Loading...</div>
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
                <SelectCategory>
                  <Ul>
                    {vlaues.map((value: string) => (
                      <Li key={value} onClick={() => onList(value)}>
                        {value}
                      </Li>
                    ))}
                  </Ul>
                </SelectCategory>
                <Contents>
                  {food
                    ? data.data.map((monster: any) => (
                        <div key={monster.id}>
                          {monster.name}
                          <Img bgphoto={monster.image}></Img>
                        </div>
                      ))
                    : data.data.food.map((monster: any) => (
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
export default Object;
