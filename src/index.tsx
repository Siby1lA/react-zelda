import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import "leaflet/dist/leaflet.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./Maps/control-panel";
import locationData from "./data/locations";
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: black;
  line-height: 1.2;
  overflow-x:hidden
  
}
a {
  text-decoration:none;
  color:inherit;
}
`;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const client = new QueryClient();
const initialState = {
  activeIconTypes: [],
  locations: locationData,
};

let store = createStore(reducer, initialState);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <QueryClientProvider client={client}>
          <GlobalStyle />
          <App />
        </QueryClientProvider>
      </RecoilRoot>
    </Provider>
  </React.StrictMode>
);
