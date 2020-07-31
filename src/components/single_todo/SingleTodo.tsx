import React from "react";
import { ToDoInterface } from "../../interfaces/ToDoInterface";
import styled from "styled-components";
import { colors } from "../../constants/styleConstants";

const ToDoContainer = styled.div`
  border: 2px ${colors.blue} solid;
  padding: 10px 0;
  width: 300px;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: 16px;
  border-radius: 23px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface ToDoTextProps {
  isChecked: boolean;
}

const ToDoText = styled.p`
  position: absolute;
  margin-left: 33px;
  font-size: 14px;
  text-decoration: ${(props: ToDoTextProps) =>
    props.isChecked && "line-through"};
  font-style: ${(props: ToDoTextProps) => props.isChecked && "italic"};
`;

const DeleteButton = styled.button`
  margin-right: 6px;
  border: none;
  background-color: transparent;
  font-size: 18px;
  color: red;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const CheckkBox = styled.input`
  margin-left: 10px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  toDo: ToDoInterface;
  setToDoChecked: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const SingleTodo = ({ toDo, setToDoChecked, deleteTodo }: Props) => {
  const handleCheckToDo = () => setToDoChecked(toDo.id);
  const handleDeleteTodo = () => deleteTodo(toDo.id);

  return (
    <ToDoContainer>
      <CheckkBox
        type="checkbox"
        onChange={handleCheckToDo}
        checked={toDo.isChecked}
      />
      <ToDoText isChecked={toDo.isChecked}>{toDo.toDoText}</ToDoText>
      <DeleteButton onClick={handleDeleteTodo}>
        <i className="fa fa-remove" aria-hidden="true"></i>
      </DeleteButton>
    </ToDoContainer>
  );
};

export default SingleTodo;
