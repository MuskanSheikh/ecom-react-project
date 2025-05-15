import React from 'react'
import { Link } from 'react-router-dom';

const ProductListCard = ({ product, addButton, qtyCount,presentProductQty }) => {

  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm border-0 rounded-3">
          <Link to={`/product-detail/${product.productId}`}>
            <img
              src={`/product-images/${product.fileName}`}
              className="card-img-top"
              style={{ height: '400px', width: '100%' }}
              alt={product.productName}
            />
          </Link>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title mb-2">{product.productName}</h5>
            <p className="card-text text-muted mb-1">{product.description}</p>
            <div className="d-flex flex-row my-3">
              <span className="text-success ms-2">
              {presentProductQty <= 5 ? `Hurry only ${presentProductQty} left !` : 'In stock'}
              </span>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <h6 className=" mb-3 text-decoration-line-through">₹{product.oldPrice}</h6>
              </div>
              <div className="col-sm-3">
                <h6 className=" mb-3">₹{product.newPrice}</h6>
              </div>
            </div>
            {qtyCount < 1 ? (
              <button className="btn btn-outline-primary mt-auto" onClick={() => addButton(product)}>
                <i className="bi bi-cart-plus me-2"></i> Add to Cart
              </button>
            ) : (
              <button className="btn btn-outline-warning mt-auto" onClick={() => alert("Product is already in the cart")}>
                <i className="bi bi-cart-plus me-2"></i> Already in Cart
              </button>
            )}

          </div>
        </div>
      </div>
    </>
  )
}

export default ProductListCard;