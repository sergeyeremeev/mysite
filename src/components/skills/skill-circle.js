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
`;

class SkillCircle extends Component {
    constructor(props) {
        super(props);

        this.state = {hovered: false};
    }

    handleMouseEnter = () =>  {
        this.setState({hovered: true});
    };

    handleMouseLeave = () =>  {
        this.setState({hovered: false});
    };

    handleClick = () => {
        this.props.onSkillSelect(this.props.skill);
        setTimeout(() => {
            this.props.selectSkill(this.props.skill);
        }, 300);
    };

    getCurrentRotation(itemIndex) {
        const rotation = this.props.angle * itemIndex;
        return `rotate(${rotation}deg) translate(280px) rotate(-${rotation}deg);`;
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
            </SkillSingle>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectSkill}, dispatch)
}

export default connect(null, mapDispatchToProps)(SkillCircle);
