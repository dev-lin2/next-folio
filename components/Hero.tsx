const Hero = () => {
  return (
    <div className="h-[95vh] bg-gray-50 bg-blue-400 bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center items-center h-full space-y-4">
        <h1 className="text-9xl">Lin Aung</h1>
        <h2 className="text-5xl">Fullstack Developer</h2>
        <button className="p-4 text-2xl rounded-full border-4 border-white hover:bg-white hover:text-black transition">Download Resume</button>
      </div>
    </div>
  );
};

export default Hero;
