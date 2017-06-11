class Todo {
    constructor(
        public id: number,
        public title: string,
        public createdDate: Date = new Date(),
        public complete: boolean = false
    ) { }
}

export { Todo }
