import { ImageBrand} from '../../../assets/index';

function Brand1() {
    return (
        <div className="container__brand-bg1">
            <div className="container__brand-title">
                <h1>BRAND STORY</h1>
                <p>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                </p>
            </div>
            <div className="container__brand_window">
                <img   src={ImageBrand[7]}/>
                <div className="container__brand-content">
                    <h3>WHAT HAPPENDED'S BRAND STORY</h3>
                    <p>청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 <br/>
                        봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는 <br />
                        긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고 <br />
                        인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 <br />
                        아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. 
                    </p>
                    <button>SEE MORE</button>
                </div>
            </div>
            <img className="brand1" src={ImageBrand[0]}/>
            <img className="brand2" src={ImageBrand[1]}/>
            <img className="brand3" src={ImageBrand[2]}/>
            <img className="brand4" src={ImageBrand[3]}/>
            <img className="brand5" src={ImageBrand[4]}/>
            <img className="brand6" src={ImageBrand[5]}/>
            <img className="brand7" src={ImageBrand[6]}/>
        </div>
    )
}

export default Brand1;