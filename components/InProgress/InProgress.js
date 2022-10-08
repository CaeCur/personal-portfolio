import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./InProgressStyles";
import { inProgress } from "../../constants/constants";

const InProgress = () => {
  return (
    <Section id="inProgress">
      <SectionDivider />
      <SectionTitle main>Works in Progress</SectionTitle>
      <SectionText>
        I am often working on new projects of differing complexity. Many of my smaller projects
        focus on teaching myself new technologies that I find interesting. My larger ongoing
        projects are a way for me to apply and practice technologies which I am familiar with.
      </SectionText>

      <GridContainer>
        {inProgress?.map(({ id, title, description, tags, source }) => (
          <BlogCard key={id}>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>

            <CardInfo>{description}</CardInfo>
            <Hr />

            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>

            <UtilityList>
              <ExternalLinks href={source}>Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};
export default InProgress;
