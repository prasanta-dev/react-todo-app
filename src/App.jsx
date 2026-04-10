import { useEffect, useState } from 'react'
import './App.css'

import HeadSection from './components/HeadSection';
import LiveInput from './components/LiveInput';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';
import ClearAllBtn from './components/ClearAllBtn';

function App() {
  const [inputText, setInputText] = useState('');
  const [addText, setAddText] = useState(() => {
    const data = localStorage.getItem("todosData");
    return data ? JSON.parse(data) : [];
  }); // Task array
  
  useEffect(()=>{
    localStorage.setItem("todosData", JSON.stringify(addText))
  }, [addText]);
  
  // handel todo form
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!inputText) return;

    const newTask = {
      id: inputText,
      text: inputText,
      completed: false
    };
    const { id, text, completed } = newTask;
    const textMatched = addText.find((val) => val.text === text);
    if (textMatched) return;
    else {
      setAddText((prev) => [...prev, newTask])
    }
    setInputText("");
  }

  // handel task complete functionality
  const handelTick = (taskKey) => {
    const updatedTask = addText.map((taskObj) => {
      if (taskObj.text === taskKey) {
        return { ...taskObj, completed: !taskObj.completed }
      }
      else {
        return taskObj;
      }
    })

    setAddText(updatedTask);
  }

  // handel task delete functionality
  const handelDelete = (taskData) => {
    const deleteTask = addText.filter((obj) => obj.text !== taskData);
    setAddText(deleteTask);
  }

  // handel clearALl functionality
  const handelClearAll = () => {
    setAddText([])
  }


  return (
    <div className='flex flex-col items-center gap-2 w-1/2'>
      <HeadSection />
      <LiveInput inputData={inputText} />
      <TodoForm
        formSubmit={handelSubmit}
        inputData={inputText}
        setInputText={setInputText}
      />
      <TaskList
        addText={addText}
        handelTick={handelTick}
        handelDelete={handelDelete}
      />
      <ClearAllBtn handelClearAll={handelClearAll} />
    </div>
  )
}

export default App
