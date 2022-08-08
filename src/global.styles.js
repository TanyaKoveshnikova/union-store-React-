import { createGlobalStyle } from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `screen and (max-width: ${size.mobileS})`,
  mobileM: `screen and (max-width: ${size.mobileM})`,
  mobileL: `screen and (max-width: ${size.mobileL})`,
  tablet: `screen and (max-width: ${size.tablet})`,
  laptop: `screen and (max-width: ${size.laptop})`,
  laptopL: `screen and (max-width: ${size.laptopL})`,
  desktop: `screen and (max-width: ${size.desktop})`,
  desktopL: `screen and (max-width: ${size.desktop})`,
};

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 20px 40px;
  font-family: "Gentium Book Plus", sans-serif;
  font-size: 16px;

  @media ${device.laptop}{
    padding: 10px;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;
