import { css } from 'styled-components';
import themeColors from '../../common/theme-colors';

const SkillsCircleMainCSS = css`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 370px;
  height: 370px;
  border-radius: 50%;
  padding: 52px;
  font-size: 14px;
  color: ${themeColors.brown};
  text-align: center;
  background: ${themeColors.white};
  box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 10px 0;
  transform: ${props => (props.animating ?
        'translate(-50%, -50%) rotateY(90deg)' :
        'translate(-50%, -50%) rotateY(0)')};
  transition: transform 0.3s ease;
  
  h2 {
    font-size: 32px;
    color: ${themeColors.darkBlue};
  }
  
  p {
    color: ${themeColors.gray};
  }
  
  @media (max-width: 679px) {
    display: none;
  }
`;

export default SkillsCircleMainCSS;
