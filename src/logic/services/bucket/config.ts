const version = 1.9

export const getConfig = async (charachter: string) => {
    const url = `https://r-prelander-back-d08d492c6242.herokuapp.com/character/get-character?keyName=${charachter}`
    const response = await fetch(url, {
      method: "GET",
      headers: { Origin: "http://localhost:5173" },
    });
    if(response.status === 404 || response.status === 500){
      return 0;  
    }
    else if (response.ok) {
      const data = await response.json();
      const payload = data.payload;
      let aux: any; 
      aux = payload.character;
      aux.offers = payload.offers;
      return aux;    } else {
      console.error("Error en la solicitud:", response.statusText);
      return 0;
    }
  };

export const getLinkUrl = async (domain: string) => {
    try {
      const url = `${domain}/config.json?v=${version}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Origin: "http://localhost:5173",
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error("Error en la solicitud:", response.statusText);
        return undefined;
      }

    } catch (error) {
      return undefined;
    }
  };