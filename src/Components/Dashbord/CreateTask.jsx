import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

const CreateTask = ({ tasks, setTasks }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        const { name, description } = data;
        let alldata = {
            name: name,
            description: description,
            status: "todos"
        }
        setTasks((prev) => {
            const list = [...prev,  alldata]
            console.log(list)
            localStorage.setItem("tasks", JSON.stringify(list))
            return list;
        })
        toast.success("task creat succesfully")
        reset()
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <h1 className="text-5xl font-bold font-lobester text-orange-500">Creat our task</h1>
                    <div className="w-full">
                        <input type="text" {...register("name", { required: true })} name='name' placeholder="Your name" className="input my-2 input-bordered w-full" />
                        {errors.name && <span className=" text-red-500">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <textarea {...register("description", {
                            required: true
                        })} name="description" id="" placeholder="Task description" className=" rounded-md p-2 border-2">
                        </textarea>
                        {errors.description && <span className=" text-red-500">Task description is required</span>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-error">Creat</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;