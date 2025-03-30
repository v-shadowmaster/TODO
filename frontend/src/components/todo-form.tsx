import React, { useState } from 'react'
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from './ui/calendar';
import { cn } from '@/lib/utils';

interface TodoFormProps {
  onSubmit: (todo: {
    text: string
    priority: "low" | "medium" | "high"
    status: "Not Started" | "In Progress" | "Completed"
    dueDate?: Date
    tags: string[]
  }) => void
}


const TodoForm = ({onSubmit}:TodoFormProps) => {
    const [text,setText] = useState("");
    const [priority , setPriority] = useState<"low" | "medium" | "high">("low");
    const [status, setStatus] = useState<"Not Started" | "In Progress" | "Completed">("Not Started");
    const [dueDate, setDueDate] = useState<Date | undefined>(undefined)

    const handleSubmit = () => {
console.log(text , " ", priority );
    }

  return (
   <form onSubmit={handleSubmit} className='space-y-4 w-full max-w-full'>
 <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Task description..."
        className="border-emerald-800/30 bg-black text-emerald-400 placeholder-emerald-700/50 focus-visible:ring-emerald-700/30"
      />
      <div className="flex flex-col sm:flex-row gap-2 flex-wrap">
        <Select value={priority} onValueChange={(value: "low" | "medium" | "high") => setPriority(value)}>
        <SelectTrigger className="w-full sm:w-[160px] border-emerald-800/30 bg-black text-emerald-400">
        <SelectValue placeholder="Select priority" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
          </SelectContent>
        </Select>
        <Select value={status} onValueChange={(value: "Not Started" | "In Progress" | "Completed") => setStatus(value)}>
          <SelectTrigger className="w-full sm:w-[160px] border-emerald-800/30 bg-black text-emerald-400">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Not Started">Not Started</SelectItem>
            <SelectItem value="In Progress">In Progress</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
          </SelectContent>
        </Select>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn("w-full sm:w-[160px] justify-start text-left font-normal", !dueDate && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Pick a due date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0" align="start">
            <Calendar mode="single" selected={dueDate} onSelect={setDueDate} initialFocus />
          </PopoverContent>
        </Popover>

      </div>

      <Button type="submit" className="w-full bg-emerald-700 text-black hover:bg-emerald-600">
      Add Task
      </Button>
   </form>
  )
}

export default TodoForm