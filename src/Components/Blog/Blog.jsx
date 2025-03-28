import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title,thumbnail,hashtags,photo,name,releaseDate,minutesToRead} = blog;
    return (
        <div>
            <img src={thumbnail} alt="" srcset="" />
            <div>
                <div className='flex justify-between py-4'>
                    <div className='flex items-center gap-5'>
                    <img className='w-14 h-14 border-gray-500 border-2 rounded-full' src={photo} />
                    <div>
                        <h4 className='font-bold text-2xl'>{name}</h4>
                        <p className='font-semibold text-gray-400'>{releaseDate}</p>
                    </div>
                    </div>

                    <div>
                        <p className='font-semibold text-gray-500'>{minutesToRead} Minutes</p>

                    </div>
                </div>
            </div>
            <h1 className='text-4xl font-semibold'>{title}</h1>
            {
                hashtags.map((tag,idx)=><span key={idx} className='mx-1'>{tag}</span>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;