import React from "react";
import { useForm } from "../../hooks/useForm";
import { Button, Form, Input } from "antd";

export const TodoAdd = ({ handleAddTodo }) => {
  
  const [state, handleInputChange, reset] = useForm({
    newTodo: "",
  });
  const { newTodo } = state;

  const handleSubmit = (values) => {
    if (newTodo.trim().length <= 1) {
      return;
    }

    const newTodoToAdd = {
      id: new Date().getTime(),
      desc: newTodo,
      done: false,
    };

    handleAddTodo(newTodoToAdd);
    reset();
  };

  return (
    <Form name="basic" onFinish={handleSubmit} autoComplete="off">
      <Form.Item
        rules={[{ required: true, message: "Please input something!" }]}
      >
        <Input
          onChange={(e) => {
            handleInputChange(e, "newTodo");
          }}
          value={newTodo}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block shape="round">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
