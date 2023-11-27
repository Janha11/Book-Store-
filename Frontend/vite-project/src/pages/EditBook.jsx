import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from '../Components/Spinner'
import axios from 'axios'
import { useNavigate ,useParams} from 'react-router-dom'
import BackButton from '../Components/BackButton'


const EditBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, SetPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {id}=useParams()

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response)=>{
      setTitle(response.data.title)
      setAuthor(response.data.author)
      SetPublishYear(response.data.publishYear)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error)
    })

  },[])

  const handleSaveBook = ()=>{
    const data = {
      title,
      author,
      publishYear,
    }

    setLoading(true)
    axios
      .put(`http://localhost:5555/books/${id}`, data)
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
      <h1 className='text-3xl my-4'></h1>

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

export default EditBook