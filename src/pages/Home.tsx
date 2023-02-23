import { useNavigate } from "react-router-dom"

const Home = () => {
const navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate('/synchronous')}>Synchronous</button>
      <button onClick={() => navigate('/asynchronous')}>Asynchronous</button>
    </>
  )
}

export default Home