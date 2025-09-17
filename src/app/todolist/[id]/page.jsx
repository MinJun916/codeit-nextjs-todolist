"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TodoDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [todo, setTodo] = useState({});

  const fetchTodoDetail = async () => {
    try {
      const res = await fetch(`http://localhost:4000/todos/${id}`);
      const data = await res.json();
      setTodo(data);
      console.log(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchTodoDetail();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center">
        <div>할 일:</div>
        <div>{todo.title}</div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div>상태:</div>
        <div>{todo.isCompleted ? "완료" : "미완료"}</div>
      </div>
      <button
        onClick={() => router.push("/todolist")}
        className="cursor-pointer border-1 border-gray-300 rounded-md p-2"
      >
        뒤로가기
      </button>
    </div>
  );
};

export default TodoDetail;
