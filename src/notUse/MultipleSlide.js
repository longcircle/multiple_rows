import "./CarouselTesT.css";
import { useEffect, useRef, useState } from "react";
import InnerContainer from "../InnerContainer";

function CarouselTesT() {
  const container_Carousel = useRef();
  const Dot1 = useRef();
  const Dot2 = useRef();
  const [nowX, setNowX] = useState(0);

  useEffect(() => {
    container_Carousel.current.style.transform = `translateX(${nowX}px)`;
  }, [nowX]);

  // useState 말고 useEffect를 이용해야할듯.
  const Button = (e) => {
    if (parseInt(e.target.value) === 0) {
      setNowX((prop) => 0);
      Dot1.current.style.backgroundColor = "orange";
      Dot2.current.style.backgroundColor = "";
    } else if (parseInt(e.target.value) === -1) {
      setNowX((prop) => e.target.value * 960);
      Dot2.current.style.backgroundColor = "orange";
      Dot1.current.style.backgroundColor = "";
    }
  };

  return (
    <div className="container">
      <div className="module_title">
        <h2>믿고 보는 맛집 리스트</h2>
        <a href="about:blank">리스트 더보기</a>
      </div>
      {nowX === 0 ? (
        <button className="right" onClick={Button} value={-1}></button>
      ) : (
        <button className="left" onClick={Button} value={0}></button>
      )}

      <div className="body">
        <div className="container_Carousel" ref={container_Carousel}>
          <div className="inner">
            <div className="inner_container">
              <img
                src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/gwjm44q804mbmvji.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                alt=""
              />
              <a href="https://www.mangoplate.com/">
                <span className="title">맛집11111111111111</span>
                <p>주소11111111111111</p>
              </a>
            </div>
            <div className="inner_container">
              <img
                src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/dkiovygfrwyedw_r.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                alt=""
              />
              <a href="https://www.mangoplate.com/">
                <span className="title">맛집2222222222</span>
                <p>주소2222222222</p>
              </a>
            </div>
          </div>
          <div className="inner">
            <div className="inner_container">
              <img
                src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/xp8tqpzvpnkze1up.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                alt=""
              />
              <a href="https://www.mangoplate.com/">
                <span className="title">맛집3333333333333</span>
                <p>주소3333333333333</p>
              </a>
            </div>
            <div className="inner_container">
              <img
                src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/j32ez3ban9-rxaur.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                alt=""
              />
              <a href="https://www.mangoplate.com/">
                <span className="title">맛집4444444444444444444</span>
                <p>주소444444444444444444</p>
              </a>
            </div>
          </div>
          <div className="inner">
            <div className="inner_container">
              <img
                src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/pgzkxfxjdtfhpxrh.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                alt=""
              />
              <a href="https://www.mangoplate.com/">
                <span className="title">맛집555555555555555555</span>
                <p>주소555555555555555555555555</p>
              </a>
            </div>
            <div className="inner_container">
              <img
                src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/zwh3kvnq1aiwzjjy.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                alt=""
              />
              <a href="https://www.mangoplate.com/">
                <span className="title">맛집666666666666666666666</span>
                <p>주소66666666666666666666</p>
              </a>
            </div>
          </div>
          <div className="inner">
            <div className="inner_container">
              <img
                src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/zn-9npqsx9hugpzb.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                alt=""
              />
              <a href="https://www.mangoplate.com/">
                <span className="title">맛집77777777777777777777777777</span>
                <p>주소777777777777777777777</p>
              </a>
            </div>
            <div className="inner_container">
              <img
                src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/bk2rrl18v7kdrjds.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                alt=""
              />
              <a href="https://www.mangoplate.com/">
                <span className="title">맛집888888888888888888888888888</span>
                <p>주소888888888888888888888888</p>
              </a>
            </div>
          </div>
          <div className="inner">
            <div className="inner_container">
              <img
                src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/yollmteq-ktxy6ec.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                alt=""
              />
              <a href="https://www.mangoplate.com/">
                <span className="title">맛집999999999999999999999</span>
                <p>주소999999999999999999999</p>
              </a>
            </div>
            <div className="inner_container">
              <img
                src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/sjfnxiidoh22pp-4.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                alt=""
              />
              <a href="https://www.mangoplate.com/">
                <span className="title">맛집1010101010101010</span>
                <p>주소10101010101010101010</p>
              </a>
            </div>
          </div>
          <div className="inner">
            <div className="inner_container">
              <img
                src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/of-6ku6surah9hjs.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                alt=""
              />
              <a href="https://www.mangoplate.com/">
                <span className="title">맛집111111111111111111</span>
                <p>주소11111111111111111111111111</p>
              </a>
            </div>
            <div className="inner_container">
              <img
                src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/xzxz-ozjnlzqugrv.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
                alt=""
              />
              <a href="https://www.mangoplate.com/">
                <span className="title">맛집121212121212121212</span>
                <p>주소12121212121212121212</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="dotBtn_container">
        <button
          value={0}
          onClick={Button}
          ref={Dot1}
          style={{ backgroundColor: "orange" }}
        ></button>
        <button value={-1} onClick={Button} ref={Dot2}></button>
      </div>
    </div>
  );
}

export default CarouselTesT;
