import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { selectSkill } from '../../actions';
import themeColors from '../common/theme-colors';

const SkillSingle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${props => props.transformation};
  width: 120px;
  height: 120px;
  margin: -60px;
  border-radius: 50%;
  background: ${themeColors.white};
  color: ${props => props.selected ? themeColors.darkBlue : themeColors.green};
  text-align: center;
  font-size: 15px;
  padding: 15px;
  box-shadow: ${props => props.selected ? 'rgba(0, 73, 95, 0.35) 4px 4px 10px 0' :
    props.hovered ? 'rgba(133, 148, 65, 0.35) 4px 4px 10px 0' : 'rgba(0, 0, 0, 0.15) 4px 4px 10px 0'};
  text-decoration: ${props => props.selected ? 'underline' :
    props.hovered ? 'underline' : 'none'};
  transition: box-shadow 0.3s linear;
  cursor: pointer;
  
  @media (max-width: 679px) {
    position: relative;
    left: auto;
    top: auto;
    display: block;
    height: auto;
    max-height: ${props => props.selected ? '1000px' : '50px'};
    text-decoration: none !important;
    transform: none;
    border-radius: 20px;
    margin: 0 0 20px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    transition: max-height 0.3s ease;
    will-change: max-height;
    
    &:after {
      content: '+';
      position: absolute;
      right: 15px;
      top: 5px;
      color: ${themeColors.green};
      font-size: 30px;
      pointer-events: none;
      cursor: pointer;
    }
  }
`;

const SkillMobileInfo = styled.div`
  display: none;
  
  @media (max-width: 679px) {
    display: block;
    margin-top: 40px;
    font-size: 14px;
    line-height: 1.4;
    color: ${themeColors.brown};
  }
`;

class SkillCircle extends Component {
    state = {hovered: false};

    handleMouseEnter = () =>  {
        this.setState({hovered: true});
    };

    handleMouseLeave = () =>  {
        this.setState({hovered: false});
    };

    handleClick = () => {
        this.props.onSkillSelect(this.props.skill);

        if (document.body.clientWidth >= 680) {
            setTimeout(() => {
                this.props.selectSkill(this.props.skill);
            }, 300);
        } else {
            this.props.selectSkill(this.props.skill);
        }
    };

    getCurrentRotation(itemIndex) {
        const rotation = this.props.angle * itemIndex;
        return `rotate(${rotation}deg) translate(260px) rotate(-${rotation}deg);`;
    }

    render() {
        return (
            <SkillSingle
                transformation={() => this.getCurrentRotation(this.props.itemIndex)}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onClick={this.handleClick}
                hovered={this.state.hovered}
                selected={this.props.selected}
            >
                {this.props.skill.name}
                <SkillMobileInfo>{this.props.skill.details}</SkillMobileInfo>
            </SkillSingle>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectSkill}, dispatch)
}

export default connect(null, mapDispatchToProps)(SkillCircle);
