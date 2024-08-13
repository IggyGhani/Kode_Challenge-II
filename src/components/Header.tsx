import styled from "styled-components";

const HeadWrapper = styled.header`
  background: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;
const Header = () => {
  return (
    <HeadWrapper>
      <h1> Welcome to Greenfair Park</h1>
    </HeadWrapper>
  );
};

export default Header;
