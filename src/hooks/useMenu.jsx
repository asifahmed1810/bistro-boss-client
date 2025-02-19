import { useEffect, useState } from "react";

const useMenu=()=>{
     const [menu,setMenu]=useState([]);
        useEffect(()=>{
            fetch('https://bistro-boss-server-eight-pi.vercel.app/menu')
            .then(res=>res.json())
            .then(data=>{
                setMenu(data)
            })
        },[])

        return [menu];

}

export default useMenu;