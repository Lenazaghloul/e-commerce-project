import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../Store/Slice/CartSlice";

export default function ProductCard(props) {
  const { product, btn, clickHandler, handleNavigate } = props;
  console.log(props);

  const dispatch = useDispatch()
  const handleButtonClick = (event) => {
    event.stopPropagation();
    dispatch(addToCart({...product,quantity:1}))
    // navigateCart(product.id);
  };

return (
    <div className=" border border-0 text-start">
      <img src={product.thumbnail} class="card-img-top" alt="..." />
      {product.stock == 0 ? (
          <span className="badge bg-danger top-0 start-0 my-2">
            Out Of Stock
          </span>
        ) : (
          <span className="badge bg-success top-0 start-0 my-2">
            In Stock
          </span>
        )}

      <div className="card-body">
        <div>
        <span className="badge rounded-pill text-bg-secondary mt-2">
          {product.brand}
        </span>
       
        </div>
        
        <h5 className="card-title row justify-content-center">
          {product.title}
        </h5>

        <p className="card-text">{product.description.substr(0, 25)}</p>
        <p className="text-success">Rating : {product.rating}</p>

        <button onClick={() => handleNavigate(product.id)}>view</button>

        <button variant="btn btn-outline-success rounded-5 px-4"  onClick = {handleButtonClick}>
          Add To Cart
        </button>

        {/* <button onClick={() => clickHandler(product.id)}>{btn}</button> */}
      </div>
      {/* {products.images.map((images) => (
        <img src={images} class="card-img-top" alt="..." />
    ) )} */}

      <div className="card-footer">
        <small className="text-body-secondary">Price : {product.price} $</small>
      </div>
    </div>
  );
}
