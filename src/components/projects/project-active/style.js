import styled, { css } from 'styled-components';
import themeColors from '../../common/theme-colors';

export const ProjectOverlayCSS = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 99;
  display: flex;
  visibility: ${props => (props.overlayActive ? 'visible' : 'hidden')};
  opacity: ${props => (props.overlayActive ? '1' : '0')};
  transition: ${props => (props.overlayActive ?
        'visibility 0s, opacity 0.3s linear' :
        'visibility 0s 0.3s, opacity 0.3s linear')};
  align-items: center;
  justify-content: center;
`;

export const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 40px);
  max-width: 768px;
  height: calc(100vh - 40px);
  max-height: 600px;
  background: ${themeColors.beige};
  border-radius: 8px;
  padding: 40px;
  overflow: hidden;
  
  h2 {
    margin-top: 0;
    font-size: 28px;
    color: ${themeColors.darkBlue};
    
    &:hover {
      color: ${themeColors.gray};
    }
    
    span {
      font-size: 15px;
      font-weight: 300;
      
      @media (max-width: 767px) {
        display: block;
      }
    }
  }
  
  @media (max-width: 679px) {
    padding: 20px;
  }
`;

export const ProjectCloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
  color: ${themeColors.darkGray};
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  
  @media (max-width: 679px) {
    top: 10px;
    right: 10px;
  }
`;

export const ScrolledTextContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;

export const ProjectDetails = styled.div`
  padding-right: 20px;
  color: ${themeColors.gray};
  font-size: 15px;
  
  strong,
  h4 {
    color: ${themeColors.green};
  }
  
  p,
  ul {
    line-height: 1.3;
  }
  
  a {
    text-decoration: underline;
    color: ${themeColors.green};
    
    &:hover {
      color: ${themeColors.gray};
    }
  }
`;

export const ProjectSummary = styled.div`
  display: flex;
  margin-bottom: 30px;
  
  div:last-child {
    margin-left: auto;
    
    strong {
      display: inline-block;
      width: 100%;
      text-align: right;
    }
    
    span {
      white-space: nowrap;
    }
  }
  
  @media (max-width: 679px) {
    flex-direction: column;
    
    div:first-child {
      margin-bottom: 15px;
    }
    
    div:last-child {
      margin-left: 0;
      
      strong {
        text-align: left;
      }
    }
  }
`;
