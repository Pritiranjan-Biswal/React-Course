
import P from "./k.js";

function Button() {
    const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
    const listItems=products.map(product=>
        <li key={product.id}>{product.title}</li>
    )
    function handleclick() {
        alert('you clicked me')
    }
    return (
        <div>
            <button onClick={handleclick}>Click Here</button>
            <P/>
            <ul>{listItems}</ul>
        </div>
         
         
    );
   
}

export default Button;