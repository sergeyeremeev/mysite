import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background: ${props => (props.sectionBg ? props.sectionBg : 'none')};
  padding: ${props => (props.sectionPadding ? props.sectionPadding : '60px 0')};
  
  @media (max-width: 767px) {
    padding: ${props => (props.sectionMobilePadding ? props.sectionMobilePadding : '30px 0')};
  }
`;

export const SectionContainer = styled.div`
  display: ${props => (props.containerDisplay ? props.containerDisplay : 'block')};
  max-width: ${props => (props.containerMaxWidth ? props.containerMaxWidth : '1240px')};
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 767px) {
    padding: 0 20px;
  }
  
  @media (max-width: 679px) {
    flex-direction: column;
  }
`;
