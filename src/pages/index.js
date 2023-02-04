import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const Home = () => {
  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments />
      </Layout>
    </SimpleBar>
  );
};

export default Home;
