import { Link, Route, Routes, useParams, Outlet, Navigate, useNavigate } from 'react-router-dom'
import './App.css'
import { useAuth } from './useAuth'

function App() {

  const Home = ()  => {return <h1>Home</h1>}

  const SearchPage = () => {
    const tacos =[ 
      'cochinita',
      'chili',
      'carnita',
      'quesadilla'
    ]

    return( 
      <div>
        <h1>Search Page</h1>
        {tacos.map(taco => (
          <li key={taco}>
            <Link to={`/tacos/${taco}`}>{taco}</Link>
          </li>
        ))}
      </div>
    
    )}

  const Tacos = () => {
    const { name } = useParams()
    return( 
      <>
        <h1>Tacos</h1>
        {name}
        <Link to="details">Ir a los detalles</Link>
        <Outlet />
      </>
     )}
  
  const TacoDetails = () =>{
    const { taco } = useParams()

    return (
      <h1>Taco details {taco}</h1>
    )
  }

  const TacoIndex = () =>{
    return (
      <h1>Index Route de Tacos</h1>
    )
  }

  const Login = () =>{
    const {login} = useAuth()
    const navigate = useNavigate()

    const handleClick = () =>{
    login()
    navigate('/search-page')
  }

  return (
    <button onClick={handleClick}>Login</button>
  )
  }
  const ProtectedRoute = ({children}) =>{
    const {isAuthenticated} = useAuth()

    if(!isAuthenticated) {
      return <Navigate to ='/login' />
    }

    return children
  }

  return (
    <>
      <header>
        <nav>
          <h1>Elian</h1>
          <ul>
            <li><Link to="/"><p>Home</p></Link></li>
            <li><Link to="/search-page"><p>Search page</p></Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />
        <Route path='/tacos/:taco' element={<Tacos />} >
          <Route index element={<TacoIndex />} />
          <Route path='details' element={<TacoDetails /> }/>
        </Route>
        <Route path='/tacos/midutaco' element={<h1>Midutaco</h1>} />
        <Route path='*' element={<h1>404 not Found</h1>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
 