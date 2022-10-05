import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

const Layout = ({ children }) => {
  return;
  <Container>
    <Header />
    <main>{children}</main>
    {/* footer */}
  </Container>;
};

export default Layout;
