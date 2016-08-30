import {combineReducers} from 'redux';

import ajaxCallsInProgress from './ajaxStatusReducer';
import dashboards from './dashboardReducer';
import roles from './roleReducer';
import permissions from './permissionReducer';
import dataSources from './dataReducer';
import manageDashboard from './dashboardManagmentReducer';

const rootReducer = combineReducers({
	ajaxCallsInProgress,
	dashboards,
	roles,
	permissions,
	dataSources,
	manageDashboard
});

export default rootReducer;