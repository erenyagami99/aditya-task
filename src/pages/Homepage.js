import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";
import Feedback from "../components/Feedbacks";
import ProcessSection from "../components/ProcessSection";
import WorkSection from "../components/WorkSection";
import EmptySection from "../components/EmptySection";
import BannerSection from "../components/BannerSection";
import Stats from "../components/Stats";
import Header from "../components/Header";

function HomePage() {
  return (
    <div className="container">
      <div>
        <div className="main-container">
          <Header />
          <div className="width-full width-70 center-div">
            <div className="small-header">
              <div className="nav-elements" style={{ paddingLeft: "20px" }}>
                <p>Home</p>
                <p>Projects</p>
                <p>Services</p>
                <p>About</p>
                <p>Contact Us</p>
              </div>
              <button className="button">GET A QUOTE</button>
            </div>
            <div className="heading">
              <h1 className="orange-text">Build Your Dream</h1>
              <h1>VISION GOT LARGER</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                porttitor accumsan tincidunt. Donec rutrum congue leo eget
                malesuada. Nulla porttitor accumsan tincidunt. Donec rutrum
                congue leo eget malesuada. Curabitur arcu erat, accumsan id
                imperdiet et, porttitor at sem.
              </p>

              <div className="button-container">
                <button className="button">OUR SERVICES</button>
                <button className="transparent-button">CONTACT US</button>
              </div>
            </div>
          </div>
        </div>
        <Stats />
        <ProcessSection />
        <BannerSection />
        <EmptySection />
        <div className="fifth-div justify-center">
          <div className="gray-div"></div>
          <div className="candidate-div width-70">
            <div className="flex space-between white gap-25 width-full person-div">
              <div className="first-image-div candidate-image">
                <div className="padding-25">
                  <h1>Steven Marks</h1>
                  <p>CEO</p>
                </div>
              </div>
              <div className="third-image-div candidate-image">
                <div className="padding-25">
                  <h1>Lara Smith</h1>
                  <p>CTO</p>
                </div>
              </div>
              <div className="second-image-div candidate-image">
                <div className="padding-25">
                  <h1>John Doe</h1>
                  <p>COO</p>
                </div>
              </div>
            </div>
            <button style={{ marginTop: "50px" }} className="button center-div">
              ABOUT US
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
