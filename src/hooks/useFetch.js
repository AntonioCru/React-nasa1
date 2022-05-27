import React, { useEffect } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    //se ejecuta al final de que se carga el componente
    fetch(URL)
      .then((response) => response.json())
      .then((data) => datos(data));
  }, [URL]); //recibe las props en el array
};

export default useFetch;
