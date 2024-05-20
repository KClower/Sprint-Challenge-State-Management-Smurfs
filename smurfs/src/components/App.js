import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../Actions";
import Form from "./Form";
import "./App.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";





function App(props) {
  props.fetchSmurfs()
  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <h1>SMURFS!</h1>
      <Form />
      {props.smurfs.map((smurf) => (
        <Card
          style={{
            width: '18rem'
          }}
        >
          <CardBody>
            <CardTitle tag="h3">
              {smurf.name}
            </CardTitle>
            <CardText className="my-0">
              Age: {smurf.age}
            </CardText>
            <CardText>
              Height: {smurf.height}
            </CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
