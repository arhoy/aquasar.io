// Search.js

import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import styled from '@emotion/styled';

import {
  InstantSearch,
  SearchBox,
  Hits,
  connectStateResults,
} from 'react-instantsearch-dom';

import ProductSearchPreview from './ProductSearchPreview';

const Results = connectStateResults(({ searchState }) =>
  searchState && searchState.query ? (
    <StyledHits hitComponent={ProductSearchPreview} />
  ) : //<div>No query</div>
  null,
);

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);

const StyledSearchBox = styled(SearchBox)`
  .ais-SearchBox-form {
    display: flex;
    @media (min-width: ${props => props.theme.screenSize.mobileL}) {
      max-width: 50rem;
      margin: 0 auto;
    }
  }

  & input,
  button {
    border: none;
    padding: 0;
    outline: none;
  }
  .ais-SearchBox-reset {
    display: none;
  }
  & input {
    width: 100%;
    padding: 1rem;
  }
  & button {
    padding: 4px;
  }
`;

const StyledHits = styled(Hits)`
  position: relative;
  z-index: 101;
  & ul {
    list-style: none;
    background: ${props => props.theme.colors.white};
    -webkit-box-shadow: 16px 19px 14px -7px rgba(207, 205, 207, 0.93);
    -moz-box-shadow: 16px 19px 14px -7px rgba(207, 205, 207, 0.93);
    box-shadow: 16px 19px 14px -7px rgba(207, 205, 207, 0.93);
    position: absolute;
    top: ;
    left: 0;
  }
  & li {
    text-align: center;
    padding: 0 1rem;
    &:hover {
      background: ${props => props.theme.colors.lightgrey};
    }
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    & ul {
      border-top: 1px solid ${props => props.theme.colors.black};
      width: 100%;
      top: 0;
    }
  }
`;

export default function Search() {
  return (
    <InstantSearch
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <StyledSearchBox
        translations={{
          submitTitle: 'Submit search query.',
          resetTitle: 'Clear search query.',
          placeholder: 'Search Aquasar...',
        }}
      />
      <Results />
    </InstantSearch>
  );
}
