import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents"
import Button from "../../styles/GlobalComponents/Button"
import { LeftSection } from "./HeroStyles"

const Hero = () => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I enjoy creating full-stack projects which use React, Next.js and many of the technologies
          surrounding them.
        </SectionText>
        <Button onClick={() => window.open("/docs/caelan_curry_cv.pdf", "_blank")}>
          Download CV
        </Button>
      </LeftSection>
    </Section>
  )
}

export default Hero
