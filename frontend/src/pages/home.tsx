import TodoForm from "@/components/todo-form"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus } from "lucide-react"

interface Todo {
    id: string,
    text: string,
    completed: boolean,
    priority: "low" | "medium" | "high"
    status: "Not Started" | "In Progress" | "Completed"
    dueDate?: Date
    tags: string[]
}


const todos = [{
    id: "1",
    text: "Press ⌘K to open command palette",
    completed: false,
    priority: "high",
    status: "Not Started",
    dueDate: new Date(),
},
{
    id: "2",
    text: "Try adding a new todo",
    completed: false,
    priority: "medium",
    status: "Not Started",
    dueDate: new Date(),
},]

const TodoApp = () => {


    const handleSubmit = () => { }

    return (
        <div className="min-h-screen bg-black p-4">
            <div className="mx-auto max-w-2xl">
                <h1 className="mb-8 text-center text-4xl font-bold text-emerald-400">Tasks</h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="mb-4 w-full border-emerald-700 bg-emerald-900/20 text-emerald-400 hover:bg-emerald-800/30 ">
                            <Plus className="mr-2 h-4 w-4" />
                            Add New Task
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-black border-emerald-800/30 w-[95%] md:w-[75%] lg:w-[50%] max-w-4xl">
                        <DialogHeader className="w-full space-y-4">
                            <DialogTitle className="text-emerald-400">Add New Task</DialogTitle>
                            <TodoForm onSubmit={handleSubmit} />
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div >
    )
}

export default TodoApp