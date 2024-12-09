const Header = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4 bg-white">
        <div className="text-2xl font-bold">🏠</div>
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Localities</a>
          <a href="#" className="hover:text-black">Unique Stays</a>
        </nav>
        <button className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-black hover:text-white">
          Sign In
        </button>
      </header>
    );
  };
  
  export default Header;
  