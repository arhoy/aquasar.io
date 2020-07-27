import React from 'react';

import { SectionGrey, Container800 } from '../reusableStyles/sections/Sections';

import { FaFighterJet } from 'react-icons/fa';
import StarterPackage from './StarterPackage';
import JetFeatureSection from '../features/JetFeatureSection';

const StarterPack = ({ positionJet }) => {
  return (
    <SectionGrey>
      <Container800>
        <JetFeatureSection
          setPosition={positionJet}
          icon={FaFighterJet()}
          rotate="rotate(15deg)"
          iconSize="14rem"
          heading="Online Ordering"
          subheading="Reduce your commission costs with online ordering for your restaurant. "
          text={<StarterPackage />}
        />
      </Container800>
    </SectionGrey>
  );
};

export default StarterPack;
