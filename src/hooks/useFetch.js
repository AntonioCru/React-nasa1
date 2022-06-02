import { useEffect, useState } from "react";
import DivArticle from "../Components/DivArticle";

const useFetch = (URL) => {


  const [datas, setData] = useState([]);

    

  useEffect(() => {
    //se ejecuta al final de que se carga el componente
    fetch(URL)
      .then((res) => res.json())
      .then((respuesta) => setData(respuesta));
      
      
  }, [URL]); //recibe las props en el array
//   console.log(datas);
        
DivArticle(datas);
        
// return (
//     datas.map((data)=>{return <div>{data.date}</div>})
    // console.log(date);
    // <DivArticle 
    // title={data.dataA.title}
    // data={data.dataA.date} 
    // explanation={data.dataA.explanation}
    // img={data.dataA.url}
    // version={data.dataA.service_version}
    // />

// );


  
  
  return [datas];
};



export default useFetch;
