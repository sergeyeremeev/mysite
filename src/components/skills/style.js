import styled from 'styled-components';

export const SkillsContainer = styled.div`
  position: relative;
  height: 660px;
  
  @media (max-width: 679px) {
    height: auto;
  }
`;

export const SkillsRotator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  @media (max-width: 679px) {
    position: static;
    transform: none;
  }
`;
