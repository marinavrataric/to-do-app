import React, { useState, ChangeEvent } from "react";
import InputForm from "../../components/input/InputForm";
import ButtonForm from "../../components/button/ButtonForm";
import { CenterDiv } from "../../constants/styleConstants";
import { ToDoInterface } from "../../interfaces/ToDoInterface";
import SingleTodo from "../../components/single_todo/SingleTodo";
import { messageIds } from "../../constants/generalContants";

const { FormattedMessage, useIntl } = require("react-intl");
const { v4: uuid } = require("uuid");

const ToDoList = () => {
  const [toDoInputText, setToDoInputText] = useState("");
  const [allToDos, setAllToDos] = useState<ToDoInterface[]>([]);

  const handleToDoInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setToDoInputText(e.target.value);
  };

  const addNewToDo = () => {
    toDoInputText &&
      setAllToDos([
        ...allToDos,
        { id: uuid(), toDoText: toDoInputText, isChecked: false },
      ]);
    setToDoInputText("");
  };

  const setToDoChecked = (id: string) => {
    const allToDosChecked = allToDos.map((toDo: ToDoInterface) => ({
      ...toDo,
      isChecked: toDo.id === id ? !toDo.isChecked : toDo.isChecked,
    }));
    setAllToDos(allToDosChecked);
  };

  const deleteTodo = (id: string) => {
    const allToDosDeleted = allToDos.filter(
      (toDo: ToDoInterface) => id !== toDo.id
    );
    setAllToDos(allToDosDeleted);
  };

  const placeholder = useIntl().formatMessage({id: messageIds.toDoPlaceholder})
  const buttonName = useIntl().formatMessage({id: messageIds.btnAddToDo})

  return (
    <CenterDiv>
      <InputForm
        value={toDoInputText}
        placeholder={placeholder}
        onChange={handleToDoInputText}
      />
      <ButtonForm onClick={addNewToDo} buttonName={buttonName} />
      {allToDos.length === 0 ? (
        <h2><FormattedMessage id={messageIds.toDoInfo}/></h2>
      ) : (
        allToDos.map((toDo: ToDoInterface) => (
          <SingleTodo
            key={toDo.id}
            toDo={toDo}
            setToDoChecked={setToDoChecked}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </CenterDiv>
  );
};

export default ToDoList;
