import React from 'react';

import Layout from '../components/layouts/Layout';
import GalleryPattern1 from '../components/gallery/GalleryPattern1';


import GalleryPattern2 from '../components/gallery/GalleryPattern2';
import GalleryPattern3 from '../components/gallery/GalleryPattern3';
import GalleryPattern4 from '../components/gallery/GalleryPatter4';
import SEO from '../hooks/SEO';

import styled from '@emotion/styled';

const TopBarStyle = styled.div`
    background:#ed7523;
    background-image:url("http://staging.ricebowldeluxe.com/wp-content/uploads/2020/12/RBD-infinity-faded-rotated-1.png");
    background-size: 200px auto;
    opacity:1;
    background-repeat: repeat;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 1rem;
    color:white;
    text-align:center;
`;

const GalleryPage = () => {
  return (
    <Layout full={true}>
      <SEO
        title="Create Custom Top Bars"
        description="How to create top bars in websites with a bit of code "
      />
    <TopBarStyle>
    You are now on the official online rice bowl deluxe ordering platform… where you will find the absolute best pricing and exclusive offers and commission free!
    </TopBarStyle>

      <GalleryPattern1 />
      <GalleryPattern2 />
      <GalleryPattern3 />
      <GalleryPattern4 />
    </Layout>
  );
};

export default GalleryPage;
