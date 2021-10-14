import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { PageHeader, Row, Col, Divider } from "antd";


export const TodoApp = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  

  const handleAddTodo = (newTodoToAdd) => {
      dispatch({
        type: "add",
        payload: newTodoToAdd,
      })
  }

  const handleDelete = (todo) => {
    const action = {
      type: "delete",
      payload: todo.id,
    };
    dispatch(action);
  };

  const handleToggle = (todo) => {
    dispatch({
      type: "toggle",
      payload: todo.id,
    });
  };

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Todo App"
        subTitle="useReducer"
        extra={todos.length}
      />

      <Row type="flex" align="top" justify="space-between">
        <Col span={12}>
          <Divider orientation="center">TODOs</Divider>

          <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />

        </Col>

        <Col span={11} offset={1}>
          <Divider orientation="center">Agregar TODO</Divider>
          
          <TodoAdd  handleAddTodo={handleAddTodo} /> 

        </Col>
      </Row>
    </>
  );
};
