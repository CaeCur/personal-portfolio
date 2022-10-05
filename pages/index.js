import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Hero from "../components/Hero/Hero";
import BgAnimate from "../components/BgAnimate/BgAnimate";
import Projects from "../components/Projects/Projects";
// import Acomplishments from '../components/Acomplishments/Acomplishments';
// import Technologies from '../components/Technologies/Technologies';
// import Timeline from '../components/TimeLine/TimeLine';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimate />
      </Section>

      <Projects />
      {/* <Technologies /> */}
      {/* <Timeline /> */}
      {/* <Accomplishments /> */}
    </Layout>
  );
};

export default Home;
