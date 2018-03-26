import styled, { css } from 'styled-components';
import themeColors from '../../common/theme-colors';

export const JobList = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-self: flex-start;
  
  @media (max-width: 959px) {
    flex-direction: row;
    align-self: auto;
    width: 100%;
  }
  
  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

export const JobPreviewCSS = css`
  position: relative;
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  height: 320px;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: ${props => props.active ? '4px 4px 24px rgba(10, 10, 10, 0.35)' :
    props.hovered ? '4px 4px 24px rgba(10, 10, 10, 0.25)' : '4px 4px 24px rgba(10, 10, 10, 0.15)'};
  color: #fff;
  transition: box-shadow 0.3s ease;
  
  &:last-child {
   margin-bottom: 0;
  }
  
  @media (max-width: 1023px) {
    height: 280px;
  }
  
  @media (max-width: 959px) {
    width: 50%;
    height: auto;
    margin-right: 20px;
    margin-bottom: 40px;
    flex-shrink: 1;
    
    &:before {
      content: '';
      padding-top: 66.666666%;
      display: table;
      width: 1px;
      margin-left: -1px;
    }
    
    &:last-child {
      margin-right: 0;
      margin-bottom: 40px;
    }
  }
  
  @media (max-width: 620px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
    
    &:before {
      content: none;
    }
    
    &:last-child {
      margin-bottom: 20px;
    }
  }
`;

export const JobPreviewImageCSS = css`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  background-repeat: no-repeat;
  background-position: center 80%;
  background-size: 70% auto;
  background-image: ${props => props.imgUrl ? `url(${props.imgUrl})` : 'none'};
  transform: ${props => props.hovered ? 'scale(1.2)' : 'none'};
  transition: transform 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${themeColors.ecru};
    opacity: 0.85;
  }
  
  @media (max-width: 620px) {
    background-size: auto 60%;
    
    &::after {
      opacity: 0.92;
    }
  }
`;

export const JobPreviewCTA = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  pointer-events: none;
  top: 66.666666%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${themeColors.ecru};
  background: ${themeColors.gray};
  border: 2px solid ${themeColors.gray};
  padding: 6px 24px;
  opacity: 0.75;
  
  @media (max-width: 679px) {
    display: none;
  }
`;

export const JobPreviewTextCSS = css`
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
  cursor: pointer;
  border: ${props => props.active ? '4px solid #fff' : 'none'};
`;

export const JobPreviewContentTop = styled.div`
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: 100%;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  color: ${themeColors.gray};
  text-shadow: rgba(0, 0, 0, 0.5) 0 6px 18px;
  font-size: 22px;
  line-height: 18px;
  
  h3 {
    font-size: 16px;
  }
  
  h2 {
    font-size: 20px;
    line-height: 1.4;
  }
  
  @media (max-width: 1023px) {
    line-height: 12px;
  }
  
  @media (max-width: 959px) {
    line-height: 10px;
    font-size: 18px;
    
    h3 {
      font-size: 14px;
      margin-top: 0;
      line-height: 1.2;
    }
    
    h2 {
      font-size: 16px;
      line-height: 1.2;
    }
  }
  
  @media (max-width: 679px) {
    line-height: 6px;
    font-size: 16px;
    
    h3 {
      font-size: 12px;
    }
    
    h2 {
      font-size: 14px;
    }
  }
`;

export const JobPreviewContentBottom = styled.div`
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: 100%;
  text-align: center;
  flex-direction: row;
  margin: auto 0 0;
  font-size: 14px;
  color: ${themeColors.gray};
  
  span {
    display: block;

    &:last-child {
      margin-left: auto;
    }
  }
  
  @media (max-width: 679px) {
    font-size: 12px;
  }
`;
