const Navbar = () => {
  return (
    <div className="w-full h-[90px] border-b-2">
      <div className="px-20 h-full w-full flex items-center justify-between py-8">
        <a href="/">
          <h1 className=" text-indigo-700 text-3xl font-extrabold">Logo</h1>
        </a>
        <ul className="flex items-center justify-center gap-8 mr-12">
          <li className="font-bold text-[20px] text-indigo-700">Home</li>
          <li className="font-bold text-[20px] text-indigo-700">Chart</li>
          <li className="font-bold text-[20px] text-indigo-700">About Us</li>
          <li className="font-bold text-[20px] text-indigo-700">Tools</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
