//Product type
export interface Part {
    id: number;
    name: string;
    thumbnail: string;
    socket: string;
    price: number;
    component?: string;
    url: string;
}