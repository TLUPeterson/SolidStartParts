//Using arvutitark api for products

export const fetchCPU = async (page: string) => {
  try {
    const response = await fetch(`https://cms.arvutitark.ee/api/products?sort=top&brands=&prices=&price=&attributes=&categories=15&shops=&perPage=20&page=${page}&locale=et`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //console.log(response);
    const data = await response.json();
    //console.log(data);
    
    const productData = data.data.map((product: any) => {
      // Find the TDP value dynamically
      let tdp:string = 'N/A';
      if (product.technical_details && product.technical_details.length > 0) {
        for (const detail of product.technical_details) {
          if (detail.attributes && Array.isArray(detail.attributes)) {
            const tdpAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'TDP');
            if (tdpAttribute && tdpAttribute.values && tdpAttribute.values.length > 0) {
              tdp = Object.values(tdpAttribute.values[0])[0] as string;
              break;
            }
          }
        }
      }
    
      return {
        id: product.id,
        name: product.name.en,
        thumbnail: product.main_image.image_sizes.small.webp_url,
        cores: product.main_attributes[1].values[0].en,
        socket: product.technical_details[0]?.attributes[2]?.values[0]?.en ?? 'N/A',
        price: product.price,
        tdp: tdp,
        url: product.path.en
      };
    });
    
    //console.log(productData);
    console.log("ran fetchCPU");
    const productAmount = 20
    //console.log("fetch log",  productAmount);
    return { productData, productAmount };

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};

export const fetchMotherboard = async (page: string) => {
  try {
    const response = await fetch(`https://cms.arvutitark.ee/api/products?sort=top&brands=&prices=&price=&attributes=&categories=16&shops=&perPage=20&page=${page}&locale=et`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //console.log(response);
    const data = await response.json();
    //console.log(data);
    
    const productData = data.data.map((product: any) => {
      // Find the TDP value dynamically
      let memoryslots:string = 'N/A';
      if (product.technical_details && product.technical_details.length > 0) {
        for (const detail of product.technical_details) {
          if (detail.attributes && Array.isArray(detail.attributes)) {
            const tdpAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === '# of RAM Slots');
            if (tdpAttribute && tdpAttribute.values && tdpAttribute.values.length > 0) {
              memoryslots = Object.values(tdpAttribute.values[0])[0] as string;
              break;
            }
          }
        }
      }
    
      return {
        id: product.id,
        name: product.name.en,
        thumbnail: product.main_image.image_sizes.small.webp_url,
        socket: product.technical_details[0].attributes[1].values[0].en,
        formfactor: product.technical_details[0].attributes[2].values[0].en,
        memoryslots: memoryslots,
        price: product.price,
        url: product.path.en
      };
    });
    
    console.log(productData);
    console.log("ran fetchMotherboard");
    const productAmount = 20
    //console.log("fetch log",  productAmount);
    return { productData, productAmount };

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};


export const fetchGPU = async (page: string) => {
  try {
    const response = await fetch(`https://cms.arvutitark.ee/api/products?sort=top&brands=&prices=&price=&attributes=&categories=18&shops=&perPage=20&page=${page}&locale=et`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //console.log(response);
    const data = await response.json();
    //console.log(data);
    
    const productData = data.data.map((product: any) => {
      // Find the TDP value dynamically
      let wattage:string = 'N/A';
      let vram:string = 'N/A';
      if (product.technical_details && product.technical_details.length > 0) {
        for (const detail of product.technical_details) {
          if (detail.attributes && Array.isArray(detail.attributes)) {
            const tdpAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'Recommended PSU wattage:');
            const vramAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'VRAM Size:');
            if (tdpAttribute && tdpAttribute.values && tdpAttribute.values.length > 0) {
              wattage = Object.values(tdpAttribute.values[0])[0] as string;
            }
            if (vramAttribute && vramAttribute.values && vramAttribute.values.length > 0) {
              vram = Object.values(vramAttribute.values[0])[0] as string;
            }
            break;
          }
        }
      }
    
      return {
        id: product.id,
        name: product.name.en,
        thumbnail: product.main_image.image_sizes.small.webp_url,
        memory: vram,
        wattage: wattage,
        price: product.price,
        url: product.path.en
      };
    });
    
    console.log(productData);
    console.log("ran fetchGPU");
    const productAmount = 20
    //console.log("fetch log",  productAmount);
    return { productData, productAmount };

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};

export const fetchMemory = async (page: string) => {
  try {
    const response = await fetch(`https://cms.arvutitark.ee/api/products?sort=top&brands=&prices=&price=&attributes=&categories=20&shops=&perPage=18&page=${page}&locale=et`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //console.log(response);
    const data = await response.json();
    //console.log(data);
    
    const productData = data.data.map((product: any) => {
      let capacity:string = 'N/A';
      let layout:string = 'N/A';
      if (product.technical_details && product.technical_details.length > 0) {
        for (const detail of product.technical_details) {
          if (detail.attributes && Array.isArray(detail.attributes)) {
            const capacityAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'Capacity');
            const layoutAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'Layout');
            if (capacityAttribute && capacityAttribute.values && capacityAttribute.values.length > 0) {
              capacity = Object.values(capacityAttribute.values[0])[0] as string;
            }
            if (layoutAttribute && layoutAttribute.values && layoutAttribute.values.length > 0) {
              layout = Object.values(layoutAttribute.values[0])[0] as string;
            }
            break;
          }
        }
      }
    
      return {
        id: product.id,
        name: product.name.en,
        thumbnail: product.main_image.image_sizes.small.webp_url,
        price: product.price,
        url: product.path.en,
        capacity: capacity,
        layout: layout,
      };
    });
    
    console.log(productData);
    console.log("ran fetchmemory");
    const productAmount = 20
    //console.log("fetch log",  productAmount);
    return { productData, productAmount };

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};


export const fetchStorage = async (page: string) => {
  try {
    const response = await fetch(`https://cms.arvutitark.ee/api/products?sort=top&brands=&prices=&price=&attributes=&categories=19&shops=&perPage=18&page=${page}&locale=et`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //console.log(response);
    const data = await response.json();
    //console.log(data);
    
    const productData = data.data.map((product: any) => {
      let capacity:string = 'N/A';
      let interfaceType:string = 'N/A';
      let formfactor:string = 'N/A';
      if (product.technical_details && product.technical_details.length > 0) {
        for (const detail of product.technical_details) {
          if (detail.attributes && Array.isArray(detail.attributes)) {
            const capacityAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'Capacity');
            const interfaceAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'Interface');
            const formfactorAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'Form factor');
            if (capacityAttribute && capacityAttribute.values && capacityAttribute.values.length > 0) {
              capacity = Object.values(capacityAttribute.values[0])[0] as string;
            }
            if (interfaceAttribute && interfaceAttribute.values && interfaceAttribute.values.length > 0) {
              interfaceType = Object.values(interfaceAttribute.values[0])[0] as string;
            }
            if (formfactorAttribute && formfactorAttribute.values && formfactorAttribute.values.length > 0) {
              formfactor = Object.values(formfactorAttribute.values[0])[0] as string;
            }
            break;
          }
        }
      }
    
      return {
        id: product.id,
        name: product.name.en,
        thumbnail: product.main_image.image_sizes.small.webp_url,
        price: product.price,
        url: product.path.en,
        capacity: capacity,
        interface: interfaceType,
        formfactor: formfactor,
      };
    });
    
    console.log(productData);
    console.log("ran fetchstorage");
    const productAmount = 20
    //console.log("fetch log",  productAmount);
    return { productData, productAmount };

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};


export const fetchMonitor = async (page: string) => {
  try {
    const response = await fetch(`https://cms.arvutitark.ee/api/products?sort=top&brands=&prices=&price=&attributes=&categories=5&shops=&perPage=18&page=${page}&locale=et`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //console.log(response);
    const data = await response.json();
    //console.log(data);
    
    const productData = data.data.map((product: any) => {
      let diagonal:string = 'N/A';
      let resolution:string = 'N/A';
      let rrate:string = 'N/A';
      if (product.technical_details && product.technical_details.length > 0) {
        for (const detail of product.technical_details) {
          if (detail.attributes && Array.isArray(detail.attributes)) {
            const diagonalAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'Diagonal');
            const resolutionAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'Resolution');
            const refreshrateAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'Refresh rate');
            if (diagonalAttribute && diagonalAttribute.values && diagonalAttribute.values.length > 0) {
              diagonal = Object.values(diagonalAttribute.values[0])[0] as string;
            }
            if (resolutionAttribute && resolutionAttribute.values && resolutionAttribute.values.length > 0) {
              resolution = Object.values(resolutionAttribute.values[0])[0] as string;
            }
            if (refreshrateAttribute && refreshrateAttribute.values && refreshrateAttribute.values.length > 0) {
              rrate = Object.values(refreshrateAttribute.values[0])[0] as string;
            }
            break;
          }
        }
      }
    
      return {
        id: product.id,
        name: product.name.en,
        thumbnail: product.main_image.image_sizes.small.webp_url,
        price: product.price,
        url: product.path.en,
        diagonal: diagonal,
        resolution: resolution,
        rrate: rrate,
      };
    });
    
    console.log(productData);
    console.log("ran fetchmonitor");
    const productAmount = 20
    //console.log("fetch log",  productAmount);
    return { productData, productAmount };

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};


