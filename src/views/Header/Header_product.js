import mainBg from '../../assets/image/bes-bg.png';
import bg1 from '../../assets/image/best-image-01.png';
import bg2 from '../../assets/image/best-image-02.png';
import bg3 from '../../assets/image/best-image-03.png';
import goImg from '../../assets/image/go-icon.png';
import sunImg from '../../assets/image/producticon-bg.png';

function Header_main() {
    return (
        <div className="Header__Prd" style={{backgroundImage: `url(${mainBg})`}}>
           <div className="grid wide">
                <div className="Header__Prd-title">
                    <h1>BEST PRODUCT</h1>
                    <p>How to create mobile-optimized videos in minutes. Not a designer, <br/>
                        every team makes a lot of videos Can be trimmed. Take the first 
                    </p>
                </div>
                <div className="row no-gutter">
                    <div className="col l-4 m-4 c-12 Header__Prd-item" style={{backgroundImage: `url(${bg1})`}}>
                        <div className="Header__Prd-itemImage" style={{backgroundImage: `url(${sunImg})`}}>
                            <h3>01</h3> 
                        </div>
                        <div className="Header__Prd-Text">
                            <div className="Header__Prd-title">
                                <h4>How to create moible optimized</h4>
                            </div>
                            <div className="Header__Prd-imgGo">
                                <img src={goImg}/>
                            </div>
                        </div>
                    </div>

                    <div className="col l-4 m-4 c-12 Header__Prd-item" style={{backgroundImage: `url(${bg2})`}}>
                        <div className="Header__Prd-itemImage" style={{backgroundImage: `url(${sunImg})`}}>
                            <h3>02</h3> 
                        </div>
                        <div className="Header__Prd-Text">
                            <div className="Header__Prd-title">
                                <h4>How to create moible optimized</h4>
                            </div>
                            <div className="Header__Prd-imgGo">
                                <img src={goImg}/>
                            </div>
                        </div>
                    </div>

                    <div className="col l-4 m-4 c-12 Header__Prd-item" style={{backgroundImage: `url(${bg3})`}}>
                        <div className="Header__Prd-itemImage" style={{backgroundImage: `url(${sunImg})`}}>
                            <h3>03</h3> 
                        </div>
                        <div className="Header__Prd-Text">
                            <div className="Header__Prd-title">
                                <h4>How to create moible optimized</h4>
                            </div>
                            <div className="Header__Prd-imgGo">
                                <img src={goImg}/>
                            </div>
                        </div>
                    </div>

                </div>
           </div>
        </div>
    )
}

export default Header_main;