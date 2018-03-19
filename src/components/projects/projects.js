import React, { Component } from 'react';
import styled from 'styled-components';
import SectionTitle from '../common/section-title';
import ProjectList from './project-list';
import ProjectActive from './project-active';

const ProjectsSection = styled.section`
  display: block;
  max-width: 1160px;
  margin: 40px auto 0;
`;

const ProjectsContainer = styled.div`
  overflow: hidden;
  padding: 0 20px;
`;

class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            overlayActive: false,
            activeIndex: null
        };

        this.handleProjectSelect = this.handleProjectSelect.bind(this);
        this.handleOverlayClose = this.handleOverlayClose.bind(this);
    }

    handleProjectSelect(index) {
        document.body.style.overflow = 'hidden';

        this.setState({
            overlayActive: true,
            activeIndex: index
        });
    }

    handleOverlayClose() {
        document.body.style.overflow = 'auto';

        this.setState({overlayActive: false});
    }

    render() {
        return (
            <ProjectsSection>
                <SectionTitle>Portfolio</SectionTitle>
                <ProjectsContainer>
                    <ProjectList
                        onProjectSelect={this.handleProjectSelect}
                    />
                    <ProjectActive
                        overlayActive={this.state.overlayActive}
                        onOverlayClose={this.handleOverlayClose}
                    />
                </ProjectsContainer>
            </ProjectsSection>
        );
    }
}

export default Portfolio;
