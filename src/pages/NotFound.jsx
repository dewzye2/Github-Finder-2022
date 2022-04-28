import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PNG1 from './png' // MY PNG

function NotFound() {
  return (    
  <div className='hero'>    
    <PNG1 />
    <div className="text-center hero-content">
      <div className="max-w-lg">
        <h1 className="text-8xl font-bold mb-8 text-purple-700">
          Oops!
          <h1>
            <p className="text-5xl mb-8">404 - Page not found!</p>
            <Link to='/' className='btn btn-primary btn-lg'>
              <FaHome className='mr-2'/>
              Back To Home
            </Link>
          </h1>
        </h1>
      </div>
    </div>
  </div>
  )
}

export default NotFound