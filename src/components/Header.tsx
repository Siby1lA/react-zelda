import styled from "styled-components";
const Wrap = styled.div``;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
`;
const Logo = styled.div<{ bgphoto: string }>`
  width: 120px;
  height: 40px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
`;
const Ul = styled.ul`
  display: flex;
  color: gray;
  font-weight: 400;
`;
const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 15px;
  svg {
    height: 14px;
    fill: gray;
    margin-right: 5px;
  }
  &:hover {
    color: tomato;
    svg {
      fill: tomato;
    }
  }
  span {
    font-size: 12px;
    margin-top: 2px;
  }
`;
function Header() {
  return (
    <Wrap>
      <Nav>
        <Logo
          bgphoto={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/2560px-Nintendo.svg.png"
          }
        />
        <Ul>
          <Li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
            </svg>
            <span>검색</span>
          </Li>
          <Li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M0 155.2C0 147.9 2.153 140.8 6.188 134.7L81.75 21.37C90.65 8.021 105.6 0 121.7 0H518.3C534.4 0 549.3 8.021 558.2 21.37L633.8 134.7C637.8 140.8 640 147.9 640 155.2C640 175.5 623.5 192 603.2 192H36.84C16.5 192 .0003 175.5 .0003 155.2H0zM64 224H128V384H320V224H384V464C384 490.5 362.5 512 336 512H112C85.49 512 64 490.5 64 464V224zM512 224H576V480C576 497.7 561.7 512 544 512C526.3 512 512 497.7 512 480V224z" />
            </svg>
            <span>스토어</span>
          </Li>
          <Li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
            </svg>
            <span>로그인</span>
          </Li>
        </Ul>
      </Nav>
    </Wrap>
  );
}
export default Header;
