import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Container, NavDropdown } from 'react-bootstrap'
import './Header.scss'
import Logo from '../../imgs/logo.svg'
import { faAlignLeft, faChevronDown, faCircleHalfStroke, faEllipsis, faFileLines, faLifeRing, faMoon, faPlus, faSearch, faSun, faTree } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import { Swiper, SwiperSlide } from 'swiper/react';

// images
import img1 from '../../imgs/01.jpg'
import img2 from '../../imgs/02.jpg'
import img3 from '../../imgs/03.jpg'

export default function Header({ light, dark, ...props}) {
    Aos.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
    });

    const [isVisabled, setIsVisabled] = useState(false);
    const visabled = ()=> setIsVisabled(true)

    const [page, setPage] = useState(false);
    const show = ()=> setPage(true)

    const [scale, setScale] = useState(false);
    const scale1 = ()=> setScale(true)

    const [showme, setShowme] = useState(false);
    const shoow = ()=> setShowme(true)

    // ellipse
    const [isEllipse, setIsEllipse] = useState(false);
    const ellipse1 = ()=> {
        setIsEllipse(()=>{
            !isEllipse ? setIsEllipse(true) : setIsEllipse(false)
        })
    }

    // input
    const [showInput, setShowInput] = useState(false)
    const inputShow = ()=> {
        setShowInput(()=>{
            !showInput ? setShowInput(true) : setShowInput(false)
        })
    }

    // theme change

    //show mode changes
    const [showModeChanges, setShowModeChanges] = useState(false);
    const showChanges = ()=> {
        setShowModeChanges(()=>{
            !showModeChanges ? setShowModeChanges(true) : setShowModeChanges(false)
        })
    }

    const [toggleCanges, setToggleCanges] = useState(true);
    const toggleModeChanges = ()=> {
        setToggleCanges(true)
        setToggleCanges2(false)
        setToggleCanges3(false)
        setShowModeChanges(false)
    }
    const modeAniqlash = toggleCanges ? 'modeAniqlash' : '';

    const [toggleCanges2, setToggleCanges2] = useState(false);
    const toggleModeChanges2 = ()=> {
        setToggleCanges2(true)
        setToggleCanges(false)
        setToggleCanges3(false)
        setShowModeChanges(false)
    }
    const modeAniqlash2 = toggleCanges2 ? 'modeAniqlash' : ''

    const [toggleCanges3, setToggleCanges3] = useState(false);
    const toggleModeChanges3 = ()=> {
        setToggleCanges3(true)
        setToggleCanges(false)
        setToggleCanges2(false)
        setShowModeChanges(false)
    }
    const modeAniqlash3 = toggleCanges3 ? 'modeAniqlash' : ''

