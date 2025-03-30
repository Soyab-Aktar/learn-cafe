import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([]);

  const handleAddBookmark = blog => {
    console.log(blog);
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  return (
    <div className='mx-auto max-w-screen-xl'>
      <Header></Header>
      <div className='md:flex gap-2'>
      <Blogs handleAddBookmark={handleAddBookmark}  ></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
