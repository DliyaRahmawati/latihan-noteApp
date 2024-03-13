import { useRef, useState } from "react";

function FormTambah({onAdd}){
    const [title, setTitle] = useState("")
    const [note, setNotes] = useState("")

    const handleSubmit = () => {
      onAdd(title, note);
      setTitle("")
      setNotes("")
        // const title = titleInput.current.value 
        // const content = contentInput.current.value
        // onAdd(title,content)

        // titleInput.current.value = "",
        // contentInput.current.value =""
    };

    return(
        // <div className="createNote w-[400px] mx-auto">
        <div className="container" >
          <div className='flex flex-col'>
            <input 
            value={title} 
            onChange={e => setTitle(e.target.value)}
            type="text" 
            placeholder='title' 
            name='title' 
            // className='border-2 border-blue-200 p-2 mb-2' 
            className="input"
            />

            <textarea
              value={note}
              onChange={e => setNotes(e.target.value)}
              name="note"
              id=""
              cols="30"
              rows="5"
              placeholder='note'
              // className='border-2 border-blue-200 p-2'
              className="textarea">
            </textarea>

            <button onClick={() => handleSubmit()} type='submit' className='bg-blue-500 px-5 py-3 text-white mt-4' >Add Note</button>
          </div>
        </div>
    )
}

export default FormTambah;