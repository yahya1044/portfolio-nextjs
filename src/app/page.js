"use client";
import styled, { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { darkTheme, lightTheme } from "@/utils/Themes";
import HeroSection from "@/components/HeroSection";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import ProjectDetails from "@/components/ProjectDetails";
import Projects from "@/components/Projects";
import LoaderSpinner from "@/components/loading/LoadingComponent";
// import Contact from "@/components/Contact";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [loading, setLoading] = useState(true); // Loading state

  console.log(openModal);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust time as needed
    return () => clearTimeout(timer); // Cleanup timer
  }, []);
  return (
    <>
      {loading ? (
        <LoaderSpinner showLoader /> // Show spinner while loading
      ) : (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <Navbar />
          <Body>
            <HeroSection />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education />
              {/* <Contact /> */}
            </Wrapper>
            <Footer />
            {openModal.state && (
              <ProjectDetails
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
          </Body>
        </ThemeProvider>
      )}
    </>
  );
}
