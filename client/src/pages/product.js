// Item Name
// Update Category
// Image
// quantitycreate/update
// delete

export const Product = () => {
  return console.log("hello");
  // <div className="blurring dimmable image">
  //   <div className="ui dimmer">
  //     <div className="content">
  //       <div class="center">
  //         <div className="ui inverted button">|ITEM NAME HERE|</div>
  //       </div>
  //     </div>
  //   </div>
  //   <img src="/images/avatar/large/elliot.jpg" />
  // </div>
};

// example code
// return (
//   <>
//     {currentProduct && cart ? (
//       <div className="container my-1">
//         <Link to="/">← Back to Products</Link>

//         <h2>{currentProduct.name}</h2>

//         <p>{currentProduct.description}</p>

//         <p>
//           <strong>Price:</strong>${currentProduct.price}{" "}
//           <button onClick={addToCart}>Add to Cart</button>
//           <button
//             disabled={!cart.find((p) => p._id === currentProduct._id)}
//             onClick={removeFromCart}
//           >
//             Remove from Cart
//           </button>
//         </p>

//         <img
//           src={`/images/${currentProduct.image}`}
//           alt={currentProduct.name}
//         />
//       </div>
//     ) : null}
//     {loading ? <img src={spinner} alt="loading" /> : null}
//     <Cart />
//   </>
// );

export default Product;
