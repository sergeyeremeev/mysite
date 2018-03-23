import React from 'react';
import styled from 'styled-components';
import themeColors from '../common/theme-colors';

const ProjectDetails = styled.div`
  padding-right: 20px;
  color: ${themeColors.gray};
  font-size: 15px;
  
  strong,
  h4 {
    color: ${themeColors.green};
  }
  
  p,
  ul {
    line-height: 1.3;
  }
  
  a {
    text-decoration: underline;
    color: ${themeColors.green};
    
    &:hover {
      color: ${themeColors.gray};
    }
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
    
    span {
      white-space: nowrap;
    }
  }
`;

const ProjectContent = ({project}) => {
    const renderRepositoryLink = (repo) => {
        if (repo.includes('http://') || repo.includes('https://')) {
            return (
                <a target="_blank" href={repo}>{repo}</a>
            );
        } else {
            return <span>{repo}</span>;
        }
    };

    return (
        <ProjectDetails>
            <ProjectSummary>
                <div>
                    <strong>Role:</strong><br />
                    <span>{project.role}</span>
                </div>
                <div>
                    <strong>Type:</strong><br />
                    <span>{project.type}</span>
                </div>
            </ProjectSummary>
            <h4>Description:</h4>
            <p>{project.description}</p>
            <h4>Tasks/Features/Achievements:</h4>
            <ul>
                {project.tasks_features.map((entry, i) =>
                    <li key={i}>{entry}</li>
                )}
            </ul>
            <p><strong>Repository:</strong> {renderRepositoryLink(project.repository)}</p>
        </ProjectDetails>
    );
};

export default ProjectContent;
