
function App() {
  return (
    <div className='m-4 font-serif'>
      <div className='text-right bg-gray-100'>
        <a className='inline-block px-4 py-2 text-2xl bg-gray-200' href='#'>
          About Us
        </a>
      </div>
      <div className='py-4 text-center bg-gray-100'>
        <h1 className='inline-block py-2 max-w-md text-4xl font-bold bg-gray-200'>
          Welcome to PropagandaGame!
        </h1>
      </div>
      <div className='py-4 text-center bg-gray-100'>
        <a className='inline-block px-8 py-2 w-sm text-4xl tracking-wide bg-gray-200 rounded-lg
                      hover:bg-pink-200' href='#'>
          Click here to<br />start playing!
        </a>
      </div>
      <div className='py-4 text-center bg-gray-100'>
        <a className='inline-block px-8 py-2 w-sm h-24 text-4xl tracking-wide bg-gray-200 rounded-lg
                      hover:bg-pink-200' href='#'>
          <span className='inline-block align-middle h-20'></span>
          My Badges
        </a>
      </div>
    </div>
  )
}

export default App
