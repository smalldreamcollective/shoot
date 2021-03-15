import { Camera } from "./camera.model";
import { Lense } from "./lense.model";
import { Roll } from "./roll.model";

export interface Shoot {
  cameras: Camera[];
  client: string;
  description: string;
  endDate: string;
  lenses: Lense[];
  rolls: Roll[],
  startDate: string;
  type: string;
}