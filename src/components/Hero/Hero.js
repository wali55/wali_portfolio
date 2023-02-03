import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Mohammad Waliullah <br />
        A Front-End Developer 
      </SectionTitle>
      <SectionText>
        I develop beautiful websites and web applications and I love what I do.
      </SectionText>
      <Button onClick={() => window.open('http://google.com','_blank')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;