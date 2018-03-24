import styled from 'styled-components';
import themeColors from './theme-colors';

const SectionTitle = styled.h1`
  color: ${themeColors.darkGray};
  border-bottom: 3px solid ${themeColors.darkBlue};
  padding-bottom: 12px;
  margin: 0 0 50px;
  font-size: 32px;
  
  @media (max-width: 679px) {
    font-size: 24px;
    padding-bottom: 8px;
    border-bottom: 2px solid ${themeColors.darkBlue};
    margin: 0 0 30px;
  }
`;

export default SectionTitle;
