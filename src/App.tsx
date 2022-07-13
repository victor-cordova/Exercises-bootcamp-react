import React, { useRef } from "react";
import { TaskListComponent } from "./components/container/taskList";
import { Greetings } from "./components/pure/greetings";
import { Example1 } from "./hooks/example1";
import { Example2 } from "./hooks/example2";

const App = () => {

    return (
        // <Greetings name="Victor" newAge={21}/>
				<React.Fragment>
					<TaskListComponent/>
					<Example1/>
					<Example2/>
					<Greetings name="victor" newAge={21}/>
					{/* <TextInputWithFocusButton/> */}
				</React.Fragment>

    )
}
// export const numero = 5;

export {App}
