
import ProductItem from './ProductItem'
import { Images } from '../../../assets/index';


function Container_Product()  {
 
    return (
        <div className="container__product">
            <div className="grid wide">
                <div className="row ">
                    {
                        Images.map((item,index) => {
                            return (
                                <ProductItem key={index} img={item} />
                            )
                        })
                    }   
                </div>
                <div className="container__btn">
                    <button>SEE MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Container_Product;