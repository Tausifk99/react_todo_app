import React, { useEffect, useState } from "react";
import "../App.css";
export default function TodoList(props) {
  const [done, setDone] = useState(false);
  const [allTask, setAllTask] = useState(props?.todos);
  function changeTaskDetail(index) {
    setDone(!done);
    let updatedTodo = props.todos[index];
    updatedTodo.done = !done;
    let newArray = props.todos;
    newArray[index] = updatedTodo;
    setAllTask(newArray);
  }
  function deleteTodo(index) {
    props.setTodos(props.todos.filter((item) => item !== props.todos[index]));
  }
  useEffect(() => {}, [allTask]);

  return (
    <>
      {props.todos?.map((element, index) => {
        return (
          <div className="taskContainer" key={index}>
            {element.task != "" && element.name != "" ? (
              <tr className="taskRow">
                <td className="taskColumn">
                  <h3
                    className="taskContent"
                    id={element.done ? "todoItem" : ""}
                    onClick={() => changeTaskDetail(index)}
                  >
                    {element.name} This is task name and the given task is{" "}
                    {element.task}
                  </h3>
                </td>
                <td className="taskColumn">
                  <span className="deleteBtn" onClick={() => deleteTodo(index)}>
                    x
                  </span>
                </td>
              </tr>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </>
  );
}
