import config from "@config";

const version = 0.6

export const getConfig = async (charachter: string) => {
    const url = `${config.url_bucket}/characters/${charachter}.json?v=${version}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { Origin: "http://localhost:5173" },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error en la solicitud:", response.statusText);
      return undefined;
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