import React, { Component } from 'react';
import styled from 'styled-components';
import themeColors from '../common/theme-colors';

const ProjectDetails = styled.div`
  padding-right: 20px;
  color: ${themeColors.brown};
  font-size: 15px;
  
  strong,
  h4 {
    color: ${themeColors.blue};
  }
  
  a {
    text-decoration: underline;
    color: ${themeColors.blue};
  }
`;

const ProjectSummary = styled.div`
  display: flex;
  margin-bottom: 30px;
  
  div:last-child {
    margin-left: auto;
    
    strong {
      display: inline-block;
      width: 100%;
      text-align: right;
    }
  }
`;

class ProjectContent extends Component {
    renderRepositoryLink(repo) {
        if (repo.includes('http://') || repo.includes('https://')) {
            return (
                <a href={repo}>{repo}</a>
            );
        } else {
            return <span>{repo}</span>;
        }
    }

    render() {
        const activeProject = this.props.project;

        return (
            <ProjectDetails>
                <ProjectSummary>
                    <div>
                        <strong>Role:</strong><br />
                        <span>{activeProject.role}</span>
                    </div>
                    <div>
                        <strong>Type:</strong><br />
                        <span>{activeProject.type}</span>
                    </div>
                </ProjectSummary>
                <h4>Description:</h4>
                <p>{activeProject.description}</p>
                <h4>Tasks/Features/Achievements:</h4>
                <ul>
                    {activeProject.tasks_features.map((entry, i) =>
                        <li key={i}>{entry}</li>
                    )}
                </ul>
                <p><strong>Repository:</strong> {this.renderRepositoryLink(activeProject.repository)}</p>
            </ProjectDetails>
        );
    }
}

export default ProjectContent;
