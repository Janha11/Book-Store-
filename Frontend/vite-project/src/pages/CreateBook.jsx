import React from 'react'
import { useState } from 'react'
import Spinner from '../Components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BackButton from '../Components/BackButton'

const CreateBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, SetPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSaveBook = ()=>{
    const data = {
      title,
      author,
      publishYear,
    }

    setLoading(true)
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        alert('A Error Happend', error)
        console.log(error)
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      {
        loading ?
          <Spinner /> : ''
      }
      <div className='flex flex-col border-2 border-sky-400 rounded-2xl w-[700px] p-x4 mx-auto'>
        <div className='my-4 px-4'>
          <label className='text-xl mr-4 text-gray-500'> Title</label>
          <input
            text='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <div className='my-4 px-4'>
          <label className='text-xl mr-4 text-gray-500'> Author</label>
          <input
            text='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <div className='my-4 px-4'>
          <label className='text-xl mr-4 text-gray-500'> Publish Year</label>
          <input
            text='number'
            value={publishYear}
            onChange={(e) => SetPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-4' onClick={handleSaveBook}>
          Save
        </button>

      </div>
    </div>
  )
}

export default CreateBook