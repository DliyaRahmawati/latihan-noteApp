import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NoteItem from './NoteItem';
import { nanoid } from 'nanoid';
import FormTambah from '../FormTambah';
import FormEdit from './FormEdit';
import axios from 'axios';
// import { useState } from 'react'

function Note() {
  // const [count, setCount] = useState(0)
  const [notes, setNotes] = useState([])
  const [currentNoteId, setCurrentNoteId] = useState(null)
  // const [isEditKlik, setIsEditKlik] = useState(false)
  
// console.log(currentNoteId)
  const handleFetchData = async () => {
    const apiFetch = await tampilkan();
    setNotes(apiFetch.data.data ?? null)
  }

  const handleAddData = async (title,content) => {
    await addNote(title,content)
    handleFetchData()
  }

  const handleUpdate = async (id,title,content,writer) => {
    await editNote(id,title,content,writer)
    handleFetchData()
  }

  const handleDelete = async (id) => {
    await deleteNote(id);
    handleFetchData()
  }

  const Edit = (id) => {
    setCurrentNoteId(id)
  }

  const cancelEdit = () => {
    setCurrentNoteId(null);
  }

useEffect(() => {
  handleFetchData()
},[])
// const tampil = async ()=> {
//     await axios.get('http://192.168.1.46:8000/api/v1/notes')
//     .then((response)=> {
//       console.log(response.data)
//       setNotes(response.data)
//     })
//   }

//   const addNote = async (title, content) => {
//     // console.log('Akan tambah note')
//     // setNotes(oldNote => {
//       const noteBaru = {
//         title: title,
//         content: content,
//         writer: 1
//       }

//       // return [...oldNote, noteBaru]
//        await axios.post('http://192.168.1.46:8000/api/v1/notes', noteBaru)
//         .then((response)=> {
//           console.log(response.data)
//           tampil()
//           setNotes((oldNotes) => [...oldNotes,response.data]);
//         })
//         .catch((error)=>{
//           console.error('Error adding note', error);
//         });
    
//   };

//   const deleteNote = async (id) => {
//     const deletes = await axios.delete(`http://192.168.1.46:8000/api/v1/notes/${id}`)
//     .then((response)=> {
//       // console.log(response.data)
//       // tampil()
//       // setNotes((oldNotes) => [...oldNotes, response.data]);
//       return response
//     })
//     .catch((error) => {
//       // console.error('Error adding note:', error);
//       return error
//     });
//     alert(deletes.data)
//     tampil()
//   }

//   const editNote = async (id, title, content) => {
//     const edits = await axios.put(`http://192.168.1.46:8000/api/v1/notes/${id}`, {title, content})
//     .then((response)=>{
//       return response
//     })
//     .catch((err)=>{
//       return err
//     })
//     // setNotes((oldNotes) =>
//     // oldNotes.map((note) => (note.id === id ? {...note, title, content}: note)))
//     // setCurrentNoteId(null);
//     setIsEditKlik(null)
//     alert(edits.data)
//     tampil()
//   };

//   const cancel = ()=> {
//     setIsEditKlik(null)
//   }


  return (
    <>
      <div className="App bg-blue-100 ">
        <h1 onClick={() => setCount((count) => count + 5)} className='text-center text-5xl p-5'>Notes {count}</h1>
          {currentNoteId ? 
          < FormEdit onEdit={handleUpdate} targetValue={notes !== null ? notes.filter(e => e.id === currentNoteId)[0] : null} notes={notes} oncancel={cancelEdit} />
          : <FormTambah onAdd={handleAddData} oncancel={cancelEdit}/>}
        <div className='flex flex-row flex-wrap'>
        {notes !== null ? notes.map((note) => (
          <NoteItem 
          key={note.id} 
          title={note.title} 
          id={note.id} 
          content={note.content} 
          onDelete={handleDelete} 
          onEdit={Edit} />
        )) : null }
        </div>
      </div>
    </>
  )
}

export default Note


// return (
//   <>
//     <div>
//       <a href="https://vitejs.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
//   </>
// )



