import Link from "next/link";

//icons
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { TiCodeOutline } from "react-icons/ti";

//Styled comps
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from "./HeaderStyles";

const Header = () => {
  return (
    <Container>
      {/* Hero Text */}
      <Div1>
        <Link href="/">
          <a
            style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}
          >
            <TiCodeOutline size="3rem" style={{ marginRight: "5px" }} />
            <Span>Caelan Curry</Span>
          </a>
        </Link>
      </Div1>

      {/* scroll nav */}
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>

      {/* socials */}
      <Div3>
        <SocialIcons href="https://github.com/CaeCur">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/caelan-curry-38188a227/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/caelancurry/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
