import React from 'react'
import './Sponsored.scss'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Sponsored() {
  return (
    <div className='sponsored container pt-5'>
        <div className="sponsoredTitle">
            <div className="leftSponsor d-flex align-items-center">
                <FontAwesomeIcon icon={faVolumeHigh} className='sponsorIcon'/>
                <h3> Sponsored news</h3>
            </div>
            <div className="rightSponsor">
                <a href="#">Content by: bootstrap</a>
            </div>
        </div>

        <div className="sponsoredBody">
            <div className="row">
                <div className="col-6">
                <div className="row">
                            <div className="col-4">
                                <img src="https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg" alt="" className="hotel rounded" />
                            </div>
                            <div className="col-8">
                                <div className="lifeBtn1 lifeBtn">Lifestyle</div>
                                <div className="lifeTitle"><h4 className='f-32'>The Props and cons of buisnes agensy</h4></div>

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
                                <div className="lifeTitle"><h4 className='f-32'>5 reasons why you shouldn't startup</h4></div>

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
                                <div className="lifeTitle"><h4 className='f-32'>Five unbelievable facts about money.</h4></div>

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
                </div>

                <div className="col-6">
                <div className="row">
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
                                        <div className="customDate">Oct 19,2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <img src="https://blogzine.webestica.com/assets/images/blog/4by3/05.jpg" alt="" className="hotel rounded" />
                            </div>
                            <div className="col-8">
                                <div className="lifeBtn2 lifeBtn">Marketing</div>
                                <div className="lifeTitle"><h4 className='f-32'>7 common mistakes everyone makes while traveling</h4></div>

                                <div className="customComment">
                                    <div className="customCommentImg"><span className='pt bg-danger text-white'>W</span></div>
                                    <div className="byPersons">
                                        <div className="who">by <a href="#">Samuel</a></div>
                                        <div className='custom-circle'></div>  
                                        <div className="customDate">July 22,2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <img src="https://blogzine.webestica.com/assets/images/blog/4by3/06.jpg" alt="" className="hotel rounded" />
                            </div>
                            <div className="col-8">
                                <div className="lifeBtn3 lifeBtn">Photography</div>
                                <div className="lifeTitle"><h4 className='f-32'>5 investment doubts you should clarify</h4></div>

                                <div className="customComment">
                                    <div className="customCommentImg"><span className='pt'><img src="https://blogzine.webestica.com/assets/images/avatar/07.jpg" alt="" /></span></div>
                                    <div className="byPersons">
                                        <div className="who">by <a href="#">Judy</a></div>
                                        <div className='custom-circle'></div>  
                                        <div className="customDate">Sep 30,2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
