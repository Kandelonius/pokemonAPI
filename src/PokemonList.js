import React, { useState, useEffect } from 'react';

function PokeList(props) {
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    useEffect(() => {
        setName(props.character.name)
        setUrl(props.character.url)

    })
  

  return (
    <div className="App">
      <header className="App-header">
          <h1>Name: {name}</h1>
          <p>url: {url}</p>
      </header>
    </div>
  );
}

export default PokeList;