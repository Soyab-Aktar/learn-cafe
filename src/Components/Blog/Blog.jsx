import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleAddBookmark}) => {
    const {title,thumbnail,hashtags,photo,name,releaseDate,minutesToRead} = blog;
    return (
        <div className='mb-4 border-2 border-black p-2 rounded-md'>
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
            {
                hashtags.map((tag,idx)=><span key={idx} className='mx-1 cursor-pointer'>{tag}</span>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func
}
export default Blog;