import Bookmark from "./Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 border-2 border-black rounded-md p-2">
            <h1 className="text-center m-1 font-bold">BookMarks: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;