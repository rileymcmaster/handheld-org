import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Calendar from "./components/Calendar";
import Draw from "./components/Draw";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import GlobalStyles from "./GlobalStyles";
import useMediaQuery from "./utils/useMediaQuery";

const queryClient = new QueryClient();

const App = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        {isDesktop ? (
          <Wrapper>
            <Weather />
            <Logo />
            <Calendar />
            <Draw />
          </Wrapper>
        ) : (
          <MobileWrapper>
            <BrowserRouter>
              <Navbar />
              <MobileContainer>
                <Routes>
                  <Route path="/" element={<Logo />} />
                  <Route path="/weather" element={<Weather />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/draw" element={<Draw />} />
                </Routes>
              </MobileContainer>
            </BrowserRouter>
          </MobileWrapper>
        )}
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "weather logo calendar"
    "weather draw calendar";
  padding: 3rem;
`;

const MobileWrapper = styled.div`
  height: 100vh;
`;
const MobileContainer = styled.div`
  padding: 2rem;
`;
export default App;
