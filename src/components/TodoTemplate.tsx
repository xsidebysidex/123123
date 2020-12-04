import React from 'react';
import styled from 'styled-components';

const TodoTemplateForm = styled.div`
    width: 400px;
    height: 500px;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.1);

    margin: 0 auto;

    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`;

interface TodoTemplateProps  {
    children: any;
}

const TodoTemplate = ({children} : TodoTemplateProps) =>{
  return <TodoTemplateForm>{children}</TodoTemplateForm>
}


export default TodoTemplate;
