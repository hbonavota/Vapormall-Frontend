import React from 'react';
import { DiFirebase, DiReact, DiAptana } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  < Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle> Technologies </SectionTitle>
    <SectionText>
      I have knowledge in Frontend as in Back-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Text 1</ListTitle>
          <ListParagraph>
            Text 2 <br />
            Text 3
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Text 2</ListTitle>
          <ListParagraph>
            Text 3 <br />
            Text 4
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiAptana size="3rem" />
        <ListContainer>
          <ListTitle>Text 3</ListTitle>
          <ListParagraph>
            Text 4 <br />
            Text 5
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
