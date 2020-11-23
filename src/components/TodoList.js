import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/api/all')
  .then(function (response) {
    setTodos(response.data);
    console.log(todos);
  })
  .catch(function (error) {
    console.log(error);
  })
  }, []);

  const listTodos = todos.map((todo) =>
    <Card key={todo.id}>
      <Card.Body>{todo.todo}</Card.Body>
    </Card>
  );
  return (
    <div>
        {listTodos}
    </div>
  )
}
