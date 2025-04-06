import Bookmark from "./Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (

        
        <div className="md:w-1/3 border-2 border-black rounded-md p-2">
            <h2 className="text-center font-semibold border-2 border-black rounded-md bg-lime-100">Total Reading Time: {readingTime} Minutes</h2>
            <h1 className="text-center m-1 font-bold">BookMarks: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;