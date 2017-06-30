export const addTodo = (todos, newTodo) => [...todos, newTodo]
export const generatedId = () => Math.floor(Math.random()*100000)