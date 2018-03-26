import styled from 'styled-components';

const WorkExperienceContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  height: 660px;
  padding: 0 10px;
  
  @media (max-width: 1023px) {
    height: 580px;
  }
  
  @media (max-width: 959px) {
    height: auto;
    display: block;
    padding: 0;
  }
`;

export default WorkExperienceContainer;
