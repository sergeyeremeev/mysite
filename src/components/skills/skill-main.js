import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import themeColors from '../common/theme-colors';

const SkillsCircleMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: ${themeColors.white};
  box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 10px 0;
  transform: ${props => props.animating ? 'rotateY(90deg)' : 'rotateY(0)'};
  transition: transform 0.3s ease;
  
  h2 {
    font-size: 32px;
    color: ${themeColors.plum};
  }
  
  p {
    color: ${themeColors.brown};
  }
`;

class SkillMain extends Component {
    render() {
        const activeSkill = this.props.activeSkill;

        if (!activeSkill) {
            return (
                <SkillsCircleMain animating={this.props.animating}>
                    <h2>Select a skill</h2>
                </SkillsCircleMain>
            );
        }

        return (
            <SkillsCircleMain animating={this.props.animating}>
                <p>{activeSkill.details}</p>
            </SkillsCircleMain>
        );
    }
}

function mapStateToProps({activeSkill}) {
    return {activeSkill};
}

export default connect(mapStateToProps)(SkillMain);
