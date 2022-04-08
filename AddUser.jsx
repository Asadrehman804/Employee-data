import React, { Component } from 'react'
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import axios from 'axios'; 

export default class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            phone: '',
            msg:''
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = async e => {
        e.preventDefault();
        if(this.state.firstName !== '' && this.state.lastName !== '' && this.state.emailId !== '' && this.state.phone){
          let employee = {name: this.state.firstName, username: this.state.lastName, email: this.state.emailId, phone: this.state.phone};
          await axios.post(`http://localhost:3001/users`, employee)
          this.props.history.push('/');
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
                                <h3>Add Employee</h3>
                                {this.state.msg !== '' &&
                               <p>
                                 {this.state.msg }
                                </p>
                                }
                                <CardBody>
                                    <Form>
                                        <FormGroup style={{padding:"1em"}}>
                                            <label>First Name:</label>
                                            <input name="firstName" required className='form-control' value={this.state.firstName} onChange={this.changeHandler}></input>
                                        </FormGroup>
                                        <FormGroup style={{padding:"1em"}}>
                                            <label>Last Name:</label>
                                            <input name="lastName" required className='form-control' value={this.state.lastName} onChange={this.changeHandler}></input>
                                        </FormGroup>
                                        <FormGroup style={{padding:"1em"}}>
                                            <label>Email ID:</label>
                                            <input name="emailId" required className='form-control' value={this.state.emailId} onChange={this.changeHandler}></input>
                                        </FormGroup>
                                        <FormGroup style={{padding:"1em"}}>
                                            <label>Phone:</label>
                                            <input name="phone" required className='form-control' value={this.state.phone} onChange={this.changeHandler}></input>
                                        </FormGroup>
                                        <Button color="success" style={{marginRight:"10px"}} onClick={this.saveEmployee}>Save</Button>
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

