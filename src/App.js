import './App.css';
import Header from './components/header';
function App() {
  return (
    <div className='container'>
      <div>
       <Header/>
        <div className='second-div'>
          <div className='orange-div width-full'>
            <p>Enter the details here</p>
            <h1>Enter the heading here</h1>
            <p>Enter the remaining Details here</p>
            <button className='black-button'>Black button</button>
          </div>
          <div style={{ backgroundColor: "white", padding: "30px" }} className='width-full'>
            <div className='flex space-between' style={{ borderBottom: "1px solid gray" }}>
              <div>
                <h1>512</h1>
                <p>Number of Goods</p>
              </div>
              <div>
                <h1>512</h1>
                <p>Number of Goods</p>
              </div>
            </div>
            <div className='flex space-between'>
              <div>
                <h1>19</h1>
                <p>Number of Goods</p>
              </div>
              <div>
                <h1>10,223</h1>
                <p>Number of Goods</p>
              </div>
            </div>
          </div>
        </div>
        <div className='third-div'>
          <h1>Here is Heading</h1>
          <div className='flex width-full space-between'>
            <h1>Another Heading</h1>
            <div className='flex items-center'>
              <p style={{ color: "green", fontWeight: "bold" }}>Click Me</p>
              <img src='/images/right-arrow.png' alt='arrow' />
            </div>
          </div>
          <div className='flex image-wrap space-between'>
            <div>
              <img className='image' src='/images/image-1.jpg' alt='preview' />
              <h1>Heading</h1>
              <p>Details of the process</p>
            </div>
            <div>
              <img className='image' src='/images/image-2.jpg' alt='preview' />
              <h1>Heading</h1>
              <p>Details of the process</p>
            </div>
            <div>
              <img className='image' src='/images/image-3.jpg' alt='preview' />
              <h1>Heading</h1>
              <p>Details of the process</p>
            </div>
            <div>
              <img className='image' src='/images/image-4.jpg' alt='preview' />
              <h1>Heading</h1>
              <p>Details of the process</p>
            </div>
            <div>
              <img className='image' src='/images/image-1.jpg' alt='preview' />
              <h1>Heading</h1>
              <p>Details of the process</p>
            </div>
            <div>
              <img className='image' src='/images/image-3.jpg' alt='preview' />
              <h1>Heading</h1>
              <p>Details of the process</p>
            </div>
          </div>
        </div>
        <div className='fourth-div'>
          <div className='first-image'>
            <h1>Heading</h1>
            <h1>Heading 2</h1>
            <p>Details of the process</p>
            <button className='button'>Black button</button>
          </div>
          <div className='second-image'>
            <h1>Heading</h1>
            <h1>Heading 2</h1>
            <p>Details of the process</p>
            <button className='button'>Black button</button>
          </div>
        </div>
        <div className='third-div'>
          <h1>Heading</h1>
          <div className='flex'>
            <h2>Heading Second</h2>
            <p>Details of the section are included here</p>
          </div>
          <div className='card-container'>
            <div className='card'>
              <h1>Heading</h1>
              <p>Details of this card</p>
            </div>
            <div className='card'>
              <h1>Heading</h1>
              <p>Details of this card</p>
            </div>
            <div className='card'>
              <h1>Heading</h1>
              <p>Details of this card</p>
            </div>
          </div>
          <button style={{ marginTop: "50px" }} className='button center-div'>
            Get Detail Here ...
          </button>
          <div className='text-center'>
            <h1>Heading</h1>
            <h2>Second Heading Big</h2>
          </div>
        </div>
        <div className='fifth-div'>
          <div className='gray-div'></div>
          <div className='candidate-div'>
            <div className='person-div'>
              <div className='first-image-div'>
                <h1>Name of Person</h1>
                <p>Contact Details</p>
              </div>
              <div className='third-image-div'>
                <h1>Name of Person</h1>
                <p>Contact Details</p>
              </div>
              <div className='second-image-div'>
                <h1>Name of Person</h1>
                <p>Contact Details</p>
              </div>
            </div>
            <button style={{ marginTop: "50px" }} className='button center-div'>
              Click Here
            </button>
          </div>
        </div>
        <div>
          <div className='width-70 center-div flex column'>
            <h1>Heading</h1>
            <div className='width-full space-between flex items-center'>
              <h1>Second Heading</h1>
              <button className='button'>Click Here</button>
            </div>
          </div>
          <div className='width-full flex' style={{ color: "white" }}>
            <div className='first-construction-div'>
              <h1>Name of Person</h1>
              <p>Contact Details</p>
            </div>
            <div className='third-construction-div'>
              <h1>Name of Person</h1>
              <p>Contact Details</p>
            </div>
            <div className='second-construction-div'>
              <h1>Name of Person</h1>
              <p>Contact Details</p>
            </div>
            <div className='third-construction-div'>
              <h1>Name of Person</h1>
              <p>Contact Details</p>
            </div>
          </div>
        </div>
        <div className='text-center width-70 center-div'>
          <h1>Heading</h1>
          <h2>Second Heading</h2>
          <div className='flex space-between' style={{ gap: "30px" }}>
            <div className='details-div'>
              <img className='person-icon' src='/images/image-1.jpg' alt='image' />
              <p className='orange-text'>Name</p>
              <p> Person Details</p>
            </div>
            <div className='details-div'>
              <img className='person-icon' src='/images/image-1.jpg' alt='image' />
              <p className='orange-text'>Name</p>
              <p> Person Details</p>
            </div>
          </div>
          <div className='flex space-between' style={{ gap: "30px" }}>
            <div className='details-div'>
              <img className='person-icon' src='/images/image-1.jpg' alt='/image' />
              <p className='orange-text'>Name</p>
              <p> Person Details</p>
            </div>
            <div className='details-div'>
              <img className='person-icon' src='/images/image-1.jpg' alt='image' />
              <p className='orange-text'>Name</p>
              <p> Person Details</p>
            </div>
          </div>
        </div>
        <div className='width-full faq-div' style={{marginTop:"200px",paddingBottom:"80px"}}>
          <div className='width-70 center-div flex'>
          <div className='faq-form'>
            <h1 className='white'>Frequently Asked Questions</h1>
            <p className='orange-text'>Question Here</p>
            <div className='flex column' style={{gap:"30px"}}>
            <input className='input' type='text' placeholder='Answer Here' />
            <input className='input' type='text' placeholder='Answer Here' />
            <input className='input' type='text' placeholder='Answer Here' />
            <input className='input' type='text' placeholder='Answer Here' />
            </div>
            <button className='button' style={{marginTop:"20px"}}>Submit</button>
          </div>
          <div className='questions center-div'>
            <h1>Question Here</h1>
            <h1 className='orange-text'>Frequently Asked Questions</h1>
          </div>
          </div>
        </div>
      </div>


      <div className='footer'>
        <div style={{ borderBottom: "2px solid gray" }}>
          <div className='width-70 flex space-between center-div' style={{paddingBottom:"20px"}}>
            <div>
              <h1>Services</h1>
              <p>Transport</p>
              <p>Delivery</p>
              <p>Goods</p>
              <p>Communication</p>
            </div>
            <div>
              <h1>Accessories</h1>
              <p>Building</p>
              <p>Machines</p>
              <p>Electricians</p>
              <p>Media</p>
            </div>
            <div>
              <h1>Electrical</h1>
              <p>Systems</p>
              <p>Laptops</p>
              <p>E-Billings</p>
            </div>
            <div>
              <h1>Social Media</h1>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>Instagram</p>
            </div>
          </div>
        </div>
        <div className='width-70 flex space-between center-div items-center'>
          <p>Contact Us On</p>
          <div>
            <div className='image-container'>
              <img src='/images/whatsapp-icon.png' alt='whatsapp' />
              <img src='/images/facebook-icon.png' alt='facebook' />
              <img src='/images/twitter-icon.png' alt='twitter' />
              <img src='/images/whatsapp-icon.png' alt='whatsapp' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;