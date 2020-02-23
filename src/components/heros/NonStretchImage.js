import React from 'react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
const NonStretchImage = props => {
  let normalizedProps = props;
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: '0 auto', // Used to center the image
      },
    };
  }
  return <BackgroundImage {...normalizedProps} />;
};

export default styled(NonStretchImage)`
  height: ${props => props.height || '30vh'};
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -100;
  background-attachment: fixed;
`;
