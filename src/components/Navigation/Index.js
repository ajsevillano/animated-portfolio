import styled from 'styled-components';

const Navigation = () => {
  return (
    <StyledNav>
      <h1>
        <a href="#">Capture</a>
      </h1>
      <ul>
        <li>
          <a href="#">1.About us</a>
        </li>
        <li>
          <a href="#">2.Our work</a>
        </li>
        <li>
          <a href="#">3.Contact us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled`
`;

export default Navigation;
