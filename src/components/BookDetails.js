import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext)
    return ( 
        <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
            <h2 className='title'>{book.title}</h2>
            <h3 className='author'> Author: {book.author}</h3>
        </li>
     );
}
 
export default BookDetails;