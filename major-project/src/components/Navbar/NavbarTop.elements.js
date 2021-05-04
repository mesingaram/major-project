import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  background: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
`;


export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: right;
  width: 100%;
  height: 80px;

  ${Container}
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  
`;

export const NavLinks = styled(Link)`
  color: #101522;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 1060px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;