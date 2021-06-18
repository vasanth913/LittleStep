import  React, { useEffect } from "react";
import ProductComponent from "./productComponent";
import { useDispatch, useSelector} from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";

const ProductListing = () => {

     const products = useSelector((state) => state.allProducts);
     const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    },[]);

    return(
      <div className="ui grid container" style={{paddingTop: '5.2rem'}}>
        <ProductComponent />
      </div>
    )
}

export default ProductListing;
