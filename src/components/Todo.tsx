import { useState, useEffect, useMemo, useCallback } from "react";

// Components
import List, { Todo } from '../Todo/List';

const initialTodos = [
  { id: 1, task: 'Go shopping' },
  { id: 2, task: 'Pay the electricity bill' }
];

function App() {
  const [todoList, setTodoList] = useState(initialTodos);
  const [task, setTask] = useState('');
  const [term, setTerm] = useState('');

  useEffect(() => {
    // console.log('Rendering <App />')
  });

  const handleCreate = () => {
    const newTodo = {
      id: Date.now(),
      task
    };
    // Pushing the new todo to the list
    setTodoList([...todoList, newTodo]);
    // Resetting input value
    setTask('');
  };

  const handleSearch = () => {
    setTerm(task)
  };

  const handleDelete = useCallback((taskId: number) => {
    const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId)
    setTodoList(newTodoList)
  }, [todoList])

  const filteredTodoList = useMemo(() => todoList.filter((todo: Todo) => {
    // console.log('Filtering...');
    return todo.task.toLowerCase().includes(term.toLocaleLowerCase())
  }), [term, todoList]);

  const printTodoList = useCallback(() => {
    console.log('Changing todolist', todoList);
  }, [todoList]);

  useEffect(() => {
    printTodoList()
  }, [todoList, printTodoList])

  return (
    <div>
      <input
        type='text'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>

      <List todoList={filteredTodoList} handleDelete={handleDelete} />
    </div>
  )
}

export default App;