export const fetchCooler = async (page: string) => {
  try {
    const response = await fetch(`https://cms.arvutitark.ee/api/products?sort=top&brands=&prices=&price=&attributes=&categories=26&shops=&perPage=18&page=${page}&locale=et`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //console.log(response);
    const data = await response.json();
    //console.log(data);
    
    const productData = data.data.map((product: any) => {
      let diagonal:string = 'N/A';
      let resolution:string = 'N/A';
      let rrate:string = 'N/A';
      if (product.technical_details && product.technical_details.length > 0) {
        for (const detail of product.technical_details) {
          if (detail.attributes && Array.isArray(detail.attributes)) {
            const diagonalAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'Diagonal');
            const resolutionAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'Resolution');
            const refreshrateAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'Refresh rate');
            if (diagonalAttribute && diagonalAttribute.values && diagonalAttribute.values.length > 0) {
              diagonal = Object.values(diagonalAttribute.values[0])[0] as string;
            }
            if (resolutionAttribute && resolutionAttribute.values && resolutionAttribute.values.length > 0) {
              resolution = Object.values(resolutionAttribute.values[0])[0] as string;
            }
            if (refreshrateAttribute && refreshrateAttribute.values && refreshrateAttribute.values.length > 0) {
              rrate = Object.values(refreshrateAttribute.values[0])[0] as string;
            }
            break;
          }
        }
      }
    
      return {
        id: product.id,
        name: product.name.en,
        thumbnail: product.main_image.image_sizes.small.webp_url,
        price: product.price,
        url: product.path.en,
        diagonal: diagonal,
        resolution: resolution,
        rrate: rrate,
      };
    });
    
    console.log(productData);
    console.log("ran fetchmonitor");
    const productAmount = 20
    //console.log("fetch log",  productAmount);
    return { productData, productAmount };

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};

