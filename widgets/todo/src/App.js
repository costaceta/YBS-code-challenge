import React from 'react'

import Todo from './components/Todo/Todo';

const App = () => {
	return (
		<div>
			<Todo />
		</div>
	)
}

export default App;

// import React from 'react';

// export default class extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Todo App</h1>
// 				<div>
// 					<span className="tag">Portlet Namespace:</span>
// 					<span className="value">{this.props.portletNamespace}</span>
// 				</div>
// 				<div>
// 					<span className="tag">Context Path:</span>
// 					<span className="value">{this.props.contextPath}</span>
// 				</div>
// 				<div>
// 					<span className="tag">Portlet Element Id:</span>
// 					<span className="value">{this.props.portletElementId}</span>
// 				</div>
// 			</div>
// 		);
// 	}
// }

