import React from 'react'
import { AuthContext } from './Providers/auth';

function App() {
  const { user, setUser } = React.useContext(AuthContext)

  return (
    <div className="App">
      <h1>teste</h1>
      <h1>{user.name}</h1>
      <input onChange={ e => setUser(prevState => ({...prevState, name: e.target.value}))}></input>
    </div>
  );
}

export default App;
