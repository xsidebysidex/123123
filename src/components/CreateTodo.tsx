import React from 'react';
import styled from 'styled-components';

const CreateTodoForm = styled.div`
  padding-top: 24px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  text-align: center;
  input{
      margin-right: 20px;
      border:1px solid black;
      padding:5px;
  }
  button{
      background:white;
      border:1px solid black;
      padding:5px;
  }
`;

interface CreateTodoProps {
    inputTodo: string;
    onCreate: () => void;
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
    ref: any;
}

const CreateTodo = ({ inputTodo, onCreate, onChange, ref} : CreateTodoProps) => {

    return(
        <CreateTodoForm>
            <input
                name="inputTodo"
                placeholder="할일"
                value={inputTodo}
                onChange={onChange}
                ref={ref}
            />
            <button onClick={onCreate}>등록</button>
        </CreateTodoForm>
    );
}

export default CreateTodo;