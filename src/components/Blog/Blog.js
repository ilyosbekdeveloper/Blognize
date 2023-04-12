import React from 'react'
import './Blog.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap'
import { faImage, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

// images
import CarouselImg1 from '../../imgs/carousel07.jpg'
import CarouselImg2 from '../../imgs/carousel08.jpg'
import CarouselImg3 from '../../imgs/carousel09.jpg'
import CarouselImg4 from '../../imgs/carousel11.jpg'
import CarouselImg5 from '../../imgs/carousel10.jpg'


export default function Blog() {
  return (
    <div>
        <Container>
            <div className="blogTitle pb-0">
                <div className="d-flex align-items-center">
                    <span className='blogTitleIcon pe-2'><FontAwesomeIcon icon={faVolumeHigh} /></span>
                    <h3 className='blogTittleh1'>Today's top highlights</h3>
                </div>
                <p>Latest breaking news, pictures, videos, and special reports</p>
            </div>

            <div className="blogCarousel pb-0">
                <div className="row">
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide className='slides slide1'>
                      <div className="slideImgSection">
                        <img src={CarouselImg1} alt="" className='carouselImg'/>
                        <div className="topDec">8.5</div>
                        <div className="slideImgBtn1">Marketing<span></span></div>
                      </div>
                      <div className="slideDec">
                        <p className="slidePar mb-0">7 Common mistales everyonemakes while traveling</p>

                        <div className="comments d-flex align-items-center">
                          <div className="commentImg pe-2"><img src={CarouselImg1} alt="" className='commentImg'/></div>
                          <div className="commentName">By Lori ● <span className='ps-2'>Mar 07 2022</span></div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='slides slide2'>
                      <div className="slideImgSection">
                        <img src={CarouselImg2} alt="" className='carouselImg'/>
                        {/* <div className="topDec">8.5</div> */}
                        <div className="slideImgBtn1 slideBtn2">Sports<span></span></div>
                      </div>
                      <div className="slideDec">
                        <p className="slidePar mb-0">7 Common mistales everyonemakes while traveling</p>

                        <div className="comments d-flex align-items-center">
                          <div className="commentImg pe-2"><img src={CarouselImg2} alt="" className='commentImg'/></div>
                          <div className="commentName">By Dennis ● <span className='ps-2'>Mar 12 2022</span></div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='slides slide3'>
                      <div className="slideImgSection">
                        <img src={CarouselImg3} alt="" className='carouselImg'/>
                        {/* <div className="topDec">8.5</div> */}
                        <div className="slideImgBtn1 slideBtn3">Technalogy<span></span></div>
                      </div>
                      <div className="slideDec">
                        <p className="slidePar mb-0">7 Common mistales everyonemakes while traveling</p>

                        <div className="comments d-flex align-items-center">
                          <div className="commentImg pe-2"><img src={CarouselImg3} alt="" className='commentImg'/></div>
                          <div className="commentName">By Samuel ● <span className='ps-2'>Mar 02 2022</span></div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='slides slide4'>
                      <div className="slideImgSection">
                        <img src={CarouselImg4} alt="" className='carouselImg'/>
                        {/* <div className="topDec">8.5</div> */}
                        <div className="slideImgBtn1 slideBtn4">Marketing<span></span></div>
                      </div>
                      <div className="slideDec">
                        <p className="slidePar mb-0">7 Common mistales everyonemakes while traveling</p>

                        <div className="comments d-flex align-items-center">
                          <div className="commentImg pe-2"><img src={CarouselImg4} alt="" className='commentImg'/></div>
                          <div className="commentName">By Joan ● <span className='ps-2'>Mar 05 2022</span></div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='slides slide5'>
                      <div className="slideImgSection">
                        <img src={CarouselImg5} alt="" className='carouselImg'/>
                        <div className="topDec"><FontAwesomeIcon icon={faImage} /></div>
                        <div className="slideImgBtn1 slideBtn5">Photography<span></span></div>
                      </div>
                      <div className="slideDec">
                        <p className="slidePar mb-0">7 Common mistales everyonemakes while traveling</p>

                        <div className="comments d-flex align-items-center">
                          <div className="commentImg pe-2"><img src={CarouselImg5} alt="" className='commentImg'/></div>
                          <div className="commentName">By Bryan ● <span className='ps-2'>Mar 04 2022</span></div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="row py-3 pb-0">
                  <div className="py-4 pb-1 px-0">
                    <div className="imgPremium w-100">
                      <a href="#"><img src="https://blogzine.webestica.com/assets/images/adv-3.png" alt="" className='img-fluid w-100'/></a>
                      <span className='premiumSpan'></span>
                    </div>
                    <div className="Advertisement">Advertisement</div>
                  </div>
                </div>
            </div>
        </Container>
    </div>
  )
}
