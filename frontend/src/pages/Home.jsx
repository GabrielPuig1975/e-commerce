import Logo from "../../public/Logo.png";

function Home() {
  return (
    <div className="home-page w-full h-full flex justify-center items-center">
      <div className="mt-10 heart-mask bg-white p-4 overflow-hidden drop-shadow-lg">
        <div className="flex flex-col items-center justify-center">
          <img src={Logo} alt="Logo" className="logo h-100 animate-pulse" />
          <div
            className="
                  h-4 bg-yellow-400 w-48 
                  -mt-4 rounded-full
                "
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