// Lists All
    const list = [
        'Shop Grid', 'Shop Detail', 'Checkout', 'Cart', 'Empty cart' 
    ]

    const otheArchives = ['Author Page', 'category 1', 'Category 2', '#Tag', 'lorem ipsum'];
    const dropDown = [
        {drop: 'Drop 1', dropIcon: faPlus},
        {drop: 'Drop 2'},
        {drop: 'Drop 3'},
        {drop: 'Drop 4', dropIcon: faPlus},
    ]
    const postGridItems = ['Post Grid Item 1', 'Post Grid Item 2', 'Post Grid Item 3', 'Post Grid Item 4', 'Post Grid Item 5' ];
    const PostsAll = ['Post List', 'Post List 2', 'Post Card', 'Post Overlay', 'Post Types'];
    const Posts =['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5', 'Post 6', 'Post 7'];
    // ellipse
    const ellipse = ['About', 'Newsletter', 'Author', '#Tag', 'Contact']

  return (
    <>
        <div  className='header shodow'>
            <Container>
                <header className='px-3 row py-1 align-items-center jcsb'>
                    <div className="logo col-4">
                        <img src={Logo} alt="" />
                    </div>

                    <div className="col-8">
                        <div className="dropdowns d-flex" data-aos="flip-left">
                            <div className="drop1 px-3">
                                <div className="drop d-flex align-items-center" onMouseEnter={visabled} onMouseLeave={()=> setIsVisabled(false)}>
                                    <span className='dropspan'></span>
                                    <div className=''>Home</div>
                                    <FontAwesomeIcon icon={faChevronDown} className='down text-primary' />
                                </div>

                                {
                                    isVisabled ? <div className="visabledSection mt-0 pt-0" 
                                    onMouseEnter={visabled} 
                                    onMouseLeave={()=> setIsVisabled(false)}
                                    data-aos="fade-zoom-in"
                                    >
                                    <ul className='visabledSectionUl'>
                                        <li><a href="!#">Home Default</a></li>
                                        <li><a href="!#">Home Default</a></li>
                                        <li className='d-flex liii align-items-center'>
                                            <div className="visabledSpan"></div>
                                            <a href="!#" className=''>Magazine Classic</a>
                                        </li>
                                        <li><a href="!#">Magazine</a></li>
                                        <li><a href="!#">Home Cards</a></li>
                                        <li><a href="!#">Blog Classic</a></li>
                                        <li><a href="!#">Blog Personal</a></li>
                                        <li><a href="!#">Blog Vintage</a></li>
                                        <li><a href="!#">Blog Teach</a></li>
                                        <li><a href="!#">Blog Teach</a></li>
                                        <li><a href="!#">Blog Fashion</a></li>
                                        <li><a href="!#">Blog Fashion</a></li>
                                        <li><a href="!#">Home  Shop</a></li>
                                    </ul>
                                </div> : ''
                                }
                            </div>

                            <div className="drop2 px-4">
                                <div className="drop d-flex align-items-center" onMouseEnter={show} onMouseLeave={()=> setPage(false)}>
                                    <div className="d-flex align-items-center">
                                        <div className='headerLink'>Pages</div>
                                        <FontAwesomeIcon icon={faChevronDown} className='down' />
                                    </div>
                                    { page &&
                                            <div className="pagesSection" 
                                            onMouseEnter={show} onMouseLeave={()=> setPage(false)}
                                            >
                                            <ul>
                                                <li><a href="/#">About</a></li>
                                                <li><a href="/#">Contact</a></li>
                                                <li className='transform'>
                                                    <a href="/#" className='shopLi'>
                                                        <span>Shop</span>
                                                        <FontAwesomeIcon icon={faPlus} className='rotate'/>
                                                    </a>
                                                    <div className="list">
                                                        <ul>
                                                            {list.map(list=> <li className='py-2'><a href="#">{list}</a></li>)}
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='transform'>
                                                    <a href="/#" className='shopLi'>
                                                    <span>Other Archives</span>
                                                    <FontAwesomeIcon icon={faPlus} className='rotate'/>
                                                    </a>
                                                    <div className="list">
                                                        <ul>
                                                            {otheArchives.map(list=> <li className='py-2'><a href="#">{list}</a></li>)}
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li><a href="/#">Error 404</a></li>
                                                <li><a href="/#">Signin</a></li>
                                                <li><a href="/#">Signup</a></li>
                                                <li><a href="/#">Offline</a></li>
                                                <div className="br"></div>
                                                <li className='py-3 transform'>
                                                    <a href="/#" className='shopLi'>
                                                    <span>Dropdow Levels</span>
                                                    <FontAwesomeIcon icon={faPlus} className='rotate'/>
                                                    </a>
                                                    <div className="list">
                                                    <li className='dropDrop'>
                                                        <a href="/#" className='d-flex align-items-center justify-between'>
                                                            <span className='pe-5 me-5'>Drop (start)</span>
                                                            <FontAwesomeIcon icon={faPlus} className='drop1Icon'/>
                                                        </a>
                                                    </li>
                                                    <li><a href="/#">Drop 2</a></li>
                                                    <li><a href="/#">Drop 3</a></li>
                                                    <li className='dropDrop'>
                                                        <a href="/#" className='d-flex align-items-center justify-between'>
                                                            <span className='pe-5 me-5'>Drop (end)</span>
                                                            <FontAwesomeIcon icon={faPlus} className='drop1Icon'/>
                                                        </a>
                                                    </li>
                                                    </div>
                                                </li>
                                                <div className="br"></div>
                                                <li className='shopLi'>
                                                    <a href="#">
                                                        <FontAwesomeIcon icon={faLifeRing} className='text-warning pe-2'/>
                                                        Support
                                                    </a>
                                                </li>
                                                <li className='shopLi'>
                                                    <a href="#">
                                                        <FontAwesomeIcon icon={faAlignLeft} className='text-danger pe-2' />
                                                        Documentation
                                                    </a>
                                                </li>
                                                <div className="br"></div>
                                                <li className='shopLi'>
                                                    <a href="#">
                                                        <FontAwesomeIcon icon={faFileLines} className='text-primary pe-2'/>
                                                        RTL Demo
                                                    </a>
                                                </li>
                                                <li className='shopLi'>
                                                    <a href="#">
                                                        <FontAwesomeIcon icon={faTree} className='text-success pe-2' />
                                                        Buy Blognize!
                                                    </a>
                                                </li>
                                            </ul>
                                            </div> 
                                    }
                                </div>
                            </div>

                            <div className="drop3 px-3">
                                <div className="drop d-flex align-items-center">
                                    <div className="he d-flex align-items-center" onMouseEnter={scale1} onMouseLeave={()=> setScale(false)} >
                                        <div className='headerLink'>Post</div>
                                        <FontAwesomeIcon icon={faChevronDown} className='down' />
                                    </div>

                                    <div className={`Posts ${scale ? 'overflow' : ''}`} onMouseEnter={scale1} onMouseLeave={()=> setScale(false)} >
                                        <ul className='fap'>
                                            <li className='postGridHover'><a href="#">
                                                <div className="rotated d-flex align-items-center justify-between">
                                                    <span>Post Grid</span>
                                                    <FontAwesomeIcon icon={faPlus} className='ratte'/>
                                                </div>
                                                    <div className="postGrid">
                                                        {
                                                            postGridItems.map(item => <li><a href="#">{item}</a></li>)
                                                        }
                                                    </div>
                                                </a>
                                            </li>

                                            {
                                                PostsAll.map(post=> <li><a href="#">{post}</a></li>)
                                            }
                                            <div className="br"></div>
                                            {
                                                Posts.map(post=> <li><a href="#">{post}</a></li>)
                                            }
                                            <div className="br"></div>
                                            <li className='py-2'><a href="#">Pagination Styles</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="drop4 px-3">
                                <div className="he d-flex align-items-center headerLink" onMouseEnter={shoow} onMouseLeave={()=> setShowme(false)}>
                                    <div>Life Style</div>
                                    <FontAwesomeIcon icon={faChevronDown} className='down' />
                                </div>

                                <div className={`styles ${showme ? 'opocity' : ''}`}onMouseEnter={shoow} onMouseLeave={()=> setShowme(false)}>
                                    <section>
                                        <div className="section1">
                                            <div className="row mx-2 my-3">
                                                <div className="col-9">
                                                    <div className="row wrap">
                                                        <div className="col-4 mx-1">
                                                            <img src={img1} alt="" className="img-fluid rounded" />
                                                            <div className="descriptionStyles">
                                                                <p className='spann'>
                                                                    7 common mistakes everyone makes while traveling
                                                                    <span></span>
                                                                    <span></span>
                                                                </p>
                                                                <div className="decTitle">
                                                                    <a href="#">JOAN WALLACE</a>
                                                                    <span className='px-3'>●</span>
                                                                    <span>FEB 18, 2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-4 mx-1">
                                                            <img src={img2} alt="" className="img-fluid rounded" />
                                                            <div className="descriptionStyles">
                                                                <p className='spann'>
                                                                    12 worst types of business accounts you follow on Twitter
                                                                    <span></span>
                                                                    <span></span>
                                                                </p>
                                                                <div className="decTitle">
                                                                    <a href="#">LORI STEVENS</a>
                                                                    <span className='px-3'>●</span>
                                                                    <span>JUN 03, 2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-4 mx-1">
                                                            <img src={img3} alt="" className="img-fluid rounded" />
                                                            <div className="descriptionStyles">
                                                                <p className='spann'>
                                                                    Skills that you can learn from business
                                                                    <span></span>
                                                                    <span></span>
                                                                </p>
                                                                <div className="decTitle">
                                                                    <a href="#">JUDY NGUYEN</a>
                                                                    <span className='px-3'>●</span>
                                                                    <span>SEP 07, 2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="bgg rounded text-center py-3 px-3">
                                                        <h6 className='text-center'>The Blgnize</h6>
                                                        <h3 className='bgg-h3'>Premium Membership</h3>
                                                        <h6>Become a Member Today!</h6>
                                                        <button className='btn btn-warning my-3'>View Prising Plans</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="section2">
                                            <div className="row mx-3 my-2 mb-3">
                                                <div className="col-11 d-flex btnsSection align-items-center">
                                                    <h5 className='me-2'>Trending tags:</h5>
                                                    <div className="btns">
                                                        <button className='btn btn1 mx-2'>Travel</button>
                                                        <button className='btn btn2 mx-2'>Buisness</button>
                                                        <button className='btn btn3 mx-2'>Tech</button>
                                                        <button className='btn btn4 mx-2'>Gadgets</button>
                                                        <button className='btn btn5 mx-2'>Lifestyles</button>
                                                        <button className='btn btn6 mx-2'>Vaccinae</button>
                                                        <button className='btn btn7 mx-2'>Sports</button>
                                                        <button className='btn btn8 mx-2'>Covid 19</button>
                                                        <button className='btn btn9 mx-2'>Politics</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>

                            <div className="drop5 px-3 d-flex align-items-center">
                                <h6><a href="#" className='headerLink dashboard'>Dashboard</a></h6>
                            </div>

                            <div className="drop6 drop px-2 d-flex align-items-center">
                                
                                    <div className="modeChange">
                                        <div className="modeIcon" onClick={showChanges}>
                                            <FontAwesomeIcon icon={faCircleHalfStroke} className='toggleTheme'/>
                                        </div>
                                        {
                                            showModeChanges && 
                                            <div className="themes">
                                                <ul>
                                                    <li className={`lightMode ${modeAniqlash}`} 
                                                        onClick={()=> {
                                                            light()
                                                            toggleModeChanges()
                                                        }}>
                                                        <FontAwesomeIcon icon={faSun}/> 
                                                        Light
                                                    </li>

                                                    <li className={`darkMode ${modeAniqlash2}`} 
                                                        onClick={()=> {
                                                            dark()
                                                            toggleModeChanges2()
                                                        }}>
                                                        <FontAwesomeIcon icon={faMoon}/> Dark
                                                    </li>

                                                    <li className={`autoMode ${modeAniqlash3}`} 
                                                        onClick={()=> {
                                                            dark()
                                                            toggleModeChanges3()
                                                        }}>
                                                        <FontAwesomeIcon icon={faCircleHalfStroke}/> Auto
                                                    </li>
                                                </ul>
                                            </div>
                                        }
                                    </div>

                            </div>

                            <div className="drop7 px-3">
                                <div className="iconka headerLink he" onClick={ellipse1}>
                                    <FontAwesomeIcon icon={faEllipsis} />
                                </div>
                                
                                {
                                    isEllipse &&
                                    <div className="ellipse">
                                        <ul>
                                            {
                                                ellipse.map((i)=> <li><a href="#">{i}</a></li>)
                                            }
                                            <li>
                                                <div className="redSection">2 Job</div>
                                                <a href="#">Careers</a>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </div>

                            <div className="drop8 px-3">
                                <div className="d-flex align-items-center">
                                    <button className='btn btn-danger customDanger'>Subscribe!</button>
                                </div>
                            </div>

                            <div className="drop9 px-3">
                                <div className="search" onClick={inputShow}>
                                    <FontAwesomeIcon icon={faSearch} className='searchIcon'/>
                                </div>

                                {
                                    showInput && 
                                    <div className="input p-2">
                                        <input type="search" className="form-control" />
                                        <button className='btn btn-success' onClick={inputShow}>Search</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </header>
            </Container>
        </div>

        <div className="main mt-4">
            <Carousel className='container p-0'>
                <Carousel.Item  className='item1 w-100'>
                    <img
                    className="d-block w-100 img-fluid1"
                    src='https://images.alphacoders.com/435/435793.jpg'
                    alt="First slide"
                    />
                    <Carousel.Caption className='caption1'>
                        <div className="row caption capion1">
                            <div className="col-8">
                                <button className='btn lifeS btn-danger'>Lifestyle</button>
                                <div className="line line1">
                                    10 tell-tale sign you need to get a new startup
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="par">
                                    No visited raicing gravity ourtward subject my cottage Mr be. Hold to at tore in park feet near my case.
                                </div>
                                <div className="captionDescriptionm align-items-center d-flex">
                                    <div className="sect1 d-flex align-items-center">
                                        <div className="img2"><img src="https://images.alphacoders.com/435/435793.jpg" alt="" /></div>
                                        <div className="byLuis">by <span>Louis</span></div>●
                                    </div>
                                    <div className="sect2 ps-3">
                                        <span className='pe-2'>Jan 01,2022</span>
                                        ●
                                        <span className='ps-2'>5 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    className="d-block w-100 img-fluid1"
                    src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                    alt="Second slide"
                    />
                    <Carousel.Caption className='caption1'>
                        <div className="row caption capion1">
                            <div className="col-8">
                                <button className='btn lifeS btn-danger'>Lifestyle</button>
                                <div className="line line1">
                                    10 tell-tale sign you need to get a new startup
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="par">
                                    No visited raicing gravity ourtward subject my cottage Mr be. Hold to at tore in park feet near my case.
                                </div>
                                <div className="captionDescriptionm align-items-center d-flex">
                                    <div className="sect1 d-flex align-items-center">
                                        <div className="img2"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" /></div>
                                        <div className="byLuis">by <span>Dennis</span></div>●
                                    </div>
                                    <div className="sect2 ps-3">
                                        <span className='pe-2'>Jan 17,2022</span>
                                        ●
                                        <span className='ps-2'>10 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-fluid1"
                    src={img3}
                    alt="Third slide"
                    />
                    <Carousel.Caption className='caption1'>
                        <div className="row caption capion1">
                            <div className="col-8">
                                <button className='btn lifeS btn-danger'>Lifestyle</button>
                                <div className="line line1">
                                    10 tell-tale sign you need to get a new startup
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="par">
                                    No visited raicing gravity ourtward subject my cottage Mr be. Hold to at tore in park feet near my case.
                                </div>
                                <div className="captionDescriptionm align-items-center d-flex">
                                    <div className="sect1 d-flex align-items-center">
                                        <div className="img2"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" /></div>
                                        <div className="byLuis">by <span>Dennis</span></div>●
                                    </div>
                                    <div className="sect2 ps-3">
                                        <span className='pe-2'>Jan 01,2022</span>
                                        ●
                                        <span className='ps-2'>5 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </>
  )
}
