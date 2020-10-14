import React, { useState } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

function App(){

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [guests, setGuests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGuests([...guests,...[{ firstname, lastname }]]);
    setFirstName("");
    setLastName("");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <form onSubmit={ e => handleSubmit(e) } >
            <div className="form-group">
              <label htmlFor="first-name">Nombre</label>
              <input
                onChange={ e => setFirstName(e.target.value) }
                value= { firstname }
                type="text" 
                className="form-control" 
                name="first-name" />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Apellido</label>
              <input
                onChange={ e => setLastName(e.target.value) }
                value={ lastname }
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
            {guests.map((guest, index) =>
                <tr key={index}>
                  <td>{guest.firstname}</td>
                  <td>{guest.lastname}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App


