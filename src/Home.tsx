import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">The Tarot Experience</h1>
      <div className="mt-6 flex gap-4">
        <Link to="/experience">
          <button className="rounded-md border-2 border-white p-2 px-8 text-white hover:bg-white hover:text-black">
            Try it out!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
