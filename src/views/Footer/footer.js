import './footer.scss';
import img1 from '../../assets/image/snsicon-01.png';
import img2 from '../../assets/image/snsicon-02.png';
import img3 from '../../assets/image/snsicon-03.png';

function Footer() {
    return (
        <div className="footer">
           <div className="grid wide">
               <div className="footer__title">
                    <div className="row">
                        <div className="footer__title-left col l-6 m-12 c-12">
                            <h3>What happend</h3>
                            <ul>
                                <li><a>[공지] 개인 정보 처리 방침 변경 사전 안내</a></li>
                                <li><a>[공지] 29CM 강남 스토어 영업 종료</a></li>
                                <li><a>[공지] 개인 정보 처리 방침 변경 사전 안내</a></li>
                                <li><a>[공지] iOS 10 이하 버전 지원 중단 안내</a></li>
                                <li><a>[공지] 개인 정보 처리 방침 변경 사전 안내</a></li>
                            </ul>
                        </div>
                        <div className="footer__title-right col l-6 m-12 c-12">
                            <div className="row footer__title-list">
                                <div className="footer__title-item col l-3 m-3 c-6">
                                    <h3>About us</h3>            
                                    <ul>
                                        <li><a>회사 소개</a></li>
                                        <li><a>인재 채용</a></li>
                                        <li><a>상시 할인 혜택</a></li>
                                    </ul>
                                </div>

                                <div className="footer__title-item col l-3  m-3 c-6">
                                    <h3>My order</h3>            
                                    <ul>
                                        <li><a> 내 주문</a></li>
                                        <li><a>주문 배송</a></li>
                                        <li><a>취소 / 교환 / 반품 내역</a></li>
                                        <li><a>상품 리뷰 내역</a></li>
                                        <li><a>증빙 서류 발급</a></li>
                                    </ul>
                                </div>

                                <div className="footer__title-item col l-3  m-3 c-6">
                                    <h3>My account</h3>            
                                    <ul>
                                        <li><a> 회원 정보 수정</a></li>
                                        <li><a>마일리지 현황</a></li>
                                        <li><a>쿠폰</a></li>
                                    </ul>
                                </div>

                                <div className="footer__title-item col l-3  m-3 c-6">
                                    <h3>Help</h3>            
                                    <ul>
                                        <li><a>1 : 1 상담 내역</a></li>
                                        <li><a>상품 Q &#38; A 내역</a></li>
                                        <li><a>공지 사항</a></li>
                                        <li><a>자주하는 질문</a></li>
                                        <li><a>고객의 소리</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
               </div>
               <div className="footer__info">
                    <div className="row">
                        <div className="footer__info-text col l-6  m-12 c-12">
                            <p>© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</p>
                        </div>
                        <div className="footer__info-icon col l-6 m-12 c-12">
                            <img src={img1} alt="icon"/>
                            <img src={img2} alt="icon"/>
                            <img src={img3} alt="icon"/>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default Footer;