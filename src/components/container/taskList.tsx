// import * as React from 'react';

import { useEffect, useState } from "react";
import { Task } from "../../constructors/task.constructor";
import { LEVELS } from "../../models/levels.model";
import { ITask } from "../../models/task.model";
import { TaskComponent } from "../pure/task";

// interface Props {
//     children: JSX.Element
// }

const defaultTaks: ITask[] = [
    new Task("Example1", "Default description1", false, LEVELS.normal),
    new Task("Example2", "Default description2", true, LEVELS.blocking),
    new Task("Example3", "Default description3", false, LEVELS.normal),
    new Task("Example4", "Default description4", false, LEVELS.urgent),
    new Task("Example5", "Default description5", true, LEVELS.blocking),
    new Task("Example6", "Default description6", false, LEVELS.blocking),
];
const defaultLoading: boolean = true;

const TaskListComponent = () => {

    //Component's state
    const [task, setTasks] = useState<ITask[]>(defaultTaks);
    const [loading, setLoading] = useState<boolean>(defaultLoading);

    //Component's lifecycle
    useEffect(() => {
        console.log("Component has been updated")
        setLoading(!loading);
        return () => {
            console.log("The component will be unmounted.")
        }
    }, [task]);

    const changeCompleted = (id: string) => {
        console.log("TODO: Cambiar el estado de una tarea.")
    }

    return (
        <div>
            <h2>
                Your tasks:
            </h2>
            {defaultTaks.map((defaultTask, index) => (
                <TaskComponent task={defaultTask} key={index}/>
            ))}
        </div>
    )
};

export { TaskListComponent };
