import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



  
  export const Api= axios.create({
    baseURL: "https://2c6405e4-688a-47b5-9ff7-e1abc3450505-00-pddypv3oyxcj.picard.replit.dev:3000/api",
    
  })
  
