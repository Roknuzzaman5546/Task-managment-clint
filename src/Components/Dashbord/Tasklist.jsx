import { useState } from "react";
import CreateTask from "./CreateTask";
import ListTask from "./ListTask";

const Tasklist = () => {
    const [tasks, setTasks] = useState([]);
    console.log(tasks)
    return (
        <div className=" flex flex-col items-center p-4 gap-5">
            <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
            <ListTask tasks={tasks} setTasks={setTasks}></ListTask>
        </div>
    );
};

export default Tasklist;