import React, { Component } from 'react'
import EmployeeService from '../services/Services';
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Row } from 'reactstrap'

export default class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            phone: '',
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }


    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res)=>{
            let employee = res.data;
            this.setState({firstName: employee.name,
                lastName: employee.username,
                emailId: employee.email,
                phone: employee.phone,
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        if(this.state.firstName !== '' && this.state.lastName !== '' && this.state.emailId !== '' && this.state.phone){
        let employee = {name: this.state.firstName, username: this.state.lastName, email: this.state.emailId,phone: this.state.phone};
        EmployeeService.updateEmployee(employee, this.state.id).then( res=> {
            this.props.history.push('/');
        });
    }else{
        this.setState({msg:'Please fill all the required fields'})
    }

    }

    changeHandler = (event)=>{
        this.setState({ [event.target.name]: event.target.value });
    }

    cancel()
    {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Card>
                            <Col>
                                <h3>Update Employee</h3>
                                {this.state.msg !== '' &&
                               <p>
                                 {this.state.msg }
                                </p>
                                }
                                <CardBody>
                                    <Form>
                                        <FormGroup style={{padding:"1em"}}>
                                            <label>First Name:</label>
                                            <input name="firstName" className='form-control' value={this.state.firstName} onChange={this.changeHandler}></input>
                                        </FormGroup>
                                        <FormGroup style={{padding:"1em"}}>
                                            <label>Last Name:</label>
                                            <input name="lastName" className='form-control' value={this.state.lastName} onChange={this.changeHandler}></input>
                                        </FormGroup>
                                        <FormGroup style={{padding:"1em"}}>
                                            <label>Email ID:</label>
                                            <input name="emailId" className='form-control' value={this.state.emailId} onChange={this.changeHandler}></input>
                                        </FormGroup>
                                        <FormGroup style={{padding:"1em"}}>
                                            <label>phone:</label>
                                            <input name="phone" className='form-control' value={this.state.phone} onChange={this.changeHandler}></input>
                                        </FormGroup>
                                        <Button color="success" style={{marginRight:"12px"}} onClick={this.updateEmployee}>Save</Button>
                                        <Button color="danger"onClick={this.cancel.bind(this)}>Cancel</Button>
                                    </Form>
                                </CardBody>
                            </Col>
                        </Card>
                    </Row>
                </Container>
            </div>
        )
    }
}

