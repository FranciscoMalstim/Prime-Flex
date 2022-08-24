import { useEffect, useState } from 'react';
import api from "../../service/api"

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: `${import.meta.env.VITE_API_ACCESS_TOKEN}`,
          language: "pt-BR",
          page: 1,
        }
      })
      console.log(response.data.results)
    }
    loadFilmes();

  }, [])
  

  return (
    <h1>Home</h1>
  )
}

export default Home
