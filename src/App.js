import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Calendar from "./components/Calendar/Calendar";
import DeadPixel from "./components/DeadPixel";
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
			<DeadPixel />
			<QueryClientProvider client={queryClient}>
				{isDesktop ? (
					<DesktopWrapper>
						<Weather />
						<Logo />
						<Calendar />
						<Draw />
					</DesktopWrapper>
				) : (
					<MobileWrapper>
						<BrowserRouter>
							<Navbar />
							<MobileContainer>
								<Routes>
									<Route path="/" element={<Weather />} />
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

const DesktopWrapper = styled.div`
	height: 100vh;
	display: grid;
	width: auto;
	align-self: center;
	grid-template-columns: repeat(3, 33%);
	grid-template-rows: 1fr 2fr;
	grid-template-areas:
		"weather logo calendar"
		"weather draw calendar";
	padding: 2rem;
	@media (min-width: 1000px) {
		padding: 3rem;
	}
`;

const MobileWrapper = styled.div`
	height: 90vh;
`;
const MobileContainer = styled.div`
	padding: 0 1rem;
`;
export default App;
