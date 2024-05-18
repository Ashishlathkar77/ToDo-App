import React, { useState } from 'react';
import './Todo.css'; // Import custom CSS for Todo component

function Todo() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState('');
  const [newTask, setNewTask] = useState('');
  const [notes, setNotes] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() === '' || selectedTodo.trim() === '') return;
    const updatedTodos = [...todos, { todo: selectedTodo, task: newTask, done: false, date: '', notes: notes }];
    setTodos(updatedTodos);
    setNewTask('');
    setNotes('');
  };

  // Function to mark a task as done
  const handleDoneTask = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = true;
    updatedTodos[index].date = new Date().toLocaleDateString();
    setTodos(updatedTodos);
  };

  return (
    <div className='todo-app'>
      <h1 className="todo-heading">To-Do List</h1>
      <div className="todo-selector">
        <select
          value={selectedTodo}
          onChange={(e) => setSelectedTodo(e.target.value)}
        >
          <option value="">Select Todo Item</option>
          <option value="Michelin Eligibility">Michelin Eligibility</option>
          <option value="Michelin Census">Michelin Census</option>
          <option value="Michelin PAR">Michelin PAR</option>
          <option value="RGS Eligibility">RGS Eligibility</option>
          <option value="RGS PAR">RGS PAR</option>
          <option value="SRPMIC Eligibility">SRPMIC Eligibility</option>
          <option value="SRPMIC PAR">SRPMIC PAR</option>
          <option value="7-Eleven Eligibility">7-Eleven Eligibility</option>
          <option value="7-Eleven PAR">7-Eleven PAR</option>
          <option value="7-Eleven Claims">7-Eleven Claims</option>
          <option value="RML Eligibility">RML Eligibility</option>
          <option value="RML Claims">RML Claims</option>
          <option value="Linde Eligibility">Linde Eligibility</option>
          <option value="Linde PAR">Linde PAR</option>
          <option value="Linde Claims">Linde Claims</option>
          <option value="Berry Eligibility">Berry Eligibility</option>
          <option value="Berry PAR">Berry PAR</option>
          <option value="Pitney-Bowes Eligibility">Pitney-Bowes Eligibility</option>
          <option value="Pitney-Bowes Disability">Pitney-Bowes Disability</option>
          <option value="Pitney-Bowes PAR">Pitney-Bowes PAR</option>
          <option value="Resideo Eligibility">Resideo Eligibility</option>
          <option value="Resideo Disability">Resideo Disability</option>
          <option value="Resideo PAR">Resideo PAR</option>
          <option value="Pitney-Bowes Claims Abbet">Pitney-Bowes Claims Abbet</option>
          <option value="Pitney-Bowes Claims UMR">Pitney-Bowes Claims UMR</option>
          <option value="Resideo Claims">Resideo Claims</option>
          <option value="Linde 2nd Med">Linde 2nd Med</option>
          <option value="Michelin Everside Claims">Michelin Everside Claims</option>
          <option value="Avery-Dennison Eligibility">Avery-Dennison Eligibility</option>
          <option value="Cone Health Eligibility">Cone Health Eligibility</option>
          <option value="PBA834 Eligibility">PBA834 Eligibility</option>
          <option value="7-Eleven Waivers">7-Eleven Waivers</option>
          <option value="7-Eleven Surgery Plus">7-Eleven Surgery Plus</option>
          <option value="7-Eleven Regenex">7-Eleven Regenex</option>
          <option value="7-Eleven Accolade">7-Eleven Accolade</option>
          <option value="Michelin Waivers">Michelin Waivers</option>
          <option value="Pitney-Bowes Outcomes">Pitney-Bowes Outcomes</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Add Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="task-input"
      />
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="notes-input"
      />
      <button onClick={addTask} className="add-task-btn">Add Task</button>
      <div className="todo-container">
        {todos.map((todo, index) => (
          <div key={index} className={`todo-item ${todo.done ? 'done' : ''}`}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleDoneTask(index)}
              />
              <span className="todo-item-name">{todo.task}</span>
            </label>
            <span className="todo-item-date">{todo.done ? `Completed on: ${todo.date}` : ''}</span>
            <span className="todo-item-notes">{todo.notes}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
