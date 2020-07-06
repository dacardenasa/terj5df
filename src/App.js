import React, { Component } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

class App extends Component {
  constructor(){
    super();
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.state = {
      guests: []
    }
  }

  handleSubmit(e){
    let oldGuests = this.state.guests;
    let newGuest = {
      name: this.firstName.current.value, 
      lastName: this.lastName.current.value 
    }  
    this.setState({
      guests: [...oldGuests, newGuest]
    });
    e.preventDefault();
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
                  ref={this.firstName}
                  type="text" 
                  className="form-control" 
                  name="first-name" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input
                  ref={this.lastName}
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
                  <Row key={index} name={guest.name} lastName={guest.lastName} />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

const Row = (props) => {
  return(
    <tr>
      <td>{props.name}</td>
      <td>{props.lastName}</td>
    </tr>
  );
}

Row.defaultProps = {
  name: 'Marty',
  lastName: 'McFly'    
}

export default App


