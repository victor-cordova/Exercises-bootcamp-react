import { TaskListComponent } from "./components/container/taskList";
import { Greetings } from "./components/pure/greetings";


// export const App = () => <h1>Hello React!!!!</h1>;

const App = () => {
    console.log("hi2")
    return (
        // <Greetings name="Victor" newAge={21}/>
        <TaskListComponent/>
    )
}
// export const numero = 5;

export {App}