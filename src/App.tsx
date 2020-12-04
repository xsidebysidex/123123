import React, { useState, useRef} from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  body{
    background: #aaaaaa;
  }
`;

const App = () => {
  const [inputs, setInputs] = useState({
    inputTodo:''
  });
  const { inputTodo } = inputs;
  const refInput = React.useRef<HTMLInputElement>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
     setInputs({
      ...inputs,
      [name]:value
    });
  }
  console.log(inputs);

  const [todos, setTodos] = useState([
    {
        id: 1,
        inputTodo: 'test1',
        state: false
    },
    {
        id: 2,
        inputTodo: 'test2',
        state: false
    },
    {
        id: 3,
        inputTodo: 'test3',
        state: true
    }
  ]);
  
  const nextId = useRef(4);
  const onCreate = () => {
    const todo = {
      id: nextId.current,
      inputTodo,
      state: false
    };
    setTodos(todos.concat(todo));

    setInputs({
      inputTodo:''
    })
    nextId.current += 1;
    
    console.log(refInput.current);
    if(refInput.current) {
      refInput.current.focus();
    }
    console.log(todos);
  }
  const onRemove = (id : number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = (id : number) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, state: !todo.state} : todo ));
  }

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <CreateTodo 
          inputTodo={inputTodo}
          onCreate={onCreate}
          onChange={onChange}
          ref={refInput}
        />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </>
  );
}

export default App;
