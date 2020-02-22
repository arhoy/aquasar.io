import React from 'react';
import styled from '@emotion/styled';
import { Bold } from '../../components/reusableStyles/typography/Typography';
const P = styled.p`
  margin: 1.5rem 0rem;
  font-size: 1.7rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
    margin: 3rem 0rem;
  }
`;
export const textContentful = () => (
  <>
    <P>
      Contentful is an easy to use, modern headless CMS (content management
      system). It is used by companies like Walmart, Disney, Icelandair and
      Shell to name a few. This fast growing CMS system probably is good enough
      and easy enough for most users.
    </P>
    <P>
      While it lack some features I would like to see out of the box, it is
      possible to configure it to your liking on the developer side. This
      decoupling of the developer from the content writer, is essential to
      create efficient content flow and eliminate developer bottlenecks.
    </P>

    <P>
      If you are a developer writing your personal blog, I am still on the fence
      of whether contentful is the best choice. I'm currently experimenting with
      mdx and other resources in addition to simply creating my own custom CMS
      or content template.
    </P>
    <P>
      Depending on who you ask the later is a bad idea, but it does make
      complete customization and developer freedom possible. Perhaps the best
      solution is you can use Contentful for a lot of article templates but
      maybe not for everything on your site.
    </P>
  </>
);

export const textNetlify = () => (
  <P>
    Netlify is an amazing service offering hosting, continuous deployment and
    serverless functions for developers. It's amazing out of the box
    <Bold> identity and authentication </Bold>
    and contact form features are invaluable for getting up a working site with
    minimal overhead, time and cost.ate efficient content flow and eliminate
    developer bottlenecks.
  </P>
);

export const textReact = () => (
  <>
    <P>
      Maybe this is an obvious answer to some, but I think every developer
      should ask themselves the question of what a new technology, be it
      language, library or framework offers before jumping on the popularity
      bandwaggon.
    </P>

    <P>
      I use React simply because it makes developing in vanilla JavaScript much
      easier. More specifically, it makes DOM manipulation, state management,
      and creating reusable components easier.
    </P>
    <P>
      JavaScript of course is needed to make the front end application of your
      website `come to life` so to speak. It is the defacto programming language
      for web browsers, used to make a dynamic and interactive user experience.
    </P>
  </>
);

export const textGatsby = () => (
  <>
    <P>
      I made this site in Gatsby because, as Gatsby puts it, it is blazingly
      fast and built on top of React. I am also a huge fan of Gatsby because of
      its ability to be a progressive web app which among other things means it
      can work offline and is more resilient to bad internet connections
    </P>
    <P>
      This coupled with the fact that Gatsby has amazing image optimization
      features means that building a site with Gatsby makes it more accessible
      to users all over the world, especially in developing countries. Finally,
      as a static site generator, Gatsby is great for SEO, something React out
      of the box fails spectaculary at.
    </P>
  </>
);
