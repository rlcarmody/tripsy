/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import API from '../../../utils/API';


class AddSuppliesForm extends Component {
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
      .then((results) => {
        this.props.history.push('/Supplies');
        this.props.updateSupplies(results.data);
        this.setState({ items: [] });
      });
  }

  render() {
    console.log(this.props.tripID)
    return (
      <Fragment>

          <form onSubmit={this.handleAddSupplies} id="addSupplies">

            <div className="formField">
              
              <input
                className="formFieldInput"
                type="text"
                name="item"
                id="item"
                placeholder="Gummy Bears"
                value={this.state.newItem}
                onChange={this.handleChange}
              />
              
              {this.state.items.map((item, index) => (
                <div key={index} className="chip">
                  {item}
                  <i onClick={this.handleRemove} className="material-icons">close</i>

                </div>
              ))}
              <br />
              <button
                className="btn waves-light"
                type="button"
                onClick={this.addItem}
              >
                    Add Item
              </button>
              <input
              className="btn waves-light formButton p-2"
              type="submit"
              id="btn"
              value="Save List"
            />
            
            </div>
            

          </form>

      </Fragment>
    );
  }
}
export default withRouter(AddSuppliesForm);
