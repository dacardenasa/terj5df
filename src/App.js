import React, { Component } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

class App extends Component {
  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      guests: []
    }
  }

  handleChangeFirstName(event){
    this.setState({
      firstName: event.target.value,
    });
  }

  handleChangeLastName(event){
    this.setState({
      lastName: event.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let oldGuests = this.state.guests;
    let newGuest = {
      firstName: this.state.firstName, 
      lastName: this.state.lastName
    }  
    this.setState({
      guests: [...oldGuests, newGuest]
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit.bind(this)} >
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input
                  onChange={this.handleChangeFirstName.bind(this)}
                  value={this.state.firstName}
                  type="text" 
                  className="form-control" 
                  name="first-name" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input
                  onChange={this.handleChangeLastName.bind(this)}
                  value={this.state.lastName}
                  type="text" 
                  className="form-control" 
                  name="last-name" />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
              {this.state.guests.map((guest, index) =>
                  <tr key={index}>
                    <td>{guest.firstName}</td>
                    <td>{guest.lastName}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


