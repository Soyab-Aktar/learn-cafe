const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        
        <div className="text-3xl border-2 border-black rounded-md mb-2 p-3 bg-lime-100 cursor-pointer hover:bg-lime-200">
            <h1 className="3xl font-semibold">{title}</h1>
        </div>
    );
};

export default Bookmark;