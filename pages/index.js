import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Hero from "../components/Hero/Hero";
import BgAnimate from "../components/BgAnimate/BgAnimate";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/Timeline/Timeline";
import InProgress from "../components/InProgress/InProgress";
// import Accomplishments from "../components/Accomplishments/Accomplishments";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimate />
      </Section>

      <Projects />

      <Technologies />

      <Timeline />

      <InProgress />

      {/* <Accomplishments /> */}
    </Layout>
  );
};

export default Home;
