import Link from "next/link";
import { styled } from "styled-components";
import Image from "next/image";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledNavigation>
        <ul role="list">
          <li>
            <StyledLink href="/">Beurteilungsbuddy</StyledLink>
          </li>
          <li>
            <StyledLink href="/impressum">Impressum</StyledLink>
          </li>
        </ul>
      </StyledNavigation>
      <StyledLink href="https://github.com/PReichetanz/beurteilungsbuddy">
        <LogoContainer>
          <Image
            src="/images/github-mark-white.png"
            alt="GitHub Logo"
            width={32}
            height={32}
          />
          <span>See project on GitHub</span>
        </LogoContainer>
      </StyledLink>
      <CopyRight>© 2023 Paul Reichetanz</CopyRight>
    </StyledFooter>
  );
}

const CopyRight = styled.small`
  grid-area: copy;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  grid-area: social;
  gap: 0.5rem;
`;

const StyledFooter = styled.footer`
  background-color: var(--color-background-dark);
  color: var(--color-text-white);
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-areas:
    "nav social"
    "copy copy";
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 0.2rem 2rem 0.2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-text-white);
`;

const StyledNavigation = styled.nav`
  grid-area: nav;
`;
