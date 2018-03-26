import styled from 'styled-components';
import themeColors from '../common/theme-colors';

export const MessageContainer = styled.div`
  text-align: center;
  background: ${themeColors.white};
  max-width: 920px;
  box-shadow: rgba(0,0,0,0.15) 5px 5px 10px 0;
  margin: 0 auto;
  border: 1px solid ${themeColors.green};
  padding: 10px;
  
  @media (max-width: 679px) {
    padding: 6px;
  }
  
  @media (max-width: 679px) {
    padding: 3px;
  }
`;

export const MessageInner = styled.div`
  border: 1px solid ${themeColors.green};
  padding: 40px;
  
  h2 {
    margin-top: 0;
    font-size: 32px;
    color: ${themeColors.darkBlue};
  }
  
  p {
    font-size: 15px;
    line-height: 1.4;
    color: ${themeColors.gray};
  }
  
  @media (max-width: 679px) {
    padding: 20px;
    
    h2 {
      font-size: 28px;
    }
    
    p {
      font-size: 15px;
    }
  }
  
  @media (max-width: 679px) {
    padding: 15px;
    
    h2 {
      font-size: 28px;
    }
    
    p {
      font-size: 15px;
    }
  }
`;