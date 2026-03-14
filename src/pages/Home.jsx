import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-sky-400 h-[1000px]">
      <div className='m-4 font-serif'>
        <div className='text-right bg-sky-400'>
          <Link to='/about' className='inline-block px-4 py-2 text-2xl bg-pink-400 hover:bg-fuchsia-500 hover:font-semibold'>
            About Us
          </Link>
        </div>
        <div className='py-4 text-center bg-sky-400'>
          <h1 className='inline-block py-2 max-w-md text-4xl font-bold bg-amber-400'>
            Welcome to PropagandaGame!
          </h1>
        </div>
        <div className='py-4 text-center bg-sky-400'>
          <Link
            to="/game"
            className='inline-block px-8 py-2 w-sm text-4xl tracking-wide bg-pink-400 rounded-lg hover:bg-fuchsia-500 hover:font-semibold'>
            Click here to<br />start playing!
          </Link>
        </div>
        <div className='py-4 text-center bg-sky-400'>
          <Link
            to="/badges"
            className='inline-block px-8 py-2 w-sm h-24 text-4xl tracking-wide bg-pink-400 rounded-lg hover:bg-fuchsia-500 hover:font-semibold'>
            <span className='inline-block align-middle h-20'></span>
            My Badges
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;