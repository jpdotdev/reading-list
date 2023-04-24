import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar = () => {
    const { books } = useContext(BookContext)
    return (
        <div className='navbar'>
            <h1> Summer Reading List </h1>
            <p> Currently, you have {books.length} books to read</p>
        </div>
    )
}

export default Navbar