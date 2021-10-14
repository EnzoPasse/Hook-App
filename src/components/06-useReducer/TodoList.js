import React from "react";
import { TodoListItem } from "./TodoListItem";
import { List, Row } from "antd";

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <>
      <List
        size="default"
        bordered
        dataSource={todos}
        renderItem={(item, i) => (
          <Row justify="space-between" align="middle">
            
            <TodoListItem
              todo={item}
              index={i}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />

          </Row>
        )}
      />
    </>
  );
};
