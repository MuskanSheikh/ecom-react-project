import React from 'react'
import Navbar from '../Component/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getByProductId, productQtyCount, addToCart } from '../services/user-services';
import Footer from './Footer';
import TextInput from '../Component/Input/TextInput';
import Button from '../Component/Button/Button';
import { useSelector } from 'react-redux';

function ProductView() {

    const user = useSelector((state) => state.auth.user);
    const initialValues = {
        productId: '',
        userId: '',
        quantity: ''
    }
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [qtyCount, setQtyCount] = useState(0);
    const [presentQty, setPresentQty] = useState(0);


    useEffect(() => {
        if (productId) {
            const fetchProduct = async () => {
                try {
                    const data = await getByProductId(productId);
                    setProduct(data);
                    console.log(" get by product Id ->", product);
                    setPresentQty(data.quantity);
                } catch (err) {
                    console.error("Failed to load product", err);
                }
            };
            fetchProduct();

        }

    }, []);

    useEffect(() => {
        const cartCount = async () => {
            try {
                const data = await productQtyCount(productId, user.userId);
                console.log("product count data->", data);
                if (data.count > 0) {
                    setQtyCount(data.count);
                }

            } catch (err) {
                console.error("Failed to load cart count", err);
            }
        }
        if (user?.userId) {
            cartCount();
        }

    }, [user?.userId])

    const handleDecrease = () => {
        setQtyCount(prev => (prev > 1 ? prev - 1 : 1));
    };

    const handleIncrease = () => {
        setQtyCount(prev => prev + 1);
    };

    const handleAddToCart = async () => {
        console.log("qty count ->",qtyCount);
        const values = {
            ...initialValues,
            productId: product.productId,
            userId: user.userId,
            quantity: qtyCount
        };
        addToCart(values).then((response) => {
            console.log("add to cart values->", response);

        }).catch((error) => {
            console.log(error);
        })
    };

    if (!product) {
        return <div>Loading product...</div>;
    }
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <div className="border rounded-4 mb-3 d-flex justify-content-center">
                                <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" >
                                    <img
                                        src={`/product-images/${product?.fileName}`}
                                        className="rounded-4 fit"
                                        style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }}
                                        alt={product?.productName}
                                    />
                                </a>
                            </div>
                        </aside>
                        <main className="col-lg-6">
                            <div className="ps-lg-3">
                                <h4 className="title text-dark">
                                    {product.productName}
                                </h4>
                                {}
                                <div className="d-flex flex-row my-3">
                                    <span className="text-success ms-2">
                                    {presentQty <= 5 ? `Hurry only ${presentQty} left!` : 'In stock'}
                                    </span>
                                </div>

                                <div className="mb-3">
                                    <span className="h5 text-muted text-decoration-line-through" style={{ marginRight: '10px' }}>{product.oldPrice}</span>
                                    <span className="h5 text-muted">{product.newPrice}</span>
                                </div>

                                <p className='h5'>{product.description}</p>
                                <hr />

                                <div className="row mb-4">
                                    <div className="col-md-4 col-6">
                                        <label className="mb-2">Size</label>
                                        <select className="form-select border border-secondary" style={{ height: '35px' }}>
                                            <option>Small</option>
                                            <option>Medium</option>
                                            <option>Large</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 col-6 mb-3">
                                        <label className="mb-2 d-block">Quantity</label>
                                        <div className="input-group mb-3" style={{ width: '170px' }}>
                                            <Button className="btn btn-white border border-secondary px-3" type="button" icon="fa-minus" onClick={handleDecrease} />
                                            <TextInput type="text" className="form-control text-center border border-secondary" value={qtyCount} readOnly />
                                            <Button className="btn btn-white border border-secondary px-3" type="button" icon="fa-plus" onClick={handleIncrease} />
                                        </div>
                                    </div>

                                </div>
                                {qtyCount < 1 ? (
                                    <button className="btn btn-primary shadow-0" onClick={handleAddToCart}>
                                        <i className="me-1 fa fa-shopping-basket"></i> Add to cart
                                    </button>
                                ) : (
                                    <button className="btn btn-success shadow-0" onClick={handleAddToCart}>
                                        <i className="me-1 fa fa-check"></i> Update Cart ({qtyCount})
                                    </button>
                                )}

                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductView;