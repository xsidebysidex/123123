import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

interface TodoProps {
    todo: {
        id: number,
        inputTodo: string,
        state: boolean
    };
    onRemove : (id : number) => void;
    onToggle : (id : number) => void;
}

interface TodoListProps {
    todos: {
        id: number;
        inputTodo: string;
        state: boolean;
    }[];
    onRemove : (id : number) => void;
    onToggle : (id : number) => void;
}

interface Props {
    state : boolean;
}

const TodoListForm = styled.div`
  flex:1;
  padding-top: 24px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  font-size: 25px;
  overflow-y: auto;
`;

const Remove = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover{
    color: red;
  }
`;

const TodoItemForm = styled.div`
  display:flex;
`;

const CheckBox = styled.div<Props>`
    width:25px;
    height:25px;
    border:1px solid black;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props =>
        props.state &&
        css`
            border: none;
            color:red;
    `}
`;

const Text = styled.div<Props>`
    flex: 1;
    ${props =>
        props.state &&
        css`
            color:#eeeeee;
            text-decoration: line-through;
    `}
`;

const Todo = ({ todo, onRemove, onToggle } : TodoProps) => {
    return(
        <TodoItemForm>
            <CheckBox state={todo.state} onClick={() => onToggle(todo.id)}>
                {todo.state && <MdDone />}
            </CheckBox>
            <Text state={todo.state}>{todo.inputTodo}</Text>
            <Remove>
                <MdDelete onClick={() => onRemove(todo.id)} />
            </Remove>
        </TodoItemForm>
    );
}

const TodoList = ({ todos, onRemove, onToggle } : TodoListProps) => {

    return(
        <TodoListForm>
            {todos.map(todo => (
                <Todo todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </TodoListForm>
    )
}

export default TodoList;