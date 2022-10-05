import { DiNodejsSmall, DiReact, DiAws } from "react-icons/di";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in full-stack web development. My experience
      started with PHP in LAMP stacks which later evolved into Laravel and Vue.js. I am currently
      focused on the MERN stack with an avid interest in React and Next.js development.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>React, Next.js, Vue</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejsSmall size="5rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>Node.js, Express, MongoDB, MySql, Laravel</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiAws size="5rem" />
        <ListContainer>
          <ListTitle>Infrastructure</ListTitle>
          <ListParagraph>AWS, Microsoft administration</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
