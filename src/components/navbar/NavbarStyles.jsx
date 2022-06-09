import styledComponents from "styled-components";

import { Link } from "react-router-dom";

export const NavigationContainer = styledComponents.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styledComponents(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinksContainer = styledComponents.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styledComponents(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
