import React from "react";
import { List, Button } from "antd";
import { RestOutlined } from "@ant-design/icons";

export const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
  return (
    <>
      <List.Item
        className={`${todo.done && "complete"}`}
        onClick={() => handleToggle(todo)}
      >
        {index + 1}. {todo.desc}
      </List.Item>
      
      <Button
        shape="circle"
        icon={<RestOutlined />}
        onClick={() => {
          handleDelete(todo);
        }}
      />
    </>
  );
};
