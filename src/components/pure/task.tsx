import { Task } from "../../constructors/task";

interface Props {
    task: Task,
}

const TaskComponent = ({task}: Props) => {
    return (
        <div>
            <h3>
                Name: {task.name}
            </h3>
            <p>
                Description: {task.description}
            </p>
            <h3>
                Level: {task.level}{/*By the name it can be known its urgency*/}
            </h3>
            <h3>
                This task is: {task.completed? "completed": "pending"}
            </h3>
        </div>
    );
};

export { TaskComponent };