export const fetchCase = async (page: string) => {
  try {
    const response = await fetch(`https://cms.arvutitark.ee/api/products?sort=top&brands=&prices=&price=&attributes=&categories=24&shops=&perPage=18&page=${page}&locale=et`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //console.log(response);
    const data = await response.json();
    //console.log(data);
    
    const productData = data.data.map((product: any) => {
      let formfactor:string = 'N/A';
      if (product.technical_details && product.technical_details.length > 0) {
        for (const detail of product.technical_details) {
          if (detail.attributes && Array.isArray(detail.attributes)) {
            const formfactorAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'Form Factor');
            if (formfactorAttribute && formfactorAttribute.values && formfactorAttribute.values.length > 0) {
              formfactor = Object.values(formfactorAttribute.values[0])[0] as string;
            }
            break;
          }
        }
      }
    
      return {
        id: product.id,
        name: product.name.en,
        thumbnail: product.main_image.image_sizes.small.webp_url,
        price: product.price,
        url: product.path.en,
        formfactor: formfactor,
      };
    });
    
    console.log(productData);
    console.log("ran fetchcase");
    const productAmount = 20
    //console.log("fetch log",  productAmount);
    return { productData, productAmount };

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};

export const fetchPSU = async (page: string) => {
  try {
    const response = await fetch(`https://cms.arvutitark.ee/api/products?sort=top&brands=&prices=&price=&attributes=&categories=22&shops=&perPage=18&page=${page}&locale=et`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //console.log(response);
    const data = await response.json();
    //console.log(data);
    
    const productData = data.data.map((product: any) => {
      let wattage:string = 'N/A';
      let formfactor:string = 'N/A';
      if (product.technical_details && product.technical_details.length > 0) {
        for (const detail of product.technical_details) {
          if (detail.attributes && Array.isArray(detail.attributes)) {
            const wattageAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'Wattage');
            const formfactorAttribute = detail.attributes.find((attr: { name: { en: string; }; }) => attr.name.en === 'Kujutegur');
            if (wattageAttribute && wattageAttribute.values && wattageAttribute.values.length > 0) {
              wattage = Object.values(wattageAttribute.values[0])[0] as string;
            }
            if (formfactorAttribute && formfactorAttribute.values && formfactorAttribute.values.length > 0) {
              formfactor = Object.values(formfactorAttribute.values[0])[0] as string;
            }
            break;
          }
        }
      }
    
      return {
        id: product.id,
        name: product.name.en,
        thumbnail: product.main_image.image_sizes.small.webp_url,
        price: product.price,
        url: product.path.en,
        formfactor: formfactor,
        wattage: wattage,
      };
    });
    
    console.log(productData);
    console.log("ran fetchpsu");
    const productAmount = 20
    //console.log("fetch log",  productAmount);
    return { productData, productAmount };

  }catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};

