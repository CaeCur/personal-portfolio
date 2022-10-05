import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkdin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

//Styled comps
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from "./HeaderStyles";

const Header = () => {
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <DiCssdeck size="3rem" />
            <span>Caelan Curry</span>
          </a>
        </Link>
      </Div1>
    </Container>
  );
};

export default Header;
