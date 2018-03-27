import { css } from 'styled-components';
import { SlidingUpContentCSS } from '../../helpers/slideContentOnScroll';

const WorkExperienceContainerCSS = css`
  display: flex;
  flex: 1 0 auto;
  height: 660px;
  padding: 0 10px;
  ${SlidingUpContentCSS};
  
  @media (max-width: 1023px) {
    height: 580px;
  }
  
  @media (max-width: 959px) {
    height: auto;
    display: block;
    padding: 0;
  }
`;

export default WorkExperienceContainerCSS;
