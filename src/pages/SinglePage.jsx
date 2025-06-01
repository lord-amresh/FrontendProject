import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";


function SinglePage(){
    const navigate = useNavigate()
    const {id} = useParams()  //used to get the parameter of route..
    const [book,setBook] = useState({})
    const fetchBook = async ()=>{
        const response = await axios.get("http://localhost:3000/api/books/" + id)
        setBook(response.data.datas) //response.data.datas
    }
    useEffect(()=>{
        fetchBook()
    },[])

    const deleteBook = async ()=>{
        const response = await axios.delete("http://localhost:3000/api/books/" + id)
        if(response.status === 200){
            // Home page ma navigation gardim
            navigate("/")
        }else{
            alert("Something went Wrong")
        }
    }

    return(
        <>
        <Navbar />
        <h1>{book.bookName}</h1>
        <p>{book.bookPrice}</p>
        <p>{book.bookAuthor}</p>
         <button onClick={deleteBook}>Delete Me</button>

        </>
    )
}

export default SinglePage