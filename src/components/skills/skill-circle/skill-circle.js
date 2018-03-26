import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { selectSkill } from '../../../actions/index';
import { SkillSingleCSS, SkillMobileInfo } from './style';

const SkillSingle = styled.div`
  ${SkillSingleCSS};
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
