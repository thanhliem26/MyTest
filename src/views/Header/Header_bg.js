import imgMain from '../../assets/image/header_main.png';
import imgBg from '../../assets/image/header_bg.png';

function Header_Product() {
    return (
        <div className="Header__product">
           <img src={imgMain}/>
           <div className="Header_product-title" style={{backgroundImage: `url(${imgBg})`}}>
                {/* <img  src={imgBg} /> */}
                <div className="Header_product-content">
                    <h1>WHAT HAPPENED!</h1>
                    <p>How to create mobile-optimized videos in minutes. Not a designer, <br/>
                        every team makes a lot of videos Can be trimmed.<br/> Take the first 
                        step to your brand's success. <br/>How to create 
                        mobile-optimized videos in minutes.
                    </p>
                </div>
           </div>
        </div>
    )
}

export default Header_Product;