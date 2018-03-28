import styled, { keyframes, css } from 'styled-components';
import themeColors from '../../../helpers/theme-colors';


const handWiggle = keyframes`
    0% {transform: rotate(0deg);}
    15% {transform: rotate(-10deg);}
    30% {transform: rotate(25deg);}
    45% {transform: rotate(-20deg);}
    60% {transform: rotate(15deg);}
    75% {transform: rotate(-5deg);}
    90% {transform: rotate(0deg);}
    100% {transform: rotate(0deg);}
`;

export const JobDetailsContainer = styled.div`
  width: 60%;
  position: relative;
  overflow: hidden;
  padding-bottom: 22px;
  
  @media (max-width: 959px) {
    width: 100%;
    height: 400px;
  }
  
  @media (max-width: 959px) {
    height: 60vh;
  }
`;

export const JobDetailsCSS = css`
  position: ${props => (props.selected ? 'static' : 'absolute')};
  top: 50%;
  left: 50%;
  transform: ${props => (props.selected ? 'none' : 'translate(-50%, -50%)')};
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 40px 20px;
  justify-content: ${props => (props.selected ? 'flex-start' : 'center')};
  color: ${themeColors.gray};
  
  h2 {
    text-align: center;
    margin-top: 0;
    color: ${themeColors.darkBlue};
  }
  
  img {
    width: 75px;
    height: auto;
    margin: 40px auto 0;
    animation: ${handWiggle} 2000ms ease-in-out infinite;
  }
  
  p,
  ul {
    font-size: 15px;
    line-height: 1.4;
  }
  
  h4 {
    margin-bottom: 0;
    color: ${themeColors.green};
  }
  
  @media (max-width: 959px) {
    padding: 0 20px 20px 0;
  }
`;

export const JobResetterCSS = css`
  position: absolute;
  left: 40px;
  bottom: 0;
  height: 100%;
  width: calc(100% - 40px);
  border-top: 2px solid ${themeColors.darkBlue};
  transform: ${props => (props.animating ? 'translateY(0)' : 'translateY(calc(100% - 2px))')};
  background: ${themeColors.beige};
  transition: 0.5s transform ease-in;
  
  @media (max-width: 959px) {
    left: 0;
    width: 100%;
  }
`;

export const JobOverlayCSS = css`
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

export const JobOverlayContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 40px);
  max-width: 768px;
  height: calc(100vh - 40px);
  max-height: 600px;
  background: ${themeColors.beige};
  border-radius: 8px;
  padding: 60px 40px 40px;
  overflow: hidden;
  
  h2 {
    margin-top: 0;
    font-size: 28px;
    color: ${themeColors.darkBlue};
  }
  
  @media (max-width: 679px) {
    padding: 40px 20px 20px;
  }
`;

export const JobCloseBtn = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
  color: ${themeColors.darkGray};
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  
  img {
    width: 16px;
    height: auto;
  }
  
  @media (max-width: 679px) {
    top: 20px;
    right: 20px;
  }
`;

export const ScrolledTextContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;
