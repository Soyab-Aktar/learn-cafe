import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex mx-auto max-w-screen-xl'>
      <Blogs  ></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
