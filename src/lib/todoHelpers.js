export const addTodo = (todos, newTodo) => [...todos, newTodo]

export const generatedId = () => Math.floor(Math.random()*100000)

export const findById = (id, todos) => todos.find(item => item.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const updateTodo = (list, updatedTodo) => {
    const updatedIndex = list.findIndex(item => item.id === updatedTodo.id);
    return [
        ...list.slice(0, updatedIndex),
        updatedTodo,
        ...list.slice(updatedIndex+1)
    ]
}

export const removeTodo = (list, id) => {
    const removedIndex = list.findIndex(item => item.id === id);
    return [
        ...list.slice(0, removedIndex),
        ...list.slice(removedIndex+1)
    ]
}