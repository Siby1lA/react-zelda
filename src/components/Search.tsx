import styled from "styled-components";
import { useRecoilState } from "recoil";
import { monsterSearch } from "../atoms";
import { useQuery } from "react-query";
import { getMonsterSearch } from "../api";
import React from "react";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  span,
  div {
    color: gray;
  }
`;
const Form = styled.form`
  margin-bottom: 10px;
  svg {
    height: 18px;
    margin: 0px 10px;
    fill: gray;
  }
  input {
    width: 50vw;
    height: 30px;
    padding: 15px 0px;
    border: none;
    background-color: white;
    font-size: 18px;
    &:focus {
      outline: none;
    }
  }
`;
const FromWrap = styled.div`
  width: fit-content;
  padding: 0px 10px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
const LeftForm = styled.div`
  display: flex;
  align-items: center;
`;
const CrossBtn = styled.div`
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
  border-radius: 12px;
`;
const RightForm = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 12px;
    fill: #b4b4b4;
  }
`;
const MonsterImg = styled.div<{ bgphoto: string }>`
  width: 150px;
  height: 150px;
  background-size: cover;
  background-image: url(${(props) => props.bgphoto});
`;
const Btn = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 40px;
  background-color: #e6e6e6;
  span {
    font-weight: 400;
    color: #b4b4b4;
  }
`;
const Examples = styled.div`
  display: flex;
`;
const Example = styled.div`
  width: fit-content;
  background-color: #f2f2f2;
  padding: 3px;
  margin: 3px 3px;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
`;
const ExampleWrap = styled.div`
  margin-bottom: 10px;
`;
const exampleList1 = [
  "lynel",
  "moblin",
  "master sword",
  "chuchu",
  "hinox",
  "Horse",
  "farosh",
];
const exampleList2 = [
  "ice wizzrobe",
  "Apple",
  "Lizalfos",
  "Grassland Fox",
  "Cucco",
  "Dinraal",
  "Bow Of Light",
];
function Search() {
  const [value, setValue] = useRecoilState(monsterSearch);
  const { data } = useQuery<any>(
    value ? ["search", value] : "",
    () => value && getMonsterSearch(value ? value : "")
  );
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  const resetBtn = () => {
    setValue("");
  };
  const CllickEx = (val: string) => {
    setValue(val);
  };
  return (
    <>
      <Wrap>
        <Form onSubmit={onSubmit}>
          <FromWrap>
            <LeftForm>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
              </svg>
              <input
                placeholder="moblin..."
                type="text"
                value={value}
                onChange={onChange}
              ></input>
            </LeftForm>
            <RightForm>
              <CrossBtn onClick={resetBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
              </CrossBtn>
              <Btn>
                <span>Search!</span>
              </Btn>
            </RightForm>
          </FromWrap>
        </Form>
        <ExampleWrap>
          <Examples>
            {exampleList2.map((data: string) => (
              <Example onClick={() => CllickEx(data)}>
                {">"}
                {data}
              </Example>
            ))}
          </Examples>
          <Examples>
            {exampleList1.map((data: string) => (
              <Example onClick={() => CllickEx(data)}>
                {">"}
                {data}
              </Example>
            ))}
          </Examples>
        </ExampleWrap>
        {data ? (
          <>
            <MonsterImg bgphoto={data?.data.image}></MonsterImg>
            <div>{data?.data.name}</div>
            {data?.data.common_locations?.map((val: string) => (
              <div key={val}>{val}</div>
            ))}
            <div>{data?.data.description}</div>
          </>
        ) : (
          <div>Searching...</div>
        )}
      </Wrap>
    </>
  );
}
export default React.memo(Search);
