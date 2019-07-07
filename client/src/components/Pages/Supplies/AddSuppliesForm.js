import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { withRouter } from 'react-router-dom';
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
    const { newItem } = this.state;
    const uniqueKey = shortid.generate();
    this.setState(currentState => ({ items: [...currentState.items, { name: newItem, id: uniqueKey }], newItem: '' }));
  }

  handleChange = (e) => {
    this.setState({ newItem: e.target.value });
  }

  handleRemove = ({ id }) => {
    this.setState(currentState => ({ items: currentState.items.filter(item => item.id !== id) }));
  }

  handleAddSupplies = (event) => {
    event.preventDefault();
    const { tripID, updateSupplies } = this.props;
    const { items } = this.state;
    const supplies = items.map(item => item.name);
    API.addSupplies(tripID, supplies)
      .then((results) => {
        this.props.history.push('/Supplies');
        if (updateSupplies) {
          updateSupplies(results.data);
        }
        this.setState({ items: [] });
      });
  }

  render() {
    const { newItem, items } = this.state;
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
              value={newItem}
              onChange={this.handleChange}
            />

            {items.map(item => (
              <div key={item.id} className="chip">
                {item.name}
                <button type="button" onClick={() => this.handleRemove(item)}>
                  <i className="material-icons">close</i>
                </button>
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

AddSuppliesForm.propTypes = {
  tripID: PropTypes.string.isRequired,
  updateSupplies: PropTypes.func,
};

AddSuppliesForm.defaultProps = {
  updateSupplies: null,
};
