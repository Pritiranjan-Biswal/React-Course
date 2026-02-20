import './App.css';
import Item from './components/Item';
import ItemDate  from './components/ItemDate';

function App() {
  const response=[
    {
      ItemName:"Nirma",
      ItemDate:"20",
      ItemMonth:"June",
      ItemYear:"2000"
    }
  ]




  return (
    <div>
      <Item name={response[0].ItemName}>
        Main Hoon Kuna
      </Item>
      <ItemDate day={response[0].ItemDate} month={response[0].ItemMonth} year={response[0].ItemYear}>
        
      </ItemDate>

     
      <div className="App">
        Hi Kuna Biswal
      </div>
    </div>
  );
}

export default App;