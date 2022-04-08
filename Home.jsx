import React, { Component } from 'react'
import {  Row, Table } from 'reactstrap';
import EmployeeService from '../services/Services';
import { Link } from 'react-router-dom';

export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            i:0
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({
                employees: res.data
            });

        });

    }

    addEmployee() {
        this.props.history.push('/add-employee');
    }

    editEmployee(id) {
        this.props.history.push(`/update-employee/${id}`);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
            this.setState({i:0});
        });
    }

    render() {
        return (
            <div className='container'>

                <h2 className="text-center" style={{ padding: "1.5em" }}>Employees List</h2>
                <Row >
                    <Table striped bordered responsive hover >
                        <thead >
                            <tr style={{ color:"#fff",background:"#000" }} >
                                <th >#</th>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email ID</th>
                                <th>Employee phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {++this.state.i} </td>
                                            <td> {employee.name} </td>
                                            <td> {employee.username} </td>
                                            <td> {employee.email} </td>
                                            <td> {employee.phone} </td>
                                            <td>
                                                <Link className="btn-primary " style={{ marginRight: "10px", padding: "7px 10px", textDecoration: "none", }} to={`/users/edit/${employee.id}`}>Edit</Link>
                                                <Link className="btn-danger " style={{ marginRight: "10px", padding: "7px 10px", textDecoration: "none" ,borderRadius:"5px" }} onClick={() => this.deleteEmployee(employee.id)} color="danger">Delete</Link>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>

            </div>
        )
    }
}
