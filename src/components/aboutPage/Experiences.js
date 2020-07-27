import React from 'react';
import Fade from 'react-reveal/Fade';

import styled from '@emotion/styled';

import Accordian from '../reusableStyles/accordian/Accordian';

const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 4fr;

  grid-gap: 2rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

const SubContainer = styled.div``;

const TitleContainer = styled.div``;

const Title = styled.h4`
  font-iight: 500;
  font-size: 2.3rem;
  & .primaryBold {
    color: ${props => props.theme.colors.primary};
    font-iight: 700;
  }
  & .primary {
    margin-bottom: 2rem;
  }
`;

export const Experiences = () => {
  return (
    <Container>
      <SubContainer>
        <TitleContainer>
          <Title>
            <Fade left cascade>
              <div>
                <div className="secondary">
                  Delivering
                  <span className="primaryBold"> Quality</span>
                </div>
              </div>
            </Fade>
          </Title>
        </TitleContainer>
      </SubContainer>
      <SubContainer>
        <Fade right cascade>
          <div>
            <div>
              <Accordian
                title={`Strategy`}
                text={`I want to work with you as a long term partner. I want to understand your business goals, your competitors, your pain points and identify some easy wins to get started. From here I develop a plan of action`}
              />
            </div>
            <div>
              <Accordian
                title={`Branding`}
                text={`A Brand is more than just a logo. A Brand is a customer experience, a journey and a feeling of associatied with your brand and identity. Here at Aquasar I want to help you build your brand online.`}
              />
            </div>
            <div>
              <Accordian
                title={`Experience`}
                text={`Get amazing customer experience and support. Spend more time with what makes your business successful and less time worrying about the online technical stuff`}
              />
            </div>
          </div>
        </Fade>
      </SubContainer>
    </Container>
  );
};
