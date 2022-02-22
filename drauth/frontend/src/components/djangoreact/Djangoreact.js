import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDjangoreact, deleteDjangoreact } from '../../actions/djangoreact';

export class Djangoreact extends Component {
  static propTypes = {
    djangoreact: PropTypes.array.isRequired,
    getDjangoreact: PropTypes.func.isRequired,
    deleteDjangoreact: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getDjangoreact();
  }

  render() {
    return (
      <Fragment>
        <h1>Djangoreact</h1>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID :</th>
              <th>Name :</th>
              <th>Email :</th>
              <th>Message :</th>
              <th />
            </tr>
          </thead>
          <tbody>
            { this.props.djangoreact.map(dr => (
              <tr key={dr.id}>
                <td>{dr.id}</td>
                <td>{dr.name}</td>
                <td>{dr.email}</td>
                <td>{dr.message}</td>
                <td><button onClick={this.props.deleteDjangoreact.bind(this, dr.id)} className='btn btn-danger btn-sm'>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  djangoreact: state.djangoreact.djangoreact
})

export default connect(mapStateToProps, { getDjangoreact, deleteDjangoreact })(Djangoreact);