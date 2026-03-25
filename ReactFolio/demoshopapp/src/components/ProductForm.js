import './ProductForm.css';
import './NewProduct';
import { useState } from 'react';


function ProductForm(props) {

    // const [fullProductInput, setfullProductInput]= useState({
    //     title:'',
    //     date:''
    // });


    const [newtitle, setTitle]=useState('');
    const [newdate, setDate]=useState('');

    //  function titleChangeHandle(event,prevState)  {
    //     let obj= {...prevState, title:event.target.value};
    //     console.log(obj);
    //     return obj;
        
    //  }

    //     setTitle(event.target.value);
    //     console.log(event.target.value);
        
    // }

    function titleChangeHandle(event) {
        setTitle(event.target.value);
    }
    function dateChangeHandler(event) {
        setDate(event.target.value);
        // console.log(event.target.value);
        // console.log(date);
        
    }

    function submitHandler(event) {
        event.preventDefault();

    const productData= {
        title:newtitle,
        date:newdate
    };
    //console.log(productData);

    setTitle('');
    setDate('');    
    props.onSaveProduct();
    }

    return(<form onSubmit={submitHandler}>
        <div className='new-product_controls'>
            <div className='new-product_control'>
            <label>Title</label>
            <input type="text" value={newtitle} onChange={titleChangeHandle}></input>
        </div>
        <div className='new-product_control'>
            <label>Date</label>
            <input type="date"  value={newdate} onChange={dateChangeHandler}min='2025-01-01' max='2025-12-31'></input>
        </div>
        <div className='new-product_button'>
            <button type='submit'>Add to Cart</button>
        </div>
        
        </div>
        

    </form>)
}

export default ProductForm;