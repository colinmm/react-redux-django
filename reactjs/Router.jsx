import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import Layout from './components/Layout';

// Pages
import Jobs from './components/Jobs';

export default (
	<Router history={ browserHistory }>
		<Route path='/' component={ Layout }>
			<Route path='jobs' component={ Jobs } />			
		</Route>
	</Router>
);