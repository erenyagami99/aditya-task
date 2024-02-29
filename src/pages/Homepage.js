import Footer from '../components/Footer';
import FaqSection from '../components/FaqSection';
import Feedback from '../components/Feedbacks';
import ProcessSection from '../components/ProcessSection';
import WorkSection from '../components/WorkSection';
import EmptySection from '../components/EmptySection';
import BannerSection from '../components/BannerSection';
import Stats from '../components/Stats';
import Header from '../components/Header';

function HomePage() {
    return (
        <div className='container'>
            <div>
                <div className='main-container'>
                    <div className='center'>
                        <Header />
                        <div className='header'>
                            <div className='image-container'>
                                <img src='/images/facebook-icon.png' alt='facebook' />
                                <img src='/images/twitter-icon.png' alt='twitter' />
                                <img src='/images/whatsapp-icon.png' alt='whatsapp' />
                            </div>
                            <button className='button'>Click Here</button>
                        </div>
                        <div className='width-full flex column' style={{ gap: "50px" }}>
                            <h1 className="orange-text">Build Your Dream</h1>
                            <h1 className='heading'>VISION GOT LARGER</h1>
                            <p className='white'>Company details and work done and services provided are explained here. These details need to be filled and can be changed again whenever there is requirement...</p>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div className='vertical-border'>
                                    <button className='button'>Click Here</button>
                                </div>
                                <p className='white'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10,699</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Stats />
                <ProcessSection />
                <BannerSection />
                <EmptySection />
                <div className='fifth-div'>
                    <div className='gray-div'></div>
                    <div className='candidate-div'>
                        <div className='person-div'>
                            <div className='first-image-div'>
                                <h1 style={{ padding: "25px" }}>Name of Person</h1>
                                <p style={{ padding: "25px" }}>Contact Details</p>
                            </div>
                            <div className='third-image-div'>
                                <h1 style={{ padding: "25px" }}>Name of Person</h1>
                                <p style={{ padding: "25px" }}>Contact Details</p>
                            </div>
                            <div className='second-image-div'>
                                <h1 style={{ padding: "25px" }}>Name of Person</h1>
                                <p style={{ padding: "25px" }}>Contact Details</p>
                            </div>
                        </div>
                        <button style={{ marginTop: "50px" }} className='button center-div'>
                            Click Here
                        </button>
                    </div>
                </div>
                <WorkSection />
                <Feedback />
                <FaqSection />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
