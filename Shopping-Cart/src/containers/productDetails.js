import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { fetchProductDetail, removeSelectedProducts} from "../redux/actions/productActions";

const ProductDetails = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product)

    const {image, title, price, category} = product;
    
    useEffect(() => {
        if(productId && productId !== ""){
            dispatch(fetchProductDetail(productId));
        }
        return () => {
            dispatch(removeSelectedProducts());
        }
    }, [productId])

    return(
          <div className="ui link cards">
              {
                  Object.keys(product).length === 0 ?
                    <div>...Loading</div>
              :
              <div className="card">
                  <div className="image">
                      <img src={image} alt={title} />
                  </div>
                  <div className="content">
                      <div className="header">
                          {title}
                      </div>
                      <div className="meta price">
                          ${price}
                      </div>
                      <div className="meta">
                          {category}
                      </div>
                  </div>
              </div>
            }
          </div>
    )
}

export default ProductDetails;
