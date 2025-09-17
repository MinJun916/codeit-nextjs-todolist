"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:4000/todos");
      const data = await res.json();
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="flex justify-start items-center gap-4">
            <Link href={`/todolist/${todo.id}`}>
              <div>{todo.title}</div>
            </Link>
            <button>완료</button>
            <button>완료취소</button>
            <button>삭제</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
