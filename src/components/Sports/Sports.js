import React from 'react'
import './Sports.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

export default function Sports() {
  return (
    <div className='sports container pt-5 pb-4'>
        <div className="sportsTitle">
            <div className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faGamepad} className='game'/>
                <span>Sports update</span>
            </div>
                <p>Get the latest sports news and updates from football, tennis, formula one, cricket, NBA, and golf with live scores and stats</p>
        </div>

        <div className="row roww">
            <div className="col-6 sportContainer sportContainer1">
                <img src="https://blogzine.webestica.com/assets/images/blog/3by4/05.jpg" alt="" />

                <div className="sportContainerDescription">
                    <div className="lifeBtn sportBtn">Travel</div>
                    <div className="sportTitle">
                        8 initial problem of startups and their solution
                    </div>
                        <div className="customComment pt-2">
                            <div className="customCommentImg customCommentImg1"><span className='pt who1'>VP</span></div>
                            <div className="byPersons">
                                <div className="who who1">by <a href="#" className='who1'>Carolyn</a></div>
                                <div className='custom-circle whoo'></div>  
                                <div className="customDate who1">Feb 28,2022</div>
                                <div className='custom-circle whoo'></div>  
                                <div className="customDate who1">6 min read</div>
                            </div>
                    </div>
                </div>

            </div>
            <div className="col-6 sportContainer sportContainer2">
                <img src="https://blogzine.webestica.com/assets/images/blog/3by4/06.jpg" alt="" />

                <div className="sportContainerDescription">
                    <div className="lifeBtn sportBtn sportBtn2">Travel</div>
                    <div className="sportTitle">
                        Buisness ideas that will boom in upcoming years
                    </div>
                        <div className="customComment pt-2">
                            <div className="customCommentImg customCommentImg1"><span className='pt who1'><img src="https://blogzine.webestica.com/assets/images/avatar/09.jpg" alt="" /></span></div>
                            <div className="byPersons">
                                <div className="who who1">by <a href="#" className='who1'>Billy</a></div>
                                <div className='custom-circle whoo'></div>  
                                <div className="customDate who1">July 19,2022</div>
                                <div className='custom-circle whoo'></div>  
                                <div className="customDate who1">2 min read</div>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
