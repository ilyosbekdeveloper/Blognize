import React from 'react'
import './Footer.scss'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <Container>
      <footer className='pt-5 pb-5'>
        <div className="row">
          <div className="col-4">
            <div className="blognize">
              <img src="https://blogzine.webestica.com/assets/images/logo.svg" alt="" className="blognize" />
              <p className="par3 pb-3">
                The next-generation blog, news, and magazine theme for you to start sharing your
                stories today! This Bootstrap 5 based theme is ideal for all types of sites that deliver the news.
              </p>
                <div className="tarif">
                  ©2023 Webestica. All rights reserved
                </div>
            </div>
          </div>

          <div className="col-3">
            <div className="navigation pb-3">Navigation</div>
            <div className="row">
              <div className="col-6 navigationUl">
                <ul className='p-0'>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Style Guide</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Get Theme</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>

              <div className="col-6 navigationUl2">
                <ul>
                  <li><a href="#">News</a></li>
                  <li>
                    <a href="#">Career</a>
                    <span className='ulSpan'>2 Job</span>
                    </li>
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">Startups</a></li>
                  <li><a href="#">Gadgets</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="browse">Browse by Tag</div>

            <div className="">
              <div className="btns btng">
                  <div className="row">
                    <div className="col-12">
                    <button className='btn btn1 mx-2'>Travel</button>
                    <button className='btn btn2 mx-2'>Buisness</button>
                    <button className='btn btn3 mx-2'>Tech</button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                    <button className='btn btn4 mx-2'>Gadgets</button>
                    <button className='btn btn5 mx-2'>Lifestyles</button>
                    </div>
                  </div>
                  <button className='btn btn6 mx-2'>Vaccinae</button>
                  <button className='btn btn2 mx-2'>Marketing</button>
                  <button className='btn btn7 mx-2'>Sports</button>
                  <button className='btn btn8 mx-2'>Covid 19</button>
                  <button className='btn btn9 mx-2'>Politics</button>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="social browse">Our Social handles</div>
            <div className="row">
              <div className="col-12">
                <div className="socialIcons">
                  <div className="socialIcon socialIcon1">
                    <div className="iconSection pe-3"><img src="https://barod.cymru/wp-content/uploads/2020/07/facebook-icon-transparent-background-3.png" alt="" /></div>
                    <div className="iconDescription">Facebook</div>
                  </div>
                  <div className="socialIcon socialIcon1">
                    <div className="iconSection pe-3"><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="" /></div>
                    <div className="iconDescription">Twitter</div>
                  </div>
                  <div className="socialIcon socialIcon1">
                    <div className="iconSection pe-3"><img src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png" alt="" /></div>
                    <div className="iconDescription">Linkedin</div>
                  </div>
                  <div className="socialIcon socialIcon1">
                    <div className="iconSection pe-3"><img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png" alt="" /></div>
                    <div className="iconDescription">You tube</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  )
}
