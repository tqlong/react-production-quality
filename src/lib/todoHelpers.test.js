import {addTodo, findById, toggleTodo, updateTodo, removeTodo} from './todoHelpers';

test('addTodo should add the passed todo to the list', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
    ];
    const newTodo = {id: 3, name: 'three', isComplete: false};
    const expected = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ];
    const result = addTodo(startTodos, newTodo);
    expect(result).toEqual(expected);
})

test('addTodo should not mutate todo array', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
    ];
    const newTodo = {id: 3, name: 'three', isComplete: false};
    const expected = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ];
    const result = addTodo(startTodos, newTodo);
    expect(result).not.toBe(startTodos);
})

test('findById should return the expected todo', () => {
    const todos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ];
    const expected = {id: 2, name: 'two', isComplete: false};
    const result = findById(2, todos);
    expect(result).toEqual(expected);
})

test('toggleTodo should toggle the isComplete prop', () => {
    const todo1 = {id: 1, name: 'one', isComplete: false};
    const todo2 = {id: 2, name: 'two', isComplete: true};
    const expected1 = {id: 1, name: 'one', isComplete: true};
    const expected2 = {id: 2, name: 'two', isComplete: false};
    expect(toggleTodo(todo1)).toEqual(expected1);
    expect(toggleTodo(todo2)).toEqual(expected2);
})

test('toggleTodo should not mutate current todo', () => {
    const todo = {id: 1, name: 'one', isComplete: false};
    expect(toggleTodo(todo)).not.toBe(todo);
})

test('updateTodo should update the correct todo', () => {
    const todos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ];
    const updatedTodo = {id: 2, name: 'two', isComplete: true};
    const expected = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: true},
        {id: 3, name: 'three', isComplete: false}
    ];
    const result = updateTodo(todos, updatedTodo);
    expect(result).toEqual(expected);
})

test('updateTodo should not mutate the current', () => {
    const todos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ];
    const updatedTodo = {id: 2, name: 'two', isComplete: true};
    const expected = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: true},
        {id: 3, name: 'three', isComplete: false}
    ];
    const result = updateTodo(todos, updatedTodo);
    expect(result).not.toBe(todos);
})

test('removeTodo should remove the correct todo', () => {
    const todos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ];
    const targetId = 2;
    const expected = [
        {id: 1, name: 'one', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ];
    const result = removeTodo(todos, targetId);
    expect(result).toEqual(expected);
})

test('removeTodo should not mutate the current todos', () => {
    const todos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ];
    const targetId = 2;
    const expected = [
        {id: 1, name: 'one', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ];
    const result = removeTodo(todos, 2);
    expect(result).not.toBe(todos);
})