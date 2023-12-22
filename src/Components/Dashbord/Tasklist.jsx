import { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import ListTask from "./ListTask";
import UseAxiospublic from "../hooks/Useaxiospublic";

const Tasklist = () => {
    const axiospublic = UseAxiospublic();
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        axiospublic.get('/task')
            .then(res => {
                setTasks(res.data)
            })
    }, [axiospublic])

    return (
        <div className=" flex flex-col items-center p-4 gap-5">
            <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
            <ListTask tasks={tasks} setTasks={setTasks}></ListTask>
        </div>
    );
};

export default Tasklist;