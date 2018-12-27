import React, { Component } from 'react';
import './App.css';
import {
  Col, Form,
  FormGroup,Input,
} from 'reactstrap';
import cap from './img/Capture.PNG';
import cap1 from './img/Capture1.PNG';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      companyname: "Company Name",
      numcarte:"",
      numcarte1:"",
      numcarte2:"",
      numcarte3:"",
      date:"",
      name:""
    }
    };
  recup=(target)=>{
    this.setState({
   [target.id]:target.value
    });
  }
  render() {
    return (
      <div className="App">
        <div className="cadre">
        <b className="companyname">{this.state.companyname}</b>
        <br></br>
        <img className="img" src={cap} alt=""></img>
        <br></br>
        <b className="numrcarte">1351 8{this.state.numcarte}</b>
        <b className="numrcarte">{this.state.numcarte1}</b>
        <b className="numrcarte">{this.state.numcarte2}</b>
        <b className="numrcarte">{this.state.numcarte3}</b>
        <br></br>
        <b className="date">{this.state.date}</b>
        <img className="img1" src={cap1} alt=""></img>
        <br></br>
        <b className="name">{this.state.name}</b>
        </div>
        <div className="App-header">
        <Form className="form">
          <Col>
            <FormGroup>
              <Input
                maxLength='16'
                type='text'
                id="numcarte"
                onChange={(e)=>this.recup(e.target)}
                placeholder="1351 8"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                maxLength='20'
                id="name" 
                onChange={(e)=>this.recup(e.target)}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                id="date"
                type="date"
                onChange={(e)=>this.recup(e.target)}
              />
            </FormGroup>
          </Col>
        </Form>
        </div>
      </div>
    );
  }
}

export default App;
