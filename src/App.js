  import React, { Component }from 'react';
  import Header from './components/header/Header';
  import Tasks from './components/tasks/Tasks';
  import Container from 'react-bootstrap/Container'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
  import './App.scss';
  library.add(faCheckCircle, faTrashAlt)

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Tasks/>
      </Container>
    </div>
  );
}

