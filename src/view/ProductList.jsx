import React, { useEffect, useState } from "react"
import Navbar from "../Component/Navbar/Navbar"
import { productList } from "../services/user-services";
import '../css/Profile.css'
import '../css/Background.css';
import '../Component/CardBody/ProductListCard.css';
import ProductListCard from "../Component/CardBody/ProductListCard";
import { addToCart, productQtyCount } from "../services/user-services";
import { useSelector, useDispatch } from "react-redux";
import { setCartCount } from "../redux/cartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const initialValues = {
    productId: '',
    userId: '',
    quantity: ''
  }

  const [products, setProducts] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  const [qtyCountMap, setQtyCountMap] = useState({});
  const [presentQtyMap, setPresentQtyMap] = useState({});

  useEffect(() => {
    const loadQuantities = async () => {
      try {
        const updatedQtyMap = {};
        const presentQty = {};
        const data = await productList();
        setProducts(data);

        console.log("product list ->", data);

        for (const product of data) {
          const qtyData = await productQtyCount(product.productId, user.userId);
          updatedQtyMap[product.productId] = qtyData.count || 0;
          presentQty[product.productId] = product.quantity || 0;
        }

        setQtyCountMap(updatedQtyMap);
        setPresentQtyMap(presentQty);
      } catch (err) {
        console.error("Failed to load product quantities", err);
      }
    };

    if (user?.userId) {
      loadQuantities();
    }
  }, [user?.userId]);

  const handleAddToCart = (product) => {
    console.log("add to cart product ->", product);

    const values = {
      ...initialValues,
      productId: product.productId,
      userId: user.userId,
      quantity: 1
    };
    addToCart(values).then((response) => {
      console.log("add to cart values->", response);
      dispatch(setCartCount(response.productCount))
      setQtyCountMap(prev => ({
        ...prev,
        [product.productId]: (prev[product.productId] || 0) + 1
      }));

    }).catch((error) => {
      console.log(error);
    })
  };


  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="container-root" >
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                {products?.map((product) => (
                  <ProductListCard key={product.productId} product={product} addButton={handleAddToCart} qtyCount={qtyCountMap[product.productId] || 0} presentProductQty={presentQtyMap[product.productId || 0]} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductList;
