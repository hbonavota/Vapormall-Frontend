import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        VAPORMALL<br />
        Vaporwave
      </SectionTitle>
      <SectionText>
        qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem
      </SectionText>
      <Button onClick={() => window.location = '#'}>Contact us</Button>
    </LeftSection>
  </Section>

);

export default Hero;