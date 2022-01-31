import './App.css';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { prodUrl } from './utils';
import Title from './components/Title';

import NavbarRes from './components/navbar/NavbarRes';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {


    fetch(`${prodUrl}api`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        setData(data.message)
      })
      .catch(err => {
        setData(err)
      })

  }, [data]);

  return (
    <>

      <NavbarRes />
    </>

  );
}

export default App;
