import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className='m-4 font-serif'>
        <div className='text-right bg-gray-100'>
          <Link to='/about' className='inline-block px-4 py-2 text-2xl bg-gray-200'>
            About Us
          </Link>
        </div>
        <div className='py-4 text-center bg-gray-100'>
          <h1 className='inline-block py-2 max-w-md text-4xl font-bold bg-gray-200'>
            Welcome to PropagandaGame!
          </h1>
        </div>
        <div className='py-4 text-center bg-gray-100'>
          <Link
            to="/game"
            className='inline-block px-8 py-2 w-sm text-4xl tracking-wide bg-gray-200 rounded-lg hover:bg-pink-200'>
            Click here to<br />start playing!
          </Link>
        </div>
        <div className='py-4 text-center bg-gray-100'>
          <Link
            to="/badges"
            className='inline-block px-8 py-2 w-sm h-24 text-4xl tracking-wide bg-gray-200 rounded-lg hover:bg-pink-200'>
            <span className='inline-block align-middle h-20'></span>
            My Badges
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;