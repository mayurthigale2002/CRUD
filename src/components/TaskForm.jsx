import React, { useState } from "react";

const TaskForm = () => {
  const [data, setData] = useState({
    taskname: "",
    taskdescription: "",
    taskstatus: "",
    priority: "",
  });

  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const subHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form action=" " onSubmit={(e) => subHandler()}></form>
      <label htmlFor="">Task Name:</label>
      <input
        type="text"
        id="taskname"
        name="taskname"
        placeholder="Enter Your Task Name"
        required
        value={data.taskname}
        onChange={(e) => dataHandler()}
      />
      <br></br>

      <label htmlFor="">Task Description</label>
      <input
        type="text"
        id="taskdescription"
        name="taskdescription"
        placeholder="Enter Your Task Description"
        required
        value={data.taskdescription}
        onChange={(e) => dataHandler()}
      />
      <br></br>

      <label htmlFor="">Task Status</label>
      <select id="taskstatus" name="taskstatus" required>
        <option value="">Pending</option>
        <option value="">In Progress</option>
        <option value="">Completed</option>
      </select>
      <br></br>

      <label htmlFor="">Priority</label>
      <select id="priority" name="priority" required>
        <option value="">Low</option>
        <option value="">Medium</option>
        <option value="">High</option>
      </select>
      <br></br>

      <button onSubmit={(e) => subHandler()}>Submit Task</button>
    </>
  );
};

export default TaskForm;
