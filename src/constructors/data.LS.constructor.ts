import { LoginDataUserDto, UpdateDataUserDto } from "../models/data-user.dto";
import * as Yup from "yup";

import { Data } from "../models/data.model";
import { Task } from "./task.constructor";
import { AnyObject } from "yup/lib/types";

class DataLS {
	constructor (
		public name: string,
	){}

	public getData = (): Data[] => {
		const data: string | null = localStorage.getItem(this.name);

		if (data) {
			const dataParsed: Data[] = JSON.parse(data);
			return dataParsed;
		}
		return [];
	}

	public getUserTasks = (): Task[] => {
		const data: Data[] = this.getData();

		const dataUser: Data | undefined = data.find(item => {
			return item.logged === true;
		})
		if(dataUser) {
			return dataUser.data;
		}
		return []
	}

	public isPasswordCorrect = (password: string | undefined, context: Yup.TestContext<AnyObject>): boolean => {
		const data: Data[] = this.getData();

		const user: Data | undefined= data.find(item => {
			return item.user.email === context.parent.email;
		})

		if (user?.user.password === password) {

			return true;
		}

		return false;
	}

	public updateUserTasks = (tasks: Task[]): void => {
		const data: Data[] = this.getData();
		const dataUpdated: Data[] = data.map(item => {
			if (item.logged) {
				return {
					user: item.user,
					logged: item.logged,
					data: tasks,
				}
			}
			return item;
		})

		this.addData(dataUpdated);
	}

	//Returns an array which has data from the user.
	public getItems = (param: string): (string | number)[] => {
		const data: Data[] = this.getData();

		const items = data.map(item => {
			return item.user[param as keyof typeof item.user];
		})

		return items;
	}

	//Add a new user.
	public addData = (newData: Data[] | Data): void => {
		const data: any[] = this.getData();
		data.push(newData);

		const dataFlated: Data[] = data.flat();
		const dataStringified: string = JSON.stringify(dataFlated);

		localStorage.setItem(this.name, dataStringified);
	}

	//Delete a user.
	public deleteUser = (id: number): void => {
		const data: Data[] = this.getData();
		const dataFiltered: Data[] = data.filter(item => item.user.id !== id);

		this.addData(dataFiltered);
	}

	// Will update the email, username, name or password.
	public updateUser = (id: number, changes: UpdateDataUserDto): void => {
		const data: Data[] = this.getData();
		const dataUpdated: Data[] = data.map(item => {
			if (item.user.id === id) {
				return {

					user: {
						...item.user,
						...changes,
					},
					logged: item.logged,
					data: item.data,
				}
			}
			return item;
		});

		this.addData(dataUpdated);
	}

	public isLogged = (): boolean => {
		const data: Data[] = this.getData();

		const isLogged: boolean = data.some(item => {
			return item.logged === true;
		})
		return isLogged;
	}

	public login = (values: LoginDataUserDto): void => {
		const data: Data[] = this.getData();

		const dataUpdated: Data[] = data.map(item => {
			if (item.user.email === values.email) {
				return {
					user: {
						...item.user,
					},
					logged: true,
					data: item.data,
				}
			}
			return item;
		});

		this.addData(dataUpdated);
	}

	public logout = (): void => {
		const data: Data[] = this.getData();

		const dataUpdated: Data[] = data.map(item => {
			if (item.logged === true) {
				return {
					user: {
						...item.user,
					},
					logged: false,
					data: item.data,
				}
			}
			return item;
		});
		this.addData(dataUpdated);
	}

}

export { DataLS };
