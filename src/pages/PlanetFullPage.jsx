import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { fetchData, options } from '../utils/fetchData';
import { InfinitySpin } from 'react-loader-spinner';

const PlanetFullPage = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const getData = async () => {
            try {
                const dt = await fetchData(`https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/${id}`, options);
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
        <>

            <div className=' box-border flex flex-col lg:flex-row gap-10 justify-center items-center p-10 bg-gray-900 h-auto lg:h-screen'>
                <div>
                    <img src={data.imgSrc.img} alt={data.imgSrc.imgDescription} className='md:max-w-[500px] lg:w-[800px] rounded-xl' />
                </div>
                <div className='flex flex-col gap-6 md:text-2xl text-white'>
                    <p><b>Name: </b>{data.name}</p>
                    <p><b>Volume: </b>{data.basicDetails.volume}</p>
                    <p><b>Mass: </b>{data.basicDetails.mass}</p>
                    <p className=' w-full'><b>Description: </b>{data.description}</p>
                    <Link className='text-blue-200 text' to={`${data.wikiLink}`}>Read More</Link>
                </div>
            </div>
            <button 
            className=' bg-blue-500 rounded-xl p-3 text-white fixed bottom-5 right-5 btn'
            onClick={() => (navigate('/'))}
            >
                Go Back
            </button>
        </>
    )
}

export default PlanetFullPage