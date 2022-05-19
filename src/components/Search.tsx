import styled from "styled-components";
import { useRecoilState } from "recoil";
import { monsterSearch } from "../atoms";
import { useQuery } from "react-query";
import { getMonsterSearch } from "../api";
import React, { useDebugValue } from "react";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span,
  div {
    color: black;
  }
`;
const Form = styled.form`
  input {
    width: 50vw;
    height: 40px;
    padding: 15px 0px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    font-size: 18px;
    margin-bottom: 10px;
    &:focus {
      outline: none;
    }
  }
`;
const MonsterImg = styled.div<{ bgphoto: string }>`
  width: 150px;
  height: 150px;
  background-size: cover;
  background-image: url(${(props) => props.bgphoto});
`;
function Search() {
  const [value, setValue] = useRecoilState(monsterSearch);
  const { data } = useQuery<any>(
    value ? ["search", value] : "",
    () => value && getMonsterSearch(value ? value : "")
  );
  let timer: any = null;
  const onChange = (e: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setValue(e.target.value);
    }, 1000);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  console.log(value);
  return (
    <>
      <Wrap>
        <Form onSubmit={onSubmit}>
          <input
            placeholder="moblin..."
            onChange={onChange}
            type="text"
          ></input>
        </Form>
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
