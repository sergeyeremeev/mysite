import React, { Component } from 'react';
import { connect } from 'react-redux';
import SkillMain from './skill-main/skill-main';
import SkillCircle from './skill-circle/skill-circle';
import SectionTitle from '../common/section-title';
import { SectionWrapper, SectionContainer } from '../common/wrappers';
import { SkillsContainer, SkillsRotator } from './style';

class Skills extends Component {
    state = {
        activeIndex: null,
        mainCircleResetting: false,
    };

    handleSkillSelect = (index) => {
        if (this.state.activeIndex !== index) {
            this.setState({ activeIndex: index });
            this.setState({ mainCircleResetting: true });

            setTimeout(() => {
                this.setState({ mainCircleResetting: false });
            }, 300);
        } else if (document.body.clientWidth < 680) {
            this.setState({ activeIndex: null });
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
                                (<SkillCircle
                                    key={index}
                                    skill={skill}
                                    itemIndex={index}
                                    angle={360 / this.props.skills.length}
                                    onSkillSelect={() => this.handleSkillSelect(index)}
                                    selected={index === this.state.activeIndex}
                                />))}
                        </SkillsRotator>
                    </SkillsContainer>
                </SectionContainer>
            </SectionWrapper>
        );
    }
}

function mapStateToProps({ skills }) {
    return { skills };
}

export default connect(mapStateToProps)(Skills);
