import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const SkillsSection = styled.section`
  display: block;
  max-width: 1160px;
  margin: 40px auto 100px;
`;

const SkillsContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0 20px;
  height: 800px;
`;

const SkillsCircleMain = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #fff;
`;

const SkillsRotator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  border-radius: 50%;
`;

const SkillSingle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  margin: -40px;
  border-radius: 50%;
  background: #fff;
  transform: ${props => props.transformation};
`;

class Skills extends Component {
    getCurrentRotation(itemIndex) {
        const angle = 180 / this.props.skills.length;
        const rotation = angle * itemIndex;

        return `rotate(${rotation}deg) translate(200px) rotate(-${rotation}deg);`;
    }

    render() {
        return (
            <SkillsSection>
                <SkillsContainer>
                    <SkillsCircleMain>
                        Skills
                    </SkillsCircleMain>
                    <SkillsRotator>
                        {this.props.skills.map((skill, index) =>
                            <SkillSingle
                                key={index}
                                transformation={() => this.getCurrentRotation(index)}>
                                {skill.name}
                            </SkillSingle>
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
