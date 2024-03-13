function NoteItem({title, content, id, onDelete, onEdit}) {
  const handleDelete = (id) =>  {
    const konfirm = confirm("Apakah anda yakin ingin menghapusnya")
    if(konfirm){
      onDelete(id)
      alert("Berhasil Menghapus")
    }
  }
  // <h1>Ini Tampilan Item</h1>
  return (

    <div className="notes-container border-t-2 border-blue-300 m-10 flex flex-wrap">
      <div className="note bg-white mt-5 w-[300px] p-4 py-10 relative">
        <button onClick={() => handleDelete(id)} className='delete-note absolute right-2 top-0 font-bold text-2x1 text-red-500 '>x</button>
        <h1 className='font-bold text-1x1 pb-2'> </h1>
        <p className="font-bold">{title}</p>
        <p> {content} </p>
        <button onClick={() => onEdit()} type='submit' className='bg-blue-500 px-2 w-20 text-white mt-4' >Edit</button>
      </div>
    </div>
  )
}

export default NoteItem;