const Header = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-96 -z-50 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md  filter blur-3xl opacity-50" />
      <div className="absolute z-50 w-full flex gap-2 items-center px-5 md:px-10 lg:px-20 py-3 top-0 left-0">
        <img src={"/logo.png"} alt="logo" className="w-24  h-24" />
        <p className="text-3xl font-extrabold">Todo App</p>
      </div>
    </>
  );
};

export default Header;
