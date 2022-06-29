// import * as React from 'react';

import { Task, LEVELS } from "../../constructors/task";
import { TaskComponent } from "../pure/task";

// interface Props {
//     children: JSX.Element
// }

const TaskListComponent = () => {
    
    const defaultTaks = [
        new Task("Example1", "Default description1", false, LEVELS.normal),
        new Task("Example2", "Default description2", true, LEVELS.blocking),
        new Task("Example3", "Default description3", false, LEVELS.normal),
        new Task("Example4", "Default description4", false, LEVELS.urgent),
        new Task("Example5", "Default description5", true, LEVELS.blocking),
        new Task("Example6", "Default description6", false, LEVELS.blocking),
    ];

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