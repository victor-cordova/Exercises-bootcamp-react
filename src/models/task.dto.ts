import { Task } from "../constructors/task.constructor";

interface CreateTaskDto extends Omit<Task, "id" | "completed"> {}

export { CreateTaskDto };
