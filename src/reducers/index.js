import { combineReducers } from 'redux';
import JobsReducer from './reducer_jobs';
import ActiveJobReducer from './reducer_active_job';
import ProjectsReducer from './reducer_projects';

const rootReducer = combineReducers({
    jobs: JobsReducer,
    activeJob: ActiveJobReducer,
    projects: ProjectsReducer
});

export default rootReducer;
