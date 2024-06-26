import styled from "styled-components";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <PageContainer>
      <Header>
        <h1>Beurteilungsbuddy</h1>
      </Header>
      <Main>{children}</Main>
      <Footer />
    </PageContainer>
  );
}

const Header = styled.header`
  text-align: center;
  background-color: var(--color-background-dark);
  color: var(--color-text-white);
  width: 100%;
`;

const Main = styled.main`
  grid-row: 2 / 3;
  height: auto;
  padding-block: 0.5rem;
  width: 100%;
`;

const PageContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-items: center;
  overflow-y: auto;
`;
