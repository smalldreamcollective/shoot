import { Frame } from "./frame.model";

export interface Roll {
  id: string;
  ISO: number;
  camera: string;
  frames: Frame[]
}