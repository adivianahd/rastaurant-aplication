import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState([]);

  const fetchData = async () => {
  const response = await fetch(url)
  console.log('esto llega por url', url);
  const data = await response?.json() || [];
  setData(data)
  console.log('esto es data', data);
  console.log('esto es loading', loading);
  setLoading(false)
  }

  useEffect(()=> {
  fetchData()
  }, [])

  return { loading, data }
}

export default useFetch;