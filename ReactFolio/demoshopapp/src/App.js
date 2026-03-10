import './App.css';


import Card from './components/Card';
import Products from './components/Products';

function App() {
  

  const products=[
    {
      id:"p1",
      title:"Nirma",
      amount:100,
      date:new Date(2021, 8, 10)
    },

    {
      id:"p2",
      title:"Surf-Excel",
      amount:200,
      date:new Date(2021, 2, 10)
    },

    {
      id:"p3",
      title:"Tide",
      amount:300,
      date:new Date(2021, 8, 10)
    },
    {
      id:"p4",
      title:"Maggie",
      amount:"900",
      date:new Date(2022, 8, 4)
    },


  ]



  return (
   <div>
    <Products items= {products} />
   </div>
    
  );
}

export default App;