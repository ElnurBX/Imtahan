
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import axios from 'axios';
function App() {
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState('false');
    const [data, setdata] = useState([]);
    const router = createBrowserRouter(ROUTES);
    useEffect(() => {
        axios.get("http://localhost:8080/api/Plants").then((res)=>{
            setdata([...res.data])
        })
    },[]);
    const [wish,setwish]=useState(JSON.parse(localStorage.getItem("wish"))||[])
    const toggelwish =(item)=>{
        let newItem=[...wish]
        let target =wish.find(x=>x._id === item._id)
        if(target){
            let indexof=wish.indexOf(target)
            console.log(indexof)
            newItem.splice(indexof,1)
        }else{
            newItem.push(item)
        }
        setwish(newItem)
        localStorage.setItem("wish", JSON.stringify(newItem))
    }

    return (
        <>
        <MainContext.Provider value={{data, setdata, loading, setLoading, error, setError,wish,toggelwish}}>
            <RouterProvider router={router }/>
        </MainContext.Provider>
        </>
    );
}

export default App;
