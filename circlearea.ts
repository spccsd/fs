// 6) Area of Circle Module
export function areaOfCircle(radius: number): number {
    return Math.PI * radius * radius;
  }
  
  // Import simulation (would be from another file in real project)
  import { areaOfCircle as importedArea } from "./q1";  // Replace with actual file/module if split
  console.log("6) Area of circle with r=5:", importedArea(5));
  