import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SkillMain from './skill-main';
import SkillCircle from './skill-circle';
import SectionTitle from '../common/section-title';
import { SectionWrapper, SectionContainer } from '../common/wrappers';

const SkillsContainer = styled.div`
  position: relative;
  height: 660px;
  
  @media (max-width: 679px) {
    height: auto;
  }
`;

const SkillsRotator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  @media (max-width: 679px) {
    position: static;
    transform: none;
  }
`;

class Skills extends Component {
    state = {
        activeIndex: null,
        mainCircleResetting: false
    };

    handleSkillSelect = (index) => {
        if (this.state.activeIndex !== index) {
            this.setState({activeIndex: index});
            this.setState({mainCircleResetting: true});

            setTimeout(() => {
                this.setState({mainCircleResetting: false});
            }, 300);
        } else {
            if (document.body.clientWidth < 680) {
                this.setState({activeIndex: null});
            }
        }
    };

    render() {
        return (
            <SectionWrapper>
                <SectionContainer>
                    <SectionTitle>Skills</SectionTitle>
                    <SkillsContainer>
                        <SkillMain
                            animating={this.state.mainCircleResetting}
                        />
                        <SkillsRotator>
                            {this.props.skills.map((skill, index) =>
                                <SkillCircle
                                    key={index}
                                    skill={skill}
                                    itemIndex={index}
                                    angle={360 / this.props.skills.length}
                                    onSkillSelect={() => this.handleSkillSelect(index)}
                                    selected={index === this.state.activeIndex}
                                />
                            )}
                        </SkillsRotator>
                    </SkillsContainer>
                </SectionContainer>
            </SectionWrapper>
        );
    }
}

function mapStateToProps({skills}) {
    return {skills};
}

export default connect(mapStateToProps)(Skills);
