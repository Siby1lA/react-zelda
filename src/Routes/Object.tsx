import { getCategory } from "../api";
import { useQuery } from "react-query";
import styled from "styled-components";
import Nav from "../components/Nav";
import logo_switch from "../Images/logo_switch.png";
import logo_wiiu from "../Images/logo_wiiu.png";
import { motion } from "framer-motion";
import { useState } from "react";
import navBack from "../Images/navback.png";
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
  position: relative;
  padding: 10px;
  width: 1000px;
  height: 65vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  overflow: hidden;
  overflow-y: scroll;
  border-top: 3px solid #c6ad7b;
  border-bottom: 3px solid #c6ad7b;
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
  position: relative;
  div {
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
    color: #fff3de;
    background-color: rgba(0, 0, 0, 0.2);
  }
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
`;
const Li = styled.li`
  color: #fff3de;
  margin: 0px 10px;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
`;
const ListBack = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
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
                    <ListBack>
                      <Li key={value} onClick={() => onList(value)}>
                        {value}
                      </Li>
                    </ListBack>
                  ))}
                </Ul>
              </SelectCategory>
              {isLoading ? (
                <Contents style={{ display: "flex", justifyContent: "center" }}>
                  Loading...
                </Contents>
              ) : (
                <Contents>
                  {food
                    ? data.data.map((monster: any) => (
                        <div key={monster.id}>
                          <Img bgphoto={monster.image}>
                            <div>{monster.name}</div>
                          </Img>
                        </div>
                      ))
                    : data.data.food.map((monster: any) => (
                        <div key={monster.id}>
                          {monster.name}
                          <Img bgphoto={monster.image}></Img>
                        </div>
                      ))}
                </Contents>
              )}
            </Screen>
          </BackGround>
          <Nav></Nav>
        </Wrap>
      </>
    </>
  );
}
export default Object;
