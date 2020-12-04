import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding-top: 24px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  text-align: center;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
`;

const TodoHead = () => {
  return (
    <TodoHeadBlock>
      <h1>Todo List</h1>
    </TodoHeadBlock>
  );
}

export default TodoHead;