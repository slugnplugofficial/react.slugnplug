import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div>
        <nav className="navbar navbar-expand-lg py-3 py-lg-3 navbar-light navbar-fixed-top">
          <img id="logo" src="images/logo.png" alt="" />
          {/* hidden on mobile */}
          <a className="navbar-brand d-none d-md-block pl-2" style={{fontSize: '1.5625rem'}} href="#">
            <span>SLUG AND PLUG</span>
          </a>
          {/* hidden on desktop */}
          <a className="navbar-brand d-md-none" href="#Home">
            <span>SLUG AND PLUG</span>
          </a>
          <button id="nav-button" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end ml-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#team">Our Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Events</a>
              </li>
              <li className="nav-item d-none d-md-block">
                <a className="nav-link" href="#Reach">Contact Us</a>
              </li>
              <li className="nav-item d-md-none">
                <a className="nav-link" href="#Reach">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
        <section id="Home" style={{minHeight: 'fit-content'}}>
          <div className="d-flex justify-content-center align-items-center mt-md-5">
            <img src="images/home_logo.png" className="d-none d-md-block" alt="Logo" width="281px" height="281px" />
          </div>
          <div className="text-center mt-4 mt-md-5 moto" style={{fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, textTransform: 'uppercase'}}>
            <div className="d-none d-md-block" style={{fontSize: '3.5vw'}}>
              {/* hidden on mobile  */}
              Ideate, Innovate <span className="gradient">and Improve</span>
            </div>
            <div className="d-md-none" style={{fontSize: '15vw'}}>
              {/* hidden on desktop  */}
              Ideate<br />Innovate<span className="gradient"><br />Improve</span>
            </div>
          </div>
          <div className="text-center mt-5" style={{fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 400, textTransform: 'uppercase'}}>
            <div className="d-none d-md-block" style={{fontSize: '1.1vw', color: '#7E7C6A'}}>
              {/* hidden on mobile */}
              Our platform is dedicated to providing you with the latest information, knowledge and hands-on <br />
              experience you need to succeed in today's ever-changing technology industry. Whether you are <br />
              a professional, or just someone who loves to stay up-to-date on the latest tech trends, <br />
              our website has something for everyone.
              <div className="row">
                <div className="col-1" />
                <div className="col-10">
                  <div>
                    <button onclick=" location.href='https://docs.google.com/forms/d/e/1FAIpQLSdb9Gq4tni6xwpcbkwobHkVmYuALMp_G-liYBcgxXvoZOBzIg/viewform'" type="button" className="snp-button mx-auto mt-5 mb-5 ">JOIN US!!!</button>
                  </div>
                </div>
                <div className="col-1" />
              </div>
            </div>
            <div className="d-md-none " style={{fontSize: '20px', color: '#09AA97'}}>
              {/* hidden on desktop */}
              <div className="row">
                <div className="col-1" />
                <div className="col-10">
                  dedicated platform TO provide YOU with the <span style={{color: '#000'}}> latest </span> information and
                  hands-on experience you need to succeed in today's ever-changing <span style={{color: '#000'}}>
                    technology
                  </span> industry
                </div>
                <div className="col-1" />
              </div>
              <div className="row">
                <div className="col-1" />
                <div className="col-10">
                  <div>
                    <button onclick=" location.href='https://docs.google.com/forms/d/e/1FAIpQLSdb9Gq4tni6xwpcbkwobHkVmYuALMp_G-liYBcgxXvoZOBzIg/viewform'" type="button" className="snp-button mx-auto mt-5 mb-5" style={{width: '247px', height: '75px', fontSize: '32px'}}>JOIN US!!!</button>
                  </div>
                </div>
                <div className="col-1" />
              </div>
              {/* dedicated platform  TO provide YOU with the <span style="color: #000;"> latest </span> information  and  hands-on experience you need to succeed in today's ever-changing technology  industry */}
            </div>
          </div>
        </section>
        <section id="about" style={{borderTop: '1px solid black', borderBottom: '1px solid black'}}>
          <div className="row mt-5" style={{bottom: '1px black'}}>
            <div className="col-md-2 d-none d-md-block Border-bottom">
              <img src="images/Ellipse.png" style={{transform: 'scaleX(-1)'}} className=" img-fluid mb-5" alt="" srcSet />
            </div>
            <div className="col-md-8 text-center Border-bottom" id="collab">
              <div className="d-none d-md-block mb-4" style={{fontSize: '1.5vw'}}>
                {/* hidden on mobile */}
                Yes, we are collaborating
                <div className="text-center mt-5" style={{fontSize: '4vw', fontWeight: 600}}>
                  <span className="snp"> SLUGNPLUG </span>
                  <span style={{fontSize: '3.125rem'}}> x </span>
                  {/* <span style="color: rgb(17, 27, 80);">TECH</span>
                  <span style="color: rgb(182, 40, 40);">GIG</span> */}
                  <img src="images/TechGig.png" className="img-fluid  mb-2" style={{height: '5rem'}} alt="" />
                </div>
                <a href="https://www.techgig.com/home">
                  <button className="KnowMoreAboutTechGig-padding KnowMoreAboutTechGig mt-4">KNOW MORE ABOUT TECHGIG</button>
                </a>
              </div>
              <div className="d-md-none">
                {/* hidden on desktop */}
                <span style={{fontWeight: 700, fontSize: '35px'}}> Yes!</span><br />
                <span style={{fontWeight: 700, fontSize: '25px'}}> we are collaborating</span>
                <div className="text-center mt-1" style={{fontSize: '15vw', fontWeight: 600}}>
                  <span className="snp"> SNP </span> <br />
                  <span style={{fontSize: '4rem'}}> x </span><br />
                  <img src="images/TechGig.png" className="img-fluid float-none" alt="" />
                </div>
                <div className="container">
                  <a href="https://www.techgig.com/home">
                    <button className="KnowMoreAboutTechGig mt-4" style={{width: '320px', height: '3.5rem', fontSize: '13px'}}>KNOW
                      MORE ABOUT TECHGIG</button></a>
                </div>
              </div>
            </div>
            <div className="col-md-2 d-none d-md-block Border-bottom">
              <img src="images/Ellipse.png" className=" img-fluid float-right mb-5" alt="" srcSet />
            </div>
            <div className=" pl-5 col-md-6 col-12 Border-right" id="collest" style={{backgroundColor: '#ffc5c5'}}>
              <div className="d-none d-md-block" style={{fontSize: '3.5vw', fontWeight: 600}}>
                {/* hidden on mobile  */}
                <div className="cool mt-3">
                  <p>
                    WE
                  </p>
                  <p>
                    CALL
                  </p>
                  <p>
                    OURSELVES
                  </p>
                  <p className="snp" style={{fontWeight: 800}}>
                    THE COOLEST
                  </p>
                  <p>
                    CLUB IN SRMRMP
                  </p>
                </div>
                <div className="ml-2" style={{color: '#7E7C6A', fontSize: '1.375rem', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 400, textTransform: 'uppercase'}}>
                  <p className="mt-5"> 
                    SlugNPlug is a technical club of SRM IST Ramapuram that offers a <br />
                    tight-knit community, hosts informative events and provides a diverse <br />
                    membership with activities ranging from Fun with Data Analytics,Formula AI to Mindwrap.<br />
                    Additionally we’ve also got a lot of exciting stuff happening in the intra-club sessions as well.<br />  
                    The club is run by the students and hence the events are tailored to the members’ interests.
                  </p>
                  <p className="mt-5 mb-3">
                    Join SlugNPlug to make lifelong friends and <br />
                    unforgettable memories!
                  </p>
                </div>
              </div>
              <div className="d-md-none" style={{fontSize: '5vw'}}>
                {/* hidden on desktop  */}
                <div className="cool-mobile mt-3">
                  <p>
                    WE
                  </p>
                  <p>
                    CALL
                  </p>
                  <p>
                    OURSELVES
                  </p>
                  <p className="snp" style={{fontWeight: 800}}>
                    THE COOLEST
                  </p>
                  <p>
                    CLUB IN SRMRMP
                  </p>
                </div>
                <div className="ml-1" style={{color: '#020202', fontSize: '4vw', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, textTransform: 'uppercase'}}>
                  <div className="row">
                    <div className="col-11">
                      <p className="mt-3" style={{color: '#333333', fontWeight: 400, textAlign: 'justify'}}>
                        SlugNPlug is an amazing college club
                        that offers a tight-knit community,
                        unique events, and a diverse
                        membership, With activities ranging
                        from Fun with Data analytics to
                        Formula AI to MindWrap, there's always
                        something exciting happening. Plus, 
                        the club is run by students,
                        so events are tailored to members' interests.
                        SlugNPlug is a technical club of SRM IST
                        Ramapuram that offers a tight-knit community, 
                        hosts informative events and provides a diverse 
                        membership with activities ranging from 
                        Fun with Data Analytics,Formula AI to Mindwrap.
                        Additionally we’ve also got a lot of exciting 
                        stuff happening in the intra-club sessions as well.  
                        The club is run by the students, 
                        and hence the events are tailored to the members’ interests.
                      </p>
                      <p className="mt-3 mb-3" style={{textAlign: 'justify'}}>
                        Join SlugNPlug to make
                        lifelong friends and
                        unforgettable
                        memories!
                      </p>
                    </div>
                    <div className="col-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block gradient-collab">
              {/* Gradient  */}
              <div className style={{height: '50vh'}}>
              </div>
            </div>
          </div>
          {/* <hr class="mt-5"> */}
        </section>
        <section id="seniors" style={{height: '100vh', borderBottom: '1px solid black', backgroundColor: 'black'}}>
          {/* IF YOU ARE UPDATING THIS PLEASE TAKE YOUR TIME
            I HAD A MIND BENDING MOMENT PULLING THIS OFF !!!
         
         */}
          <div className="d-none d-md-block">
            {/* hidden on mobile  */}
            <h1 className="text-center senior-meet mt-3" style={{fontSize: '5rem'}}>MEET OUR SENIORS</h1>
            <div className="swiper mySwiper" style={{height: '80vh'}}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-4">
                        <img src="images/seniors/Yaswanth Mullamuri.jpeg" className="image-circle mx-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                        <div className="image-text mt-4">
                          <p>M Venkata Yaswanth</p>
                          <p>OpenText</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="text-center ">
                          <img src="images/seniors/NischalP.jpeg" className="image-circle mx-auto d-block" style={{width: '18.75rem', height: '18.75rem'}} alt="" srcSet />
                          <div className="image-text mt-4">
                            <p>Nischal Raghuram</p>
                            <p>ZS Associates</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="text-center">
                          <img src="images/seniors/P Sowmiyaa (RA1911042020010).jpeg" className="image-circle mx-auto d-block" style={{width: '18.75rem', height: '18.75rem'}} alt="" srcSet />
                          <div className="image-text mt-4">
                            <p>P Sowmiyaa</p>
                            <p>Uipath</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-4">
                        <img src="images/seniors/Ranit.jpg" className="image-circle mx-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                        <div className="image-text mt-4">
                          <p>Ranit Sen</p>
                          <p>Lister Technologies</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="text-center ">
                          <img src="images/seniors/Renuka Thanmai (RA1911042020015).jpeg" className="image-circle mx-auto d-block" style={{width: '18.75rem', height: '18.75rem'}} alt="" srcSet />
                          <div className="image-text mt-4">
                            <p>Renuka Thanmai</p>
                            <p>TheMathCompany</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="text-center">
                          <img src="images/seniors/Abir.jpg" className="image-circle mx-auto d-block" style={{width: '18.75rem', height: '18.75rem'}} alt="" srcSet />
                          <div className="image-text mt-4">
                            <p>Abir Lal Dhar</p>
                            <p>Brillio</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
          <div className="d-md-none">
            {/* hidden on desktop  */}
            <h1 className="text-center senior-meet mb-5 mt-3" style={{fontSize: '10vw'}}>MEET OUR SENIORS</h1>
            <div className="swiper mySwiper" style={{height: '70vh'}}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/seniors/Yaswanth Mullamuri.jpeg" className="image-circle mx-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                      <div className="image-text mt-4">
                        <p>M Venkata Yaswanth</p>
                        <p>OpenText</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/seniors/NischalP.jpeg" className="image-circle mx-auto d-block" style={{width: '18.75rem', height: '18.75rem'}} alt="" srcSet />
                      <div className="image-text mt-4">
                        <p>Nischal Raghuram</p>
                        <p>ZS Associates</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/seniors/P Sowmiyaa (RA1911042020010).jpeg" className="image-circle mx-auto d-block" style={{width: '18.75rem', height: '18.75rem'}} alt="" srcSet />
                      <div className="image-text mt-4">
                        <p>P Sowmiyaa</p>
                        <p>Uipath</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/seniors/Ranit.jpg" className="image-circle mx-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                      <div className="image-text mt-4">
                        <p>Ranit Sen</p>
                        <p>Lister Technologies</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/seniors/Renuka Thanmai (RA1911042020015).jpeg" className="image-circle mx-auto d-block" style={{width: '18.75rem', height: '18.75rem'}} alt="" srcSet />
                      <div className="image-text mt-4">
                        <p>Renuka Thanmai</p>
                        <p>TheMathCompany</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/seniors/Abir.jpg" className="image-circle mx-auto d-block" style={{width: '18.75rem', height: '18.75rem'}} alt="" srcSet />
                      <div className="image-text mt-4">
                        <p>Abir Lal Dhar</p>
                        <p>Brillio</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>
        <section id="team" style={{backgroundColor: '#E2C8FC', minHeight: '100vh'}}>
          <div className="d-none d-md-block mt-2">
            {/* hidden on mobile  */}
            <div className="text-center">
              <h1 className="Senior-header" style={{fontSize: '5rem'}}>Meet our CapTAIN </h1>
              <h1 className="Senior-header" style={{fontSize: '5rem'}}>and HIS CREw</h1>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="mx-auto d-block mt-2">
                  <img src="images/team/Gyaniiiii.jpg" className="image-circle" style={{width: '356px', height: '356px'}} />
                  <div className=" text-center image-team-text mt-2">
                    <p>Gyanendra Rajvaidhya</p>
                    <p>President</p>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="mx-auto d-block mt-2">
                  <img src="images/team/Samvardhan.jpg" className="image-circle" style={{width: '267px', height: '267px'}} />
                  <div className=" text-center image-team-text mt-2">
                    <p>Samvardhan Singh</p>
                    <p>Technical Lead</p>
                  </div>
                </div>
                <div className="mx-auto d-block mt-2">
                  <img src="images/team/spandan.up.jpg" className="image-circle" style={{width: '267px', height: '267px'}} />
                  <div className=" text-center image-team-text mt-2">
                    <p>Spandan</p>
                    <p>Marketing Lead</p>
                  </div>
                </div>
                <div className="mx-auto d-block mt-2">
                  <img src="images/team/kushi.jpg" className="image-circle" style={{width: '267px', height: '267px'}} />
                  <div className=" text-center image-team-text mt-2">
                    <p>Kushi Jhabak</p>
                    <p>Marketing Lead</p>
                  </div>
                </div>
              </div>
              <div className="row mt-4 mb-5">
                <div className="mx-auto d-block mt-2">
                  <img src="images/team/Ankit.jpg" className="image-circle" style={{width: '267px', height: '267px'}} />
                  <div className=" text-center image-team-text mt-2">
                    <p>Ankit Nayak</p>
                    <p>Design Lead</p>
                  </div>
                </div>
                <div className="mx-auto d-block mt-2">
                  <img src="images/team/pranav.png" className="image-circle" style={{width: '267px', height: '267px'}} />
                  <div className=" text-center image-team-text mt-2">
                    <p>Pranav Nair</p>
                    <p>Design Lead</p>
                  </div>
                </div>
                <div className="mx-auto d-block mt-2">
                  <img src="images/team/Shibu.jpg" className="image-circle" style={{width: '267px', height: '267px'}} />
                  <div className=" text-center image-team-text mt-2">
                    <p>Shibu Singh</p>
                    <p>Content Lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-md-none">
            {/* hidden on desktop  */}
            <div className="text-center mb-5 mt-3">
              <h1 className="Senior-header" style={{fontSize: '2.5rem'}}>Meet our CapTAIN </h1>
              <h1 className="Senior-header" style={{fontSize: '2.5rem'}}>and HIS CREw</h1>
            </div>
            <div className="swiper mySwiper" style={{height: '70vh'}}>
              <div className="swiper-wrapper">
                <div className="swiper-slide" style={{backgroundColor: '#E2C8FC'}}>
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/team/Gyaniiiii.jpg" className="image-circle mx-auto my-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                      <div className="image-team-text mt-4">
                        <p>Gyanendra Rajvaidhya</p>
                        <p>President</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" style={{backgroundColor: '#E2C8FC'}}>
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/team/Samvardhan.jpg" className="image-circle mx-auto my-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                      <div className="image-team-text mt-4">
                        <p>Samvardhan Singh</p>
                        <p>Technical Lead</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" style={{backgroundColor: '#E2C8FC'}}>
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/team/spandan.up.jpg" className="image-circle mx-auto my-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                      <div className="image-team-text mt-4">
                        <p>Spandan</p>
                        <p>Marketing Lead</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" style={{backgroundColor: '#E2C8FC'}}>
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/team/kushi.jpg" className="image-circle mx-auto my-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                      <div className="image-team-text mt-4">
                        <p>Kushi Jhabak</p>
                        <p>Marketing Lead</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" style={{backgroundColor: '#E2C8FC'}}>
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/team/Ankit.jpg" className="image-circle mx-auto my-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                      <div className="image-team-text mt-4">
                        <p>Ankit Nayak</p>
                        <p>Design Lead</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" style={{backgroundColor: '#E2C8FC'}}>
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/team/pranav.png" className="image-circle mx-auto my-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                      <div className="image-team-text mt-4">
                        <p>Pranav Nair</p>
                        <p>Design Lead</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" style={{backgroundColor: '#E2C8FC'}}>
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/team/Shibu.jpg" className="image-circle mx-auto my-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                      <div className="image-team-text mt-4">
                        <p>Shibu Singh</p>
                        <p>Content Lead</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" style={{backgroundColor: '#E2C8FC'}}>
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/team/Divyanshi.jpg" className="image-circle mx-auto my-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                      <div className="image-team-text mt-4">
                        <p>Divyanshi Gupta</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" style={{backgroundColor: '#E2C8FC'}}>
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/team/Anish.png" className="image-circle mx-auto my-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                      <div className="image-team-text mt-4">
                        <p>Anish Andhavarapu</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" style={{backgroundColor: '#E2C8FC'}}>
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/team/Akshat.jpg" className="image-circle mx-auto my-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                      <div className="image-team-text mt-4">
                        <p>Akshat Sharma</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" style={{backgroundColor: '#E2C8FC'}}>
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/team/Akankhya.jpg" className="image-circle mx-auto my-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                      <div className="image-team-text mt-4">
                        <p>Akankhya</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" style={{backgroundColor: '#E2C8FC'}}>
                  <div className="container-fluid">
                    <div className="col-12">
                      <img src="images/team/santosh.jpg" className="image-circle mx-auto my-auto d-block " alt="" srcSet style={{width: '18.75rem', height: '18.75rem'}} />
                      <div className="image-team-text mt-4">
                        <p>Santosh Kumar Rout</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>
        <section id="Reach" style={{borderBottom: '1px solid black', height: 'fit-content'}}>
          <div className="d-none d-md-block">
            {/* hidden on mobile  */}
            <h1 className="text-center mt-5 mb-5" style={{fontSize: '4rem'}} id="Reach-header">REACH US OUT AT</h1>
          </div>
          <div className="d-md-none">
            {/* hidden on desktop  */}
            <h1 className="text-center mt-5 mb-5" style={{fontSize: '7.5vw'}} id="Reach-header">REACH US OUT AT</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 mt-5">
              <a href="https://www.instagram.com/slugnplug/">
                <img src="images/instagram.png" className="mx-5 mx-md-auto d-block" />
                <p className="text-left text-md-center mx-3 mt-3 mt-md-4 text-mention" />
              </a>
            </div>
            <div className="col-lg-4 col-md-12 mt-5 d-flex flex-column align-items-end align-items-md-center">
              <a href="https://www.linkedin.com/company/slug-n-plug/">
                <img src="images/linkedin-reach.png" className="mr-4 mx-md-auto d-block" />
                <p className="text-md-center mt-4 mr-1 text-mention" />
              </a>
            </div>
            <div className="col-lg-4 col-md-12 mt-5">
              <a href="https://twitter.com/SnP_SRM">
                <img src="images/twitter.png" className="mx-5 mx-md-auto d-block" />
                <p className="text-left text-md-center mx-3 mt-1 text-mention" />
              </a>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 d-none d-md-block mt-5">
                </div>
                <div className="col-lg-6 d-md-block mt-5">
                  <div className="col-md-12 d-lg-block mt-5 mb-5 text-center">
                    <p style={{fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '1.5625rem', textTransform: 'uppercase'}}>
                      Connect with us!</p>
                    <p className="m-0 text-color d-none d-md-block text-body" style={{color: '#7E7C6A !important', textTransform: 'uppercase'}}>
                      We'd love to hear from you. Follow us on social media to stay updated on the latest news,
                      events, and promotions. Got any questions? Our team is here to help!
                    </p>
                    <p className="m-0 text-color d-md-none text-body" style={{color: '#7E7C6A !important', textTransform: 'uppercase'}}>
                      We'd love to hear from you
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 d-none d-md-block mt-5">
                </div>
              </div>
            </div>
            <div className="col-md-12 d-lg-block mt-5 text-center">
              <h1 style={{fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '1.5625rem', textTransform: 'uppercase'}}>
                WRITE US AT</h1>
              <p className="m-0 text-color d-md-none text-body" style={{color: '#7E7C6A !important', textTransform: 'uppercase'}}>
                Got any questions? Our team is here to help!</p>
              <p className="mt-3 text-color mb-3" id="email" style={{color: '#000', textTransform: 'uppercase', fontSize: '16px'}}>
                <a href="mailto:slugnplug.contact@gmail.com">SLUGNPLUG.CONTACT@GMAIL.COM</a>
              </p>
            </div>
          </div>
        </section>
        <section id="footer" style={{backgroundColor: '#C1C1C1', minHeight: '200px !important'}}>
          <div className="d-none d-md-block" style={{fontSize: '1.5vw'}}>
            {/* hidden on mobile  */}
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6" style={{marginTop: '40px'}}>
                  <div className="ml-5">
                    <img src="images/logo.png" className="img-fluid" style={{height: '5.5rem'}} srcSet />
                    <span className="footer-snp">SLUGNPLUG | SRMIST RMP</span>
                  </div>
                </div>
                <div className="col-md-6" style={{marginTop: '40px'}}>
                  <div className="d-flex justify-content-end mt-1 mr-5">
                    <button onclick="location.href='https://www.instagram.com/slugnplug/'" type="button" className="snp-button">SPONSOR
                      US</button>
                  </div>
                </div>
              </div>
              <div className="container mt-4">
                <div className="row">
                  <div className="col-md-3">
                    <a href="https://www.instagram.com/slugnplug/"><img src="images/instagram.png" className="footer-social-images" />
                      <span className="footer-social-text ml-2">OUR INSTAGRAM</span></a>
                  </div>
                  <div className="col-md-3">
                    <a href="https://www.linkedin.com/company/slug-n-plug/"><img src="images/linkedin.png" className="footer-social-images" />
                      <span className="footer-social-text ml-2">OUR LINKEDIN</span></a>
                  </div>
                  <div className="col-md-3">
                    <a href="https://slugnplug.medium.com/"><img src="images/medium.png" className="footer-social-images" />
                      <span className="footer-social-text ml-2">OUR MEDIUM</span></a>
                  </div>
                  <div className="col-md-3">
                    <a href="https://twitter.com/SnP_SRM"><img src="images/twitter.png" className="footer-social-images" />
                      <span className="footer-social-text ml-2">OUR TWITTER</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-md-none" style={{fontSize: '5vw'}}>
            {/* Hidden on Desktop */}
            <div className="container">
              <div className="row">
                <div className="col-12 mt-1">
                  <div>
                    <img src="images/logo.png" className="img-fluid" style={{height: '50px'}} srcSet />
                    <span className="footer-snp" style={{fontSize: '1.054375rem'}}>SLUGNPLUG | SRMIST RMP</span>
                  </div>
                </div>
                <div className="col-12 mt-2">
                  <div className="d-flex justify-content-center mt-1">
                    <button onclick="location.href='https://www.instagram.com/slugnplug/'" type="button" className="snp-button" style={{width: '139px', height: '50px', fontSize: '16px'}}>SPONSOR US</button>
                  </div>
                </div>
                <div className="container-fluid mobile-footer-social mt-3">
                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex flex-column align-items-start">
                        <a href="https://www.instagram.com/slugnplug/"><img src="images/instagram.png" alt="" style={{width: '18.9px', height: '17.53px'}} />
                          <span style={{fontSize: '14.85px'}}>OUR INSTAGRAM</span>
                        </a>
                        <a href="https://slugnplug.medium.com/"><img src="images/medium.png" alt="" style={{width: '18.9px', height: '17.53px'}} />
                          <span style={{fontSize: '14.85px'}}>OUR MEDIUM</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex flex-column align-items-end">
                        <a href="https://www.linkedin.com/company/slug-n-plug/"><img src="images/linkedin.png" alt="" style={{width: '18.9px', height: '17.53px'}} />
                          <span style={{fontSize: '14.85px'}}>OUR LINKEDIN</span>
                        </a>
                        <a href="https://twitter.com/SnP_SRM"><img src="images/twitter.png" alt="" style={{width: '20.92px', height: '19.41px'}} />
                          <span style={{fontSize: '14.85px'}}>OUR TWITTER</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
export default App 