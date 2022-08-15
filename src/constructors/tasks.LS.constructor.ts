import { Task } from "./task.constructor";

class TasksLS {
	constructor (
		private name: string,
	){}

	public getData = (): Task[] => {
		const data: string | null = localStorage.getItem(this.name);

		if (data) {
			const dataParsed: Task[] = JSON.parse(data);
			return dataParsed;
		}
		return [];
	}

	public getTask = (id: number): Task | undefined => {
		const data: Task[] = this.getData();
		const found: Task | undefined = data.find(item => item.id === id);

		return found;
	}

	//Add new task or tasks into LS.
	public addData = (newData: Task[] | Task): void => {
		const data: any[] = this.getData();
		data.push(newData);

		const dataFlated: Task[] = data.flat();
		const dataStringified: string = JSON.stringify(dataFlated);

		localStorage.setItem(this.name, dataStringified);
	}

	public deleteOneTask = (id: number): void => {
		const data: Task[] = this.getData();
		const dataFiltered: Task[] = data.filter(item => item.id !== id);

		this.addData(dataFiltered);
	}

	// This method will change the parameter completed of the task.
	public updateData = (id: number): void => {
		const data: Task[] = this.getData();
		const dataUpdated: Task[] = data.map(item => {
			if (item.id === id) {
				return new Task(item.name, item.description, item.id, item.priority, !item.completed);
			}
			return item;
		});

		this.addData(dataUpdated);
	}

}

export { TasksLS };
