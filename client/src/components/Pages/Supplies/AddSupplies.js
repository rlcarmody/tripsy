/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { ListItem } from '../../layoutComponents/List';
import { Row, Col, Container } from '../../layoutComponents/Grid';
import API from '../../../utils/API';


class AddSupplies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      items: [],
    };
  }

  addItem = () => {
    this.setState(currentState => ({ items: [...currentState.items, currentState.newItem], newItem: '' }));
  }

  handleChange = (e) => {
    this.setState({ newItem: e.target.value });
  }

  handleRemove = (index) => {
    this.state.items.splice(index, 1);
    this.setState({ items: this.state.items });
  }

  handleAddSupplies = (event) => {
    event.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    console.log('form was submitted with the following data:');
    console.log(this.state);
    console.log('trip id is: ');
    console.log(this.props.tripID);

    API.addSupplies(this.props.tripID, this.state.items)
      .then(() => {
        this.props.history.push('/Supplies');
      });
  }

  render() {
    console.log(this.props.tripID)
    return (
      <Fragment>
        <Container>
          <Row>
            <Col>
              <h2 className="headline">Create a Shopping List for your Trip!</h2>
            </Col>
          </Row>
          <form onSubmit={this.handleAddSupplies}>

            <div className="formField">
              <label className="formFieldLabel" htmlFor="item">
                Supply...
                <input
                  className="formFieldInput"
                  type="text"
                  name="item"
                  id="item"
                  value={this.state.newItem}
                  onChange={this.handleChange}
                />
              </label>
              {this.state.items.map((item, index) => (
                <div key={index}>
                  {item}
                  <button onClick={this.handleRemove}>X</button>

                </div>
              ))}
              <br />
              <button
                className="btn waves-light"
                type="button"
                onClick={this.addItem}>
                    Add Item
              </button>
            </div>
            <br />
            <input
              className="btn waves-light formButton"
              type="submit"
              id="btn"
              placeholder="Next"
            />

          </form>
          <br />
          <Link to="/tripDash">
            <button type="button">
              Skip This Step
            </button>
          </Link>
        </Container>
      </Fragment>
    );
  }
}
export default withRouter(AddSupplies);
