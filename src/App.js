import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import styled from "styled-components";

import Calendar from "./components/Calendar";
import Draw from "./components/Draw";
import Logo from "./components/Logo";
import Weather from "./components/Weather";
import GlobalStyles from "./GlobalStyles";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Wrapper>
          {/* <Weather /> */}
          <Logo />
          <Calendar />
          <Draw />
        </Wrapper>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
};

const Wrapper = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  /* margin: 0 auto; */
  /* padding: 2rem; */
  /* max-width: 1200px; */
  /* min-height: 100vh; */
  padding: 3rem;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "weather logo calendar"
    "weather draw calendar";
`;

export default App;
