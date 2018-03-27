import styled from 'styled-components';
import { SlidingUpContentCSS } from '../../helpers/slideContentOnScroll';
import themeColors from '../../helpers/theme-colors';

export const ProjectsContainer = styled.div`
  overflow: hidden;
  padding: 0 10px;
  ${SlidingUpContentCSS};
`;

export const ProjectsViewMore = styled.button`
  display: none;
  
  @media (max-width: 679px) {
    display: inline-block;
    float: right;
    color: ${themeColors.darkBlue};
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 20px;
    text-decoration: underline;
  }
`;
