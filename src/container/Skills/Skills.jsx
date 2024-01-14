import React from 'react'
import './Skills.css'
import { images } from '../../constants';

const Skills = () => {
  return (
    <section className='Skills_section' id='Skills'>
      <h1 className='Skills'>Skills</h1>
      <div className="Skills_container">
        <div className="Skills_content">
          <span className='pg'>
            <svg width="30" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M20.25 13.25L24.375 17.8438L20.25 22.4375M12 22.4375L7.875 17.8438L12 13.25M5.125 34.6875H27.125C28.219 34.6875 29.2682 34.2035 30.0418 33.342C30.8154 32.4805 31.25 31.3121 31.25 30.0938V5.59375C31.25 4.37541 30.8154 3.20697 30.0418 2.34548C29.2682 1.48398 28.219 1 27.125 1H5.125C4.03098 1 2.98177 1.48398 2.20818 2.34548C1.4346 3.20697 1 4.37541 1 5.59375V30.0938C1 31.3121 1.4346 32.4805 2.20818 33.342C2.98177 34.2035 4.03098 34.6875 5.125 34.6875Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h2 className="lang">Languages</h2>
          </span>
            <img className='python' src={images.python} alt="python" />
            <h3 className='pyn'>Python</h3>
        </div>
        <div className="Skills_content">
          <span className='pg'>
            <svg width="30" height="36" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame">
              <path id="Vector" d="M3.875 16.4062C3.875 15.63 4.526 15 5.32812 15H8.23437C9.0365 15 9.6875 15.63 9.6875 16.4062V24.8438C9.6875 25.62 9.0365 26.25 8.23437 26.25H5.32812C4.94273 26.25 4.57312 26.1018 4.30061 25.8381C4.0281 25.5744 3.875 25.2167 3.875 24.8438V16.4062ZM12.5937 10.7812C12.5937 10.005 13.2447 9.375 14.0469 9.375H16.9531C17.7552 9.375 18.4062 10.005 18.4062 10.7812V24.8438C18.4062 25.62 17.7552 26.25 16.9531 26.25H14.0469C13.6615 26.25 13.2919 26.1018 13.0194 25.8381C12.7468 25.5744 12.5937 25.2167 12.5937 24.8438V10.7812ZM21.3125 5.15625C21.3125 4.38 21.9635 3.75 22.7656 3.75H25.6719C26.474 3.75 27.125 4.38 27.125 5.15625V24.8438C27.125 25.62 26.474 26.25 25.6719 26.25H22.7656C22.3802 26.25 22.0106 26.1018 21.7381 25.8381C21.4656 25.5744 21.3125 25.2167 21.3125 24.8438V5.15625Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <h2 className="lang">Data Analysis</h2>
          </span>
          <div className="data-ats">
            <img className="Data--analytics" src={images.numpy} alt="python" />
            <h3 className='Data-analysis'>Numpy</h3>
            <img className="Data--analytics" src={images.pandas} alt="python" />
            <h3 className='Data-analysis'>Pandas</h3>
            <img className="Data--analytics" src={images.matplotlib} alt="python" />
            <h3 className='Data-analysis'>Matplotlib</h3>
            <img className="Data--analytics" src={images.seaborn} alt="python" />
            <h3 className='Data-analysis'>Seaborn</h3>
          </div>
        </div>
        <div className="Skills_content">
          <span className='pg'>
            <svg width="30" height="36" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame">
              <path id="Vector" d="M10.3125 3.75V5.625M5.625 10.3125H3.75M26.25 10.3125H24.375M5.625 15H3.75M26.25 15H24.375M5.625 19.6875H3.75M26.25 19.6875H24.375M10.3125 24.375V26.25M15 3.75V5.625M15 24.375V26.25M19.6875 3.75V5.625M19.6875 24.375V26.25M8.4375 24.375H21.5625C22.3084 24.375 23.0238 24.0787 23.5512 23.5512C24.0787 23.0238 24.375 22.3084 24.375 21.5625V8.4375C24.375 7.69158 24.0787 6.97621 23.5512 6.44876C23.0238 5.92132 22.3084 5.625 21.5625 5.625H8.4375C7.69158 5.625 6.97621 5.92132 6.44876 6.44876C5.92132 6.97621 5.625 7.69158 5.625 8.4375V21.5625C5.625 22.3084 5.92132 23.0238 6.44876 23.5512C6.97621 24.0787 7.69158 24.375 8.4375 24.375ZM9.375 9.375H20.625V20.625H9.375V9.375Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <h2 className="lang">ML Libraries</h2>
          </span>
            <img className='ml' src={images.pytorch} alt="python" />
            <h3 className='ml-lib'>Pytorch</h3>
            <img className='ml' src={images.tensorflow} alt="python" />
            <h3 className='ml-lib'>TensorFlow</h3>
        </div>
        <div className="Skills_content">
          <span className='we'>
            <svg width="30" height="36" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Frame" clip-path="url(#clip0_38_3)">
              <path id="Vector" d="M10.7143 23.911V25.1278C10.7144 25.604 10.6173 26.0756 10.4288 26.5155C10.2403 26.9555 9.96394 27.3552 9.61554 27.6919L8.83929 28.4423H20.0893L19.313 27.6919C18.9647 27.3552 18.6883 26.9555 18.4998 26.5155C18.3112 26.0756 18.2142 25.604 18.2143 25.1278V23.911M25.7143 9.41101V21.1923C25.7143 21.9133 25.418 22.6048 24.8905 23.1147C24.3631 23.6246 23.6477 23.911 22.9018 23.911H6.02679C5.28087 23.911 4.5655 23.6246 4.03806 23.1147C3.51061 22.6048 3.21429 21.9133 3.21429 21.1923V9.41101M25.7143 9.41101C25.7143 8.68995 25.418 7.99843 24.8905 7.48856C24.3631 6.9787 23.6477 6.69226 22.9018 6.69226H6.02679C5.28087 6.69226 4.5655 6.9787 4.03806 7.48856C3.51061 7.99843 3.21429 8.68995 3.21429 9.41101M25.7143 9.41101V17.5673C25.7143 18.2883 25.418 18.9798 24.8905 19.4897C24.3631 19.9996 23.6477 20.286 22.9018 20.286H6.02679C5.28087 20.286 4.5655 19.9996 4.03806 19.4897C3.51061 18.9798 3.21429 18.2883 3.21429 17.5673V9.41101" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_38_3">
              <rect width="30" height="29" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <h2 className="web">Web Development</h2>
          </span>
            <img className='web-img' src={images.html} alt="python" />
            <h3 className='web-hd'>Html</h3>
            <img className='web-img' src={images.css} alt="python" />
            <h3 className='web-hd'>Css</h3>
            <img className='web-img' src={images.js} alt="python" />
            <h3 className='web-hd'>Javascript</h3>
        </div>
      </div>
    </section>
  )
}

export default Skills