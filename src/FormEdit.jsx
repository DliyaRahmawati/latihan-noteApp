import { useEffect, useRef, useState } from "react";

function FormEdit({onEdit, oncancel, notes, targetValue}){
    const [title,setTitle] = useState(targetValue !== null ? targetValue.title: null)
    const [note,setNotes] = useState(targetValue !== null  ? targetValue.content : null)
    const [writer,setWriter] = useState(targetValue !== null ? targetValue.writer : null);

    useEffect(() => {
        const noteToEdit = notes !== null ? notes.find((note) => note.id === targetValue.id) : null;
        if (noteToEdit !== null) {
            setTitle(noteToEdit.title)
            setNotes(noteToEdit.content)
            setWriter(noteToEdit.writer)
        }else{
          setTitle("")
          setNotes("")
          setWriter("")
          oncancel()
        }
    }, [targetValue]);

    const handleEdit = () => {
      const konfirm = confirm("Apakah Anda Yakin?")
      if(konfirm){
        onEdit(targetValue.id, title, note, writer);
        setTitle("")
        setNotes("")
      }
        // const title = titleInput.current.value;
        // const content = contentInput.current.value;
        // onEdit(currentNoteId, title,content);

        // titleInput.current.value = "";
        // contentInput.current.value = "";
    };
    
    // const cancelHandle = ()=> {
    //     titleInput.current.value = "";
    //     contentInput.current.value = "";
    //     oncancel()
    // }
    return(
        <div className="container">
          <div className='flex flex-col'>
            <input
                    value={writer}
                    type="hidden"
                    className='input'
            />

            <input 
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text" 
            placeholder='title' 
            name='title' 
            // className='border-2 border-blue-200 p-2 mb-2' 
            className='input'
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
              className='textarea'>
            </textarea>

            <input type="text" />
            {/* <div className="flex justify-between"> */}

            <button 
                onClick={handleEdit} 
                type='submit' className='bg-blue-500 px-5 w-40 py-3 text-white mt-4' >
                Edit Note
            </button>
            <button 
                onClick={() => oncancel()} 
                type='submit' className='bg-blue-700 w-40 px-5 py-3 text-white mt-4' >
                Cancel
            </button>
            
          </div>
        </div>
    );
}

export default FormEdit;