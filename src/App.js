import { useState } from 'react';
import './App.css' ;
import Form from "./component/Form";
import TodoList from "./component/TodoList";
import Todo from './component/Todo';
function App() {
  const [inputText,setInputText] =useState("");
  const [todos,setTodos] =useState([]);
  return (
    <div className="App">
      <header align='center'>
      <h1 > Hello There  </h1>
      </header>
      <Form inputText={inputText} todos={todos}  setTodos={setTodos} setInputText={setInputText}/>
      <TodoList todos={todos}/>
      
    </div>
  );
}

export default App;
