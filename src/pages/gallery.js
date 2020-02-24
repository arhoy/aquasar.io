import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layouts/Layout';
import GalleryPattern1 from '../components/gallery/GalleryPattern1';

import Accordian from '../components/reusableStyles/accordian/Accordian';
import GalleryPattern2 from '../components/gallery/GalleryPattern2';
import GalleryPattern3 from '../components/gallery/GalleryPattern3';
import GalleryPattern4 from '../components/gallery/GalleryPatter4';

const Blurb = styled.div`
  margin: 2rem;
`;

const GalleryPage = () => {
  return (
    <Layout full={true}>
      <Blurb>
        <Accordian
          title={`CSS GRIDS`}
          text={`Creating interesting grid patterns here using css grids. We are not
          constrained within the bounds of WP Templates or Bootstrap Grids. These blocks below
          could be a layout or be filled with images on your site
          to greate an image gallery. The possibilities with CSS Grids are endless.`}
          height={'25rem'}
        />
      </Blurb>

      <GalleryPattern1 />
      <GalleryPattern2 />
      <GalleryPattern3 />
      <GalleryPattern4 />
    </Layout>
  );
};

export default GalleryPage;
