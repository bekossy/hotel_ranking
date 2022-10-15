export interface Chain{
    id: number;
    chain: string;
    hotel: Hotel[];
}

export interface Hotel{
    id: number;
    name: string;
    city: string;
    country: string;
    address: string;
    rank: number;
}