//Product type
export interface Part {
    id: number;
    name: string;
    thumbnail: string;
    price: number;
    url: string;
    component?: string;
    socket?: string;
    cores?: number;
    tdp?: number;
    formfactor?: string;
    memoryslots?: number;
}

