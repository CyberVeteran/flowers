import React from "react";

const Catalog = () => {
    const products = [
        { id: 1, name: 'Тюльпани', price: 50, imageUrl:"https://leto.ua/img/articles/1643722275_54a4507c816ece500c8f.jpg" },
        //{ id: 2, name: 'Ромашки', price: 30 },
        //{ id: 3, name: 'Хризантеми', price: 40 },
    ];

    return (
        <div>
            <h1>Каталог квітів</h1>
            <ul>
                {products.map((product) => (
                    <div className="flower-item"  key={product.id}  >
                        <li >
                            <p >{product.name} - {product.price} грн </p>
                            <img  src={product.imageUrl} alt={product.name} className="flower-image" />

                        </li></div>
                ))}
            </ul>
        </div>
    );
};
export default Catalog