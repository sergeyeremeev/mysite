import { combineReducers } from 'redux';
import JobsReducer from './reducer_jobs';
import ActiveJobReducer from './reducer_active_job';

const rootReducer = combineReducers({
    jobs: JobsReducer,
    activeJob: ActiveJobReducer
});

export default rootReducer;
