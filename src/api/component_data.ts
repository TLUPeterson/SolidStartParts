/*
API Categories from Hinnavaatlus https://api.hinnavaatlus.ee/global/categories/
ID from this can be inserted into https://api.hinnavaatlus.ee/search/?categoryId=ID

Neccessary ids:
- cpu : 41
- gpu : 44
- motherboard : 33
- memory : 29
- storage : 37
- ssd : 9520
- monitor : 9344
- cooler : 42
- case : 56
- psu : 9161

- network : 48
- keyboard : 50
- mouse : 51

*/

export const fetchProductById = async (id: string) => {
  try {
    const response = await fetch(`https://api.hinnavaatlus.ee/product/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    const data = JSON.parse(text);
    console.log(data);
    const name = data.name || "N/A";
    const thumbnail = data.thumbnails[0] || "N/A";
    const price = data.price || "N/A";
    console.log(name, thumbnail, price);
    return { name, thumbnail, price };
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};

//TODO: Need to have page number. Currently cant seem to understand how hinnavaatlus API works
export const fetchCPU = async (page: string) => {
  try {
    const response = await fetch(`https://api.hinnavaatlus.ee/search/?categoryId=41&amp;page=${page}&amp;`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const productData = data.data.map((product: any) => ({
      id: product.id,
      name: product.name,
      thumbnail: product.thumbnails[0],
      socket: product.categorySubName,
      price: product.price
    }))
    const productAmount = data.total
    //console.log("fetch log",  productAmount);
    return { productData, productAmount };

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};


export const fetchMotherboard = async () => {
  try {
    const response = await fetch(`https://api.hinnavaatlus.ee/search/?categoryId=33&amp;page=1&amp;per-page=50&amp;sort=-views`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    //console.log(data);
    return data.data.map((product: any) => ({
      id: product.id,
      name: product.name,
      //thumbnail: product.thumbnails[0],
      socket: product.categorySubName,
      price: product.price
    }));

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};


export const fetchGPU = async () => {
  try {
    const response = await fetch(`https://api.hinnavaatlus.ee/search/?categoryId=44&amp;page=1&amp;per-page=50&amp;sort=-views`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    //console.log(data);
    return data.data.map((product: any) => ({
      id: product.id,
      name: product.name,
      //thumbnail: product.thumbnails[0],
      price: product.price
    }));

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};

export const fetchMemory = async () => {
  try {
    const response = await fetch(`https://api.hinnavaatlus.ee/search/?categoryId=29&amp;page=1&amp;per-page=50&amp;sort=-views`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    //console.log(data);
    return data.data.map((product: any) => ({
      id: product.id,
      name: product.name,
      //thumbnail: product.thumbnails[0],
      speed: product.categorySubName,  
      price: product.price
    }));

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};


export const fetchStorage = async () => {
  try {
    const response = await fetch(`https://api.hinnavaatlus.ee/search/?categoryId=37&amp;page=1&amp;per-page=50&amp;sort=-views`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    //console.log(data);
    return data.data.map((product: any) => ({
      id: product.id,
      name: product.name,
      //thumbnail: product.thumbnails[0],
      //category: product.categorySubName,
      price: product.price
    }));

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};


export const fetchSSD = async () => {
  try {
    const response = await fetch(`https://api.hinnavaatlus.ee/search/?categoryId=9520&amp;page=1&amp;per-page=50&amp;sort=-views`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    //console.log(data);
    return data.data.map((product: any) => ({
      id: product.id,
      name: product.name,
      //thumbnail: product.thumbnails[0],
      //category: product.categorySubName,
      price: product.price
    }));

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};


export const fetchMonitor = async () => {
  try {
    const response = await fetch(`https://api.hinnavaatlus.ee/search/?categoryId=9344&amp;page=1&amp;per-page=50&amp;sort=-views`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    //console.log(data);
    return data.data.map((product: any) => ({
      id: product.id,
      name: product.name,
      //thumbnail: product.thumbnails[0],
      size: product.categorySubName,
      price: product.price
    }));

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};


export const fetchCooler = async () => {
  try {
    const response = await fetch(`https://api.hinnavaatlus.ee/search/?categoryId=42&amp;page=1&amp;per-page=50&amp;sort=-views`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    //console.log(data);
    return data.data.map((product: any) => ({
      id: product.id,
      name: product.name,
      //thumbnail: product.thumbnails[0],
      category: product.categorySubName?"CPU Cooler":"general",
      price: product.price
    }));

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};

export const fetchCase = async () => {
  try {
    const response = await fetch(`https://api.hinnavaatlus.ee/search/?categoryId=56&amp;page=1&amp;per-page=50&amp;sort=-views`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    //console.log(data);
    return data.data.map((product: any) => ({
      id: product.id,
      name: product.name,
      //thumbnail: product.thumbnails[0],
      //category: product.categorySubName,
      price: product.price
    }));

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};

export const fetchPSU = async () => {
  try {
    const response = await fetch(`https://api.hinnavaatlus.ee/search/?categoryId=9161&amp;page=1&amp;per-page=50&amp;sort=-views`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    //console.log(data);
    return data.data.map((product: any) => ({
      id: product.id,
      name: product.name,
      //thumbnail: product.thumbnails[0],
      category: product.categorySubName,
      price: product.price
    }));

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};

