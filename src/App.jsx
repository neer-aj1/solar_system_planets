import { useEffect, useState } from 'react'
import { fetchData, options } from './utils/fetchData'
import Cards from './components/Cards';
import {InfinitySpin} from 'react-loader-spinner'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const dt = await fetchData('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/', options);
        setData(dt);
      }
      catch (e) {
        console.log("ERROR IN FETCHING DATA: ", e);
      }
      finally {
        setLoading(false)
      }

    }
    getData()

  }, [])
  if (loading) {
    return (
      <div className='h-screen flex flex-col justify-center items-center'>
        <InfinitySpin
          color='black'
        />
        <p>LOADING...</p>
      </div>
    )
  }

  return (
    <section className=' flex flex-col bg-gray-900 h-full justify-center items-center pt-10'>
      <h2 className=' text-5xl uppercase mb-11 text-white'>Planets</h2>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap justify-center'>
        {data.map((dt) => (
          <Cards key={dt.id} dt={dt} />
        ))}
      </div>
    </section>
  )
}

export default App
