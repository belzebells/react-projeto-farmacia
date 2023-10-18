import Produto from "./Produto";

export default interface Usuario {
  id: number;
  name: string;
  userName: string;
  photo: string;
  password: string;
  product?: Produto | null;
}