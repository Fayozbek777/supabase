import { useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [task, setTask] = useState('')

  const addTask = async () => {
    const { error } = await supabase
      .from('tasks')
      .insert([{ title: task }])
    
    if (error) alert(error.message)
    else {
      alert('Задача добавлена!')
      setTask('')
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Tasks</h1>
      <input 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Название задачи" 
      />
      <button onClick={addTask}>Добавить</button>
    </div>
  )
}

export default App
