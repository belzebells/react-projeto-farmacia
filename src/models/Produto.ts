import Categoria from "./Categoria";
import Usuario from './Usuario';

export default interface Produto {
    id: number;
    name: string;
    description: string;
    amount: number;
    price: number;
    photo: string;
    
    category: Categoria | null;
    user: Usuario | null;

}