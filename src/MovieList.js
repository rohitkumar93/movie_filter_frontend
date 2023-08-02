import React, {useEffect, useState} from 'react'
import { useTable } from '@tanstack/react-table';
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const columns = [
    {Header: 'ID', accessor: 'id'},
    {Header: 'Title', accessor: 'title'},
    {Header: 'Director', accessor: 'director'},
    {Header: 'Year', accessor: 'year'},
  ];

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/movie/')
      .then(response => {
        setMovies(response.data)
        console.log(response.data);
      })
      .catch(error => console.log('found error at movielist', error))
  }, []);

  if(movies) {
    const MovieTable = () => {
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({columns, data: movies});
    }
  }


  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <a href={`/movies/${movie.id}`}>{movie.title} hi</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;