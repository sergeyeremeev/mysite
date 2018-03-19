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

    render() {
        return (
            <ProjectsSection>
                <SectionTitle>Portfolio</SectionTitle>
                <ProjectsContainer>
                    <ProjectList />
                    <ProjectActive />
                </ProjectsContainer>
            </ProjectsSection>
        );
    }
}

export default Portfolio;
