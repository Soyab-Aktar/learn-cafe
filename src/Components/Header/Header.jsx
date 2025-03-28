import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between p-4 bg-lime-200 items-center mx-4'>
            <h1 className="font-bold text-4xl">Learn Cafe</h1>
            <img src={profile} alt="" srcset="" />
        </header>
    );
};

export default Header;