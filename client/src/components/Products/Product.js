// import React, { Component } from "react";

// export default class Products extends Component {
//   render() {
//     const { _id, imageUrl, title, price, comments, url } = this.props.product;

//     return (
//       <div className="product-card" key={_id}>
//         <img src={imageUrl} className="product-card__image" alt={imageUrl} />
//         <div className="product-card__info">
//           <h1 className="product-card__title">{title}</h1>
//           <span className="product-card__price">
//             {price.toLocaleString("pt-br", {
//               style: "currency",
//               currency: "BRL",
//             })}
//           </span>
//           <footer className="product-card__footer">
//             {comments.length > 0 && (
//               <div className="product-card__comment">
//                 "{comments[0].comment}"
//               </div>
//             )}
//             <div className="product-card__comments-count">
//               {comments.length}{" "}
//               {comments.length > 1 ? "Comentários" : "Comentário"}
//             </div>
//             <a
//               href={url}
//               target="_blank"
//               className="product-card__link"
//               rel="noopener noreferrer"
//             >
//               IR PARA O SITE
//             </a>
//           </footer>
//         </div>
//       </div>
//     );
//   }
// }
