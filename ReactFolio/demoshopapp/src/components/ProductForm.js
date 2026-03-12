import './ProductForm.css';
import './NewProduct';

function ProductForm() {

    function titleChangeHandle(event)  {
        console.log(event.target.value);
        
    }
    return(<form>
        <div className='new-product_controls'>
            <div className='new-product_control'>
            <label>Title</label>
            <input type="text" onChange={titleChangeHandle}></input>
        </div>
        <div className='new-product_control'>
            <label>Date</label>
            <input type="date" min='2025-01-01' max='2025-12-31'></input>
        </div>
        <div className='new-product_button'>
            <button type='submit'>Add to Cart</button>
        </div>
        
        </div>
        

    </form>)
}

export default ProductForm;