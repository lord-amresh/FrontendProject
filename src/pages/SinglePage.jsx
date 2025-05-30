import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";


function SinglePage(){
    const {id} = useParams()  //used to get the parameter of route..
    const [book,setBook] = useState({})
    const fetchBook = async ()=>{
        const response = await axios.get("http://localhost:3000/api/books/" + id)
        setBook(response.data.datas) //response.data.datas
    }
    useEffect(()=>{
        fetchBook()
    },[])
    return(
        <>
        <Navbar />
        <h1>{book.bookName}</h1>
        <p>{book.bookPrice}</p>
        <p>{book.bookAuthor}</p>
        </>
    )
}

export default SinglePage