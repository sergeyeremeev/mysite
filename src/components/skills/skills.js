import React, { Component } from 'react';
import styled from 'styled-components';
import SectionTitle from '../common/section-title';

const ProjectsSection = styled.section`
  display: block;
  max-width: 1160px;
  margin: 40px auto 100px;
`;

const ProjectsContainer = styled.div`
  overflow: hidden;
  padding: 0 20px;
`;

class Skills extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SkillsSection>
                <SectionTitle>Areas of expertise</SectionTitle>
                <ProjectsContainer>
                    <ProjectList
                        onProjectSelect={this.handleProjectSelect}
                    />
                    <ProjectActive
                        overlayActive={this.state.overlayActive}
                        onOverlayClose={this.handleOverlayClose}
                    />
                </ProjectsContainer>
            </SkillsSection>
        );
    }
}

export default Portfolio;
