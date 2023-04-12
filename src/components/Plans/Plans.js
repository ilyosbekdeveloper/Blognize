import React from 'react'
import './Plans.scss'
import { faBookmark, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap'

import CarouselImg1 from '../../imgs/carousel07.jpg'

export default function Plans() {
  return (
    <Container className='Plans'>
        <div className="plansTitle mx-0 pt-2 pb-3">
            <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faBookmark} className='plansIcon'/>
                <span className='ms-2'>Last week top highlights</span>
            </div>
            <p>Check last weeks top highlights, news, stories and headline news Business  Sponsored</p>
        </div>

        <div className="row pb-4">
            <div className="col-7">
                <div className="plansCol7Img">
                    <div className="overflow-hidden overflow-hidden1"><img src="https://www.wallpaperflare.com/static/340/18/354/nature-landscape-paragliding-aerial-view-wallpaper.jpg" alt="" className='userSelect' /></div>

                    <div className="plansTitlesWrapper">
                        <div className="PlansBtnSection d-flex align-items-center">
                            <button className="plansBtn1 pe-3">
                                <span></span>
                                <span>Buisnes</span>
                            </button>
                            <button className="plansBtn2">
                                <span><FontAwesomeIcon icon={faCircleExclamation}/></span>
                                <span>Sponsored</span>
                            </button>
                        </div>
                        <div className="PlansTitle">
                            <h3>Never underistimate the infulence of social media</h3>

                            <div className="carolyn d-flex align-items-center">
                                <img src={CarouselImg1} alt="" className="carolynImg" />
                                <span className='ps-2 pe-2'>by Carolyn</span> <small className='pe-2'>●</small>
                                <span className='ps-2 pe-2'>Jan 26,2022</span> <small className='pe-2'>●</small>
                                <span>3 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-5">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-4">
                                <img src="https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg" alt="" className="hotel rounded" />
                            </div>
                            <div className="col-8">
                                <div className="lifeBtn1 lifeBtn">Lifestyle</div>
                                <div className="lifeTitle"><h4>The Props and cons of buisnes agensy</h4></div>

                                <div className="customComment">
                                    <div className="customCommentImg"><span className='pt'>PT</span></div>
                                    <div className="byPersons">
                                        <div className="who">by <a href="#">Samuel</a></div>
                                        <div className='custom-circle'></div>  
                                        <div className="customDate">Jan 22,2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <img src="https://blogzine.webestica.com/assets/images/blog/4by3/02.jpg" alt="" className="hotel rounded" />
                            </div>
                            <div className="col-8">
                                <div className="lifeBtn2 lifeBtn">Sports</div>
                                <div className="lifeTitle"><h4>The Props and cons of buisnes agensy</h4></div>

                                <div className="customComment">
                                    <div className="customCommentImg"><span className='pt'><img src="https://blogzine.webestica.com/assets/images/avatar/02.jpg" alt="" /></span></div>
                                    <div className="byPersons">
                                        <div className="who">by <a href="#">Dennis</a></div>
                                        <div className='custom-circle'></div>  
                                        <div className="customDate">Jan 15,2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <img src="https://blogzine.webestica.com/assets/images/blog/4by3/03.jpg" alt="" className="hotel rounded" />
                            </div>
                            <div className="col-8">
                                <div className="lifeBtn3 lifeBtn">Buisness</div>
                                <div className="lifeTitle"><h4>The Props and cons of buisnes agensy</h4></div>

                                <div className="customComment">
                                    <div className="customCommentImg"><span className='pt'><img src="https://blogzine.webestica.com/assets/images/avatar/03.jpg" alt="" /></span></div>
                                    <div className="byPersons">
                                        <div className="who">by <a href="#">Bryan</a></div>
                                        <div className='custom-circle'></div>  
                                        <div className="customDate">Fev 07,2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <img src="https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg" alt="" className="hotel rounded" />
                            </div>
                            <div className="col-8">
                                <div className="lifeBtn4 lifeBtn">Technalogy</div>
                                <div className="lifeTitle"><h4>Around the web: 20 fabulous infographics about business</h4></div>

                                <div className="customComment">
                                    <div className="customCommentImg"><span className='pt'><img src="https://blogzine.webestica.com/assets/images/avatar/05.jpg" alt="" /></span></div>
                                    <div className="byPersons">
                                        <div className="who">by <a href="#">Jaquiline</a></div>
                                        <div className='custom-circle'></div>  
                                        <div className="customDate">Sep 29,2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}
