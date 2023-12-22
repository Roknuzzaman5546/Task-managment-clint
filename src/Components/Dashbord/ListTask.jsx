import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import toast from "react-hot-toast";
import { FaMinus } from "react-icons/fa6";


const ListTask = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([])
    const [ongoing, setOngoing] = useState([])
    const [complited, setcomplited] = useState([])

    useEffect(() => {
        const ftodos = tasks.filter(task => task.status === 'todos')
        const fongoing = tasks.filter(task => task.status === 'ongoing')
        const fcomplited = tasks.filter(task => task.status === 'complited')

        setTodos(ftodos)
        setOngoing(fongoing)
        setcomplited(fcomplited)
    }, [tasks])

    const stauses = ["todos", "ongoing", "complited"]

    return (
        <div className=" flex gap-20">
            {stauses.map((staus, index) => <Section
                key={index}
                status={staus}
                tasks={tasks}
                setTasks={setTasks}
                todos={todos}
                ongoing={ongoing}
                complited={complited}
            ></Section>)}
        </div>
    );
};

export default ListTask;

const Section = ({ status, tasks, setTasks, todos, ongoing, complited }) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    let text = "todo"
    let bg = "bg-slate-500"
    let tasksToMap = todos

    if (status === "ongoing") {
        text = "Ongoing",
            bg = "bg-purple-500"
        tasksToMap = ongoing
    }

    if (status === "complited") {
        text = "Copmplited",
            bg = "bg-green-500",
            tasksToMap = complited
    }

    const addItemToSection = (id) => {
        console.log(id)
        setTasks((prev) => {
            const mTasks = prev.map(t => {
                if (t._id == id) {
                    return { ...t, status: status }
                }
                let taskUpdate = {
                    status
                }
                fetch(`http://localhost:5000/task/${id}`, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(taskUpdate)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        toast.success("status is changed")
                    })
                return t;
            })
            console.log(mTasks)
            return mTasks;
        })
    }
    return <div ref={drop} className={`w-64 ${isOver ? "bg-slate-200" : ""} `}>
        <Header text={text} bg={bg} count={tasksToMap.length}></Header>
        {tasksToMap.length > 0 && tasksToMap.map((task) => (
            <Task key={task._id} task={task} tasks={tasks} setTasks={setTasks}></Task>
        ))}
    </div>
}

const Header = ({ bg, text, count }) => {
    return (
        <div className={`${bg} uppercase text-white p-4 rounded-md flex items-center ml-5`}>
            {text}
            <div className=" text-black ml-3 bg-white rounded-full w-6 h-6 flex items-center justify-center">
                {count}
            </div>
        </div>
    )
}

const Task = ({ task, tasks, setTasks }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const handleremove = (id) => {
        console.log(id)
        const ftasks = tasks.filter(task => task._id !== id)
        setTasks(ftasks)
        fetch(`http://localhost:5000/task/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("task is removed")
            })
    }

    return (
        <div
            ref={drag}
            className=" flex items-center justify-center">
            <div className=" flex items-center justify-between bg-slate-200 shadow-md mt-4 cursor-grab p-4 rounded-md w-40">
                <h2>
                    {task.name}
                </h2>
                <button className=" ml-3 bg-slate-400 w-6 flex items-center justify-center h-6 rounded-full" onClick={() => handleremove(task._id)}><FaMinus></FaMinus></button>
            </div>
        </div>
    )
}