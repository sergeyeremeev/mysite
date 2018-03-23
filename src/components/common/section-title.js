import styled from 'styled-components';
import themeColors from './theme-colors';

const SectionTitle = styled.h1`
  color: ${themeColors.darkGray};
  border-bottom: 3px solid ${themeColors.darkBlue};
  padding-bottom: 12px;
  margin: 20px 0 50px;
  font-size: 32px;
`;

export default SectionTitle;
