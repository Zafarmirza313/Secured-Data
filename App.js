// import { useState } from "react";

// const initalItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 4, packed: false },
//   { id: 4, description: "PowerBank", quantity: 12, packed: false },
//   { id: 5, description: "Sleeping Bag", quantity: 7, packed: false },
//   { id: 6, description: "Tracking Shoes", quantity: 10, packed: false },
//   { id: 7, description: "SD Card", quantity: 3, packed: false },
//   { id: 8, description: "Bags", quantity: 10, packed: false },
// ];

// export default function App() {
//   function handleAdditems(item){
//     setItems((items)=>[...items, item])
//     }
//   const[ items,setItems] = useState([])
//   return (
//     <div className="app">
//       <Logo />
//       <Form onAddItems={handleAdditems} />
//       <PakingList items = {items} />
//       <Stats />
//     </div>
//   );
// }

// function Logo() {
//   return <h1>🌴Far Away 💼</h1>;
// }

// function PakingList({items}) {
//   return (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <Item item={item} key={item.id} />
          
//         ))}
//       </ul>
//     </div>
//   );
// }




// function Item({ item }) {
//   return (
//     <li>
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity}
//         {item.description}
//         <button>❌</button>
//       </span>
//     </li>
//   );
// }



// function Form({onAddItems}) {
//   const [description, setDescription] = useState("");
//   const[quantity, setQuantity] = useState(1);








//   function handleSubmit(e) {
//     e.preventDefualt();
//     if(!description) return;



//     const newItem ={description, quantity, packed:
//     false, id: Date.now()};
//     console.log(newItem);
    
//     onAddItems(newItem);
//     setDescription("")
//     setQuantity(1);

//   }



//   return (
//     <div className="add-form" onSubmit={handleSubmit}>
//       <h3>What would you need to your trip😍</h3>
//       <select value={quantity} onChange={(e)=> setQuantity(Number(e.target.value))}>
//         {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
//           <option>{num}</option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="items..."
//         value={description}
//         onChange={(e) =>{
//           console.log(e.target.value)
          
//           setDescription(e.target.value)}} 
//       />
//       <button>Add</button>
//     </div>
//   );
// }
// function Stats() {
//   return (
//     <footer className="stats">
//       💼you have X items on your list, and you already packed X items(X%)
//     </footer>
//   );
// }




// Project 5






import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Data from './Components/Data/Data'
import Cloud from './Components/cloud/Cloud'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Data/>
      <Cloud/>
      <Footer/>
      
      
    </div>
  )
}

export default App
