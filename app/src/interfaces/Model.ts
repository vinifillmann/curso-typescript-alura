import { Imprimivel } from "../utils/Imprimivel.js";
import { Comparavel } from "./Comparavel.js";

export interface Model<T> extends Imprimivel, Comparavel<T> {}