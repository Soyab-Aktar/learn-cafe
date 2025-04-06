import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleAddBookmark,handleMarkAsRead}) => {
    const {title,thumbnail,hashtags,photo,name,releaseDate,minutesToRead,id} = blog;
    return (
        <div className='mb-4 border-2 border-black p-2 rounded-md flex flex-col gap-1'>
            <img className='rounded-md' src={thumbnail} alt="" srcset="" />
            <div>
                <div className='flex justify-between py-4'>
                    <div className='flex items-center gap-5'>
                    <img className='w-14 h-14 border-gray-500 border-2 rounded-full' src={photo} />
                    <div>
                        <h4 className='font-bold text-2xl'>{name}</h4>
                        <p className='font-semibold text-gray-400'>{releaseDate}</p>
                    </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <p className='font-semibold text-gray-500'>{minutesToRead} Minutes</p>
                        <button onClick={()=>handleAddBookmark(blog)} className='text-xl'><FaBookmark /></button>

                    </div>
                </div>
            </div>
            <h1 className='text-4xl font-semibold mb-4'>{title}</h1>
            <div>
            {
                hashtags.map((tag,idx)=><span key={idx} className='mx-1 cursor-pointer'>{tag}</span>)
            }
            </div>
            <button onClick={()=> handleMarkAsRead(minutesToRead,id)} className='bg-lime-100 border-2 border-black rounded-md font-bold text-lime-800 hover:bg-lime-200'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;