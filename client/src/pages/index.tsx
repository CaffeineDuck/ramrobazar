import * as React from 'react'
import { Link } from 'react-router-dom'

interface Props {

}

const Home: React.FC<Props> = ( props ) => {
  return (
    <>
    <Link to='/'>Home</Link>
    <Link to='/login'>Login</Link>
    <Link to='/register'>Register</Link>
    </>
  )
}

export default Home