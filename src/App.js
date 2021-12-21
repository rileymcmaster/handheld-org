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
          <Weather />
          <Logo />
          <Calendar />
          {/* <Draw /> */}
        </Wrapper>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

export default App;
