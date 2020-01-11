import styled from '@emotion/styled';

const TagContainer = styled.div`
  margin: 1rem 0;
`;

const Tag = styled.span`
  display: inline-block;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  font-size: 1.3rem;
  background: ${props => props.theme.colors.primaryLight};
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;
  border-radius: 4px;
  color: ${props => props.theme.colors.lightgrey};
  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`;

export { TagContainer, Tag };
