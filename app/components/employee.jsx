const React = require('react');
import DeleteEmployee from './delete-employee.jsx'

export default class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.employee.id}</td>
				<td>{this.props.employee.name}</td>
				<td>{this.props.employee.department}</td>
				<td><DeleteEmployee deleteEmployee={this.props.deleteEmployee}/></td>
			</tr>
		)
	}
}