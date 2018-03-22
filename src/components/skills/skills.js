import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SkillMain from './skill-main';
import SkillCircle from './skill-circle';

const SkillsSection = styled.section`
  display: block;
  max-width: 1160px;
  margin: 40px auto 100px;
`;

const SkillsContainer = styled.div`
  position: relative;
  padding: 0 20px;
  height: 680px;
`;

const SkillsRotator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 560px;
  height: 560px;
  border-radius: 50%;
`;

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: null,
            mainCircleResetting: false
        };
    }

    handleSkillSelect = (index) => {
        this.setState({activeIndex: index});

        if (this.state.activeIndex !== index) {
            this.setState({mainCircleResetting: true});

            setTimeout(() => {
                this.setState({mainCircleResetting: false});
            }, 300);
        }
    };

    render() {
        return (
            <SkillsSection>
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
            </SkillsSection>
        );
    }
}

function mapStateToProps({skills}) {
    return {skills};
}

export default connect(mapStateToProps)(Skills);
