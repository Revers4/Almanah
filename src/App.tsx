// const number: number = 22
// const string: string = "str"
// const bool: boolean = true

// type TObj = {
//   name: string,
//   age: number,
//   isHaveAJob: boolean
// }

// const obj: TObj = {
//   name: "Vova",
//   age: 22, 
//   isHaveAJob: false
// }

// interface ICar {
//   eng: string,
//   wheel: number,
//   kidSeat: boolean,
//   music: boolean
// }

// interface IBMW extends ICar {
//   logo: string,
//   modal: number,
//   reales: string,
//   bodyWork: string
// }

// interface IMersedes extends ICar {
//   logo: string,
//   modal: string,
//   reales: string,
//   bodyWork: string
// }

// interface ILada extends ICar {
//   logo: string,
//   modal: string,
//   safety: boolean,
//   alarm?: boolean
// }

// const car: ICar = {
//   eng: "1.6L",
//   wheel: 5,
//   kidSeat: true,
//   music: true
// }

// const bmw: IBMW = {
//   ...car,
//   logo: "bmw",
//   modal: 5,
//   reales: "1987-1995",
//   bodyWork: "E34"
// }

// const mersedes: IMersedes = {
//   ...car,
//   logo: "mersedes",
//   modal: "E",
//   reales: "1984-1998",
//   bodyWork: "W124"
// }

// const lada: ILada = {
//   ...car,
//   logo: "lada",
//   modal: "Priora",
//   safety: false,
//   alarm: true
// }

// // Array

// const cars1: string[] = ["lada", "bmw", "mers"]
// const cars2: Array<string> = ["lada", "bmw", "mers"]

// type TUser = {
//   name: string,
//   age: number
// }

// const users: Array<TUser> = [
//   {
//     name: "Sasha",
//     age: 25
//   },
//   {
//     name: "Vova",
//     age: 22
//   }
// ]

// const mixed1: (string | boolean)[] = ["true", true, "false", false]
// const mixed2: Array<string | boolean> = ["true", true, "false", false]

// function test1(a: number, b: number): number{
//   return a + b
// }

// function test2(message: string):void{
//   console.log(message);
// }

// function test3(id: number, name?: string):void{
//   console.log(`id: ${id}, name: ${name ?? "неуказанно"}`);
// }

// function testUser(user: TUser):void {
//   console.log(user.name);
// }

// type TOperations = (a: number, b: number) => number

// const subtract:TOperations = (a, b) => a - b

import HighlightedText from "./components/highLightedText";
import './App.css'

const App = () => {
  const input = "Это *важное* сообщение и *подсвеченное слово* здесь";

  return (
    <div style={{ fontSize: "18px" }}>
      <HighlightedText text={input} />
    </div>
  );
};

export default App;

