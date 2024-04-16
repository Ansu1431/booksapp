import React, { useEffect, useState } from 'react'
import './Explore.css';
const Explore = () => {
    const [books , setBooks] = useState();
    const fetchData = async()=> {
        const res = await  fetch('https://www.dbooks.org/api/recent')
        console.log(res)
        const data = await res.json();
        setBooks(data.books)
        console.log(data.books)
      }
    const book1 = {
      "id": "1098127463",
      "title": "Security as Code",
      "subtitle": "DevSecOps Patterns with AWS",
      "authors": "BK Sarthak Das, Virginia Chu",
      "image": "https://www.dbooks.org/img/books/1098127463s.jpg",
      "url": "https://www.dbooks.org/security-as-code-1098127463/"
  }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className='Books-container' >{
        books && books.map((book,index)=>{
            return (<a target='_blank.' rel={'noopener noreferrer'} href={book.url}>
            <div className="sec" style={{display:'flex' , flexDirection:'column'}}>

            <img className='Book-images' src={book.image} alt="efef" />
            <div className="Book-authors">{book.authors}</div>
            </div>
            
            </a>)
        })
        
        }</div>


  )

  
}


export default Explore