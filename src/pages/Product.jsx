import React ,{useContext} from 'react';
import {ShopContext}  from '../Context/ShopContext';
import {useParams} from 'react-router-dom';
// import Breadcrum from '../components/Breadcrums/Breadcrum'
import ProductDisplay from '../components/productDisplay/ProductDisplay';
const Product = () => {
    const {all_products}=useContext(ShopContext);
    const {productId}=useParams();
    const product=all_products.find((e)=>e.category===(productId));
    if (!product) {
      console.error(`Product with ID ${productId} not found.`);
      return <div>Product not found</div>;
    }

    // console.log('Product:',product.image);
  return (
    <div>
        {/* <Breadcrum product={product}/> */}
     <ProductDisplay product={product} />
</div>

    // <div>
    //   {all_products && all_products.map(product => (
    //     <div key={product.id}>
    //       <img src={product.image} alt={product.name} />
    //       <h3>{product.name}</h3>
    //       <p>Category: {product.category}</p>
    //       <p>New Price: ${product.new_price}</p>
    //       <p>Old Price: ${product.old_price}</p>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Product;
