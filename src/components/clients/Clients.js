import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render() {
    const clients = [
      {
        id: '434344344',
        firstName: 'John',
        lastName: 'Johonson',
        email: 'john@gmail.com',
        phone: '555-555-5555',
        balance: '30',
      },
    ];

    if (clients) {
      return (
        <div>
          <div className='row'>
            <div className='col-md-6'>
              <h2>
                {' '}
                <i className='fas fa-users' /> Clients{' '}
              </h2>
            </div>
          </div>

          <table className='table table-striped'>
            <thead className='thead-inverse'>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className='btn btn-secondary btn-sm'
                    >
                      <i className='fas fa-arrow-circle-right'></i> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        <h1>Clients</h1>
      </div>
    );
  }
}

export default Clients;
