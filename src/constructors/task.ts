enum LEVELS {
    normal = "normal",
    urgent = "urgent",
    blocking = "blocking",
}

class Task {
    constructor (
        public name: string,
        public description: string,
        public completed: boolean = false,
        public level: LEVELS, //With it can be know if it's urgent or not.
    ){}
    
}

export { Task, LEVELS };