import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from '../Components/Spinner'
import axios from 'axios'
import { useNavigate ,useParams} from 'react-router-dom'
import BackButton from '../Components/BackButton'


const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {id}=useParams()
  const handleDeleteBook=()=>{
    setLoading(true)
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false)
      navigate('/')
    })
    .catch((console.error()))
  }
  return (
    <div className='p-4'>
      <BackButton/>
      {loading?<Spinner/>:''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2x1'> Are You Sure You want to Delete this book</h3>
        <button
        className='p-4 bg-red-600 text-white m-8 w-full'
        onClick={handleDeleteBook}
        >
          Yes Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteBook