
import React from "react";


function Form({setInputText ,todos ,setTodos,inputText}) {
    function InputTesxtHandelr(e){
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    function submitTodoHundler(e) {
        e.preventDefault();
        setTodos([
            ...todos,{text: inputText ,completed: false ,id: Math.random()*1000}
        ]);
        setInputText("");


    };
    return(
        <form>
        <input value={inputText} onChange={InputTesxtHandelr} type="text" className="todo-input" />
        <button onClick={submitTodoHundler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      
    );
}

export default Form;