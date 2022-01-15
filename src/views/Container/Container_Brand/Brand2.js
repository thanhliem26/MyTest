import {ImageBrand2} from '../../../assets/index';


function Brand2 () {
    return (
        <div className="container__brand-bg2">
            <div className="container__brand-Top">
                <div className="container__brand-Text">
                    <h1>HAPPEND'S ISSUE</h1>
                    <p>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 <br />
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                    </p>
                    <button>SEE MORE</button>
                </div>
                <img className="brand2__1" src={ImageBrand2[1]}  alt="Brand"/>
                <img className="brand2__2" src={ImageBrand2[6]} alt="Brand"/>
            </div>
            <div className="container__brand-Bot">
                <div className="grid">
                    <div className="row no-gutter">
                        <div className="container__brand2-item main l-2-4">
                            <h1>WHPN ISSUE</h1>
                            <img src={ImageBrand2[0]} alt="Brand"/>
                            <img className="img" src={ImageBrand2[5]} alt="Brand"/>
                        </div>

                        <div className="container__brand2-item other  l-2-4">
                            <h1>B BRAND</h1>
                            <img src={ImageBrand2[9]} alt="Brand"/>
                            <div className="container__brand-itemImg">
                                <h3>HOT</h3>
                            </div>
                        </div>

                        <div className="container__brand2-item other  l-2-4">
                            <h1>C BRAND</h1>
                            <img src={ImageBrand2[2]} alt="Brand"/>
                           
                        </div>

                        <div className="container__brand2-item other  l-2-4">
                            <h1>D BRAND</h1>
                            <img src={ImageBrand2[3]} alt="Brand"/>
                           
                        </div>

                        <div className="container__brand2-item other  l-2-4">
                            <h1>E BRAND</h1>
                            <img src={ImageBrand2[4]} alt="Brand"/>
                            <img className="imgl" src={ImageBrand2[8]} alt="Brand"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand2;