import './App.css';
import Item from './components/Item';
import ItemDate  from './components/ItemDate';

function App() {
  

  const response=[
    {
      itemName:"Nirma",
      itemDate:202,
      itemMonth:"Aug",
      itemYear:2005
    },

    {
      itemName:"Nirma2",
      itemDate:203,
      itemMonth:"jan",
      itemYear:20059
    },

    {
      itemName:"Nirma3",
      itemDate:204,
      itemMonth:"feb",
      itemYear:2007
    },


  ]



  return (
    <div>
    <Item name={response[0].itemName}></Item>
    <ItemDate  day={response[0].itemDate} month={response[0].itemMonth} Year={response[0].itemYear}></ItemDate>


    <Item name={response[1].itemName}></Item>
    <ItemDate  day={response[1].itemDate} month={response[1].itemMonth} Year={response[1].itemYear}></ItemDate>

    <Item name={response[2].itemName} ></Item>
    <ItemDate day={response[2].itemDate} month={response[2].itemMonth} Year={response[2].itemYear}></ItemDate>
    <div className="App">
      Hello Ji
    </div></div>
    
  );
}

export default App;