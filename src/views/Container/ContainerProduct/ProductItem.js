

const ProductItem = ({img}) => {
    return (
        <div className="col l-2-4 m-4 c-6 container__product-item">
            <img src={img}/>
            <p>[What happen] How to create</p>
            <div className="container__product-itemPrice">
                <span>2,500 won</span>
                <div className="container__product-itemIcon">
                    <i className="fas fa-heart"></i>
                    <span>236</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;