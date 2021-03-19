import { Camera } from "./camera.model";
import { Lense } from "./lense.model";
import { Roll } from "./roll.model";

export interface Shoot {
  cameras: string[];
  client: string;
  description: string;
  endDate: string;
  lenses: string[];
  rolls: string[],
  startDate: string;
  type: string;
}