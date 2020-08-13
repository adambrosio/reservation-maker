import React, { Component, useState } from 'react';

import { UserContext } from './UserContext';

function ContextProvider() {

  const [ id, setID ] = useState(null)
  const [ name, setName ] = useState('Login')
  const [ username, setUsername ] = useState(null)

  const context = {
    id: id,
    name: name,
    username: username
  }

  const handleSetID = newID => {
    setID(newID);
  }

  const handleSetName = newName => {
    setID(newName);
  }

  const handleSetusername = newUsername => {
    setID(newUsername);
  }


  return (
    <ContextProvider.Provider value={context} />
  );

}

export default ContextProvider;
