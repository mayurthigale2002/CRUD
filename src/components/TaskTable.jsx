import React, { useEffect, useState } from 'react'

const TaskTable = () => {

    const [data,setData]=useState()

    useEffect(() => {
         const fetchTasks = async () => {
            try{
                const response = await axios.get('http://localhost:3000/tasks');
                setData(response.data);

            }catch(err){
                console.error('Error fetching tasks:', err);
            }
            };
            fetchTasks();
        }, []);

      const deleteTask = async (id) => {
        try {
          await axios.delete(`${'http://localhost:3000/tasks'}/${id}`);
          fetchTasks();
        } catch (error) {
          console.error("Error deleting task", error);
        }
      };

      const editTask = (task) => {
        setTask(task);
        setEditId(task.id);
      };
    } catch (error) {
      console.error("Error deleting task", error);
    }
  


  return (
    <>
    
    
        <div className="container">
            <div className="table">
                <h1>Table Data</h1>
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Task Description</th>
                        <th>Task Status</th>
                        <th>Priority</th>
                        <th>dueDate</th>
                    </tr>
                    </thead>
                    <tbody>
                        {task.map((Task) => (
                        <tr>
                            <td>{Task.id}</td>
                            <td>{Task.taskname}</td>
                            <td>{Task.taskdescription}</td>
                            <td>{Task.taskstatus}</td>
                            <td>{Task.priority}</td>
                        </tr>
                        ))}
                    </tbody>
            </div>
        </div>

    </>
  )

export default TaskTable
