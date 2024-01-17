export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${import.meta.env.VITE_PLANET_DATA_KEY}`,
    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json()
  return data;
}