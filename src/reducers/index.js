import { combineReducers } from 'redux';
import JobsReducer from './reducer_jobs';
import ActiveJobReducer from './reducer_active_job';
import ProjectsReducer from './reducer_projects';
import ActiveProjectReducer from './reducer_active_project';
import SkillsReducer from './reducer_skills';

const rootReducer = combineReducers({
    jobs: JobsReducer,
    activeJob: ActiveJobReducer,
    projects: ProjectsReducer,
    activeProject: ActiveProjectReducer,
    skills: SkillsReducer
});

export default rootReducer;
