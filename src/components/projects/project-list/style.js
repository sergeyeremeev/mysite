import { css } from 'styled-components';
import themeColors from '../../common/theme-colors';

const ProjectTileCSS = css`
  position: relative;
  display: block;
  width: calc((100% - 60px) / 4);
  margin: 0 20px 20px 0;
  padding: 15px;
  float: left;
  text-align: center;
  background: ${themeColors.white};
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s box-shadow ease;
  cursor: pointer;
  
  &:before {
    content: '';
    padding-top: 66.666666%;
    display: table;
    width: 1px;
    margin-left: -1px;
  }
  
  img {
    max-width: 50%;
    max-height: 40%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 35%;
  }
  
  h3 {
    position: absolute;
    width: calc(100% - 30px);
    top: 63%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    color: ${themeColors.gray};
    line-height: 1.4;
  }
  
  &:nth-child(4n) {
    margin-right: 0;
  }
  
  &:hover {
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 959px) {
    width: calc((100% - 40px) / 3);
    
    &:nth-child(4n) {
      margin-right: 20px;
    }
    
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  
  @media (max-width: 679px) {
    width: calc((100% - 20px) / 2);
    
    &:nth-child(3n) {
      margin-right: 20px;
    }
    
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  
  @media (max-width: 479px) {
    width: 100%;
    margin-right: 0 !important;
    
    h3 {
      font-size: 20px;
    }
    
    &:nth-child(n + 6) {
      display: ${props => (props.allVisible ? 'block' : 'none')};
    }
  }
`;

export default ProjectTileCSS;
