import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Footer Content </p>
    </FooterWrapper>
  );
};

export default Footer;
