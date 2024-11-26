import React, { useEffect } from 'react'

export default function Sec7() {

  const handleLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/pagada-h-b7085327b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";
  };

  const handleGit = () => {
    window.location.href = "https://github.com/";
  };

  const handleInsta = () => {
    window.location.href = "https://www.instagram.com/hxrmii__.04/profilecard/?igsh=eWd2cGsxdTJwb3pl";
  };


  return (
    <div>
      <div className="contact">

        <div className="talk">

          <div className="lets">
            <h1>Let's Talk</h1>
            <p>A web developer is a skilled professional who creates and maintains websites and web applications using programming languages like HTML, CSS, JavaScript, and frameworks. </p>
          </div>

          <div className="form">
            <label htmlFor="">Your Name : </label> <br />
            <input type="text" /> <br /><br />
            <label htmlFor="">Your Email : </label> <br />
            <input type="text" /> <br /><br />
            <label htmlFor="">Your Message : </label> <br />
            <textarea name="" id="" placeholder='Type Something If You Want..'></textarea> <br /><br />
            <button className='message'>Send Message</button>
          </div>

        </div>

        <div className="talk">

          <div className="envelop">
            <img src="https://digitalmarketinglab.co.in/assets/images/contact-img.jpg" alt="" />
          </div>

          <div className="location">
            <div className="address">
              <i class="fa-solid fa-location-dot"></i>
              <p>"Khodyar Krupa" Naval nagar-3 corner <br /> Nr. Khodiyar Mandap Service</p>
            </div> <br />
            <div className="number">
              <i class="fa-solid fa-phone"></i>
              <p>91+ 8160882975</p>
            </div>
            <div className="email">
              <i class="fa-solid fa-envelope"></i>
              <p>harmipaga4@gmail.com</p>
            </div> <br />

            <div className="icons">
              <div className="face">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZZJREFUSEvtltFNxEAMRH2dQCdQCVAJUAlQCVAJdAL3pJ1o4nj3EiGR+zhLJ12y3hl7MuvkEDvFYSfeuBD/m/JnL/VNRHy33ylVVuWOOr6KiJeIAMjj4XjvIxVR5ZJDLgUvokcM2fugteeIeG2gkH5ZLkTcU1xX5BVxBqLytyP4XQMUKOSsqUDvkMJRi1wKuc3kFfFTRDy2cukKuRQAQSRydQcp4DlQgtyMsxgg3i2gyJSjIq/y2HffOuf/TPLcsXeLlFxX4XkL0LRBXc/wMvFP29TrVpgC0/XaIic+J3aZ1wDpmOh5l+5tx1EGnHK2Eufi6FhGLN3bJJGSGBAjzszlRsDJODEHlWsyyVAue08p5Uy43rEbZqrMmHvredhUki8M5sSjjl3ixZls7pfk1aiU1JMiTuyVO7if25Hbe5J70eUzRlXfDPlnM4+Pyd7ZzoNF+xmdivI4sQioZnI2Vs9wnpcHi68NB0iPfA2pSPAKz9vfUAu3n3ofA1a+Tzuj1G8PPwjO/tNnRYPbUi4db9PrD9m7Sf0LkDl0H35XXYsAAAAASUVORK5CYII=" />
              </div>
              <div className="face" onClick={handleGit}>
                <img className='Github' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAa1JREFUSEvFlo1NAzEMRtNNYBOYBJgEmASYpHSSsgncQ/cdjuskboR0lqpCleT5c/yTQ9nJDjtxywz4rpRyszrM9+f691cphU/KsmAAzwvEQiMATjxlHMiA35aDHlMy/ha9l1Jeew70wKgEisoZI+z3LXgLDPQ8Qwv23EbwFvholCp5ssqVZFofKo/AL2siyXmShTvjIBLMZjJr+F+/faxZzlqcl3HfnLuZB0ch5p6kOhv96Jwq5B7s1QL6LzBRI3q/5sHfThL3g6czRnKq0Wj/ptqCo/Bc3M0VHnSjZ8E+IWbDLN+i85SoVajpTjQMa2ENJlVHEUyDZxJLfnWvbhTqzcOkSrssfcds8lmdnjaBY7b7XVSRL6eoBGYyO8qXqjR7DYSFqsPhmDOKW2O0EhD1aqnWQOcgOUDo6cc4Yg2F6uOtdKhYoyFBOXHog4FHCTcao8MhIW+lGoWUlH3yeLV+j1cctt3eC0RwvAU2eshFidns9aM3lz1MA54IRObB3QEzAgOwidM7zIKHJZgBS536+DZTnWwaxmn5rXpppFJ8oi1Ob7lG8TQk2rgb+AfWnmsfmQKnwwAAAABJRU5ErkJggg==" />
              </div>
              <div className="face" onClick={handleLinkedIn}>
                <img className='LinkedIn' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAATVJREFUSEvtljFuwkAQRR8HoExDFVrOkEhwDhQBoghHSAfcgg4iRWlzAkSU9Gkpk0PkAORHCxoPNga0lhHySCtL6915npm/O65RktVK4nJx4D5wAyyBryKykhbxJ3BnYA/AS2y4Bz8CMwdZA62iweM/wMRBfoF60eB74MNBXoFu0WD5HwFPQAN4A4aAoo5qF3eczo3uFtD4CSPTj49Ym1Zu9bMRnITXc+87ATYPT/v6HRikfUQa+Ns5XoTNmhZYyrc2TZnLhccAH1MWfVzimMYGq7YqlzelXCXZWSywnMp5Vjk037S1jgHeS2MQaNuFHR0s1UqA1qRwdThrNit7/Vj1OVXVCYcH0l2BE3WoUq105F2Zlbiybq+Dx0mb/I1je+u23/ru4+/m3HVX8wdyTIv8X1NaxBtPCGofbR6NigAAAABJRU5ErkJggg==" />
              </div>
              <div className="face" onClick={handleInsta}>
                <img className="insta-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAcBJREFUSEvllk1OxDAMhT03gZMABwEBFwFOws9F+NmyZQ+cBPqN/JBJnTZtFhUi0qgznfg9+9lxvLON1m4jXvsTxAdmxmduPc1t4P+5iK/N7MjMjlvAfM+HP++HJ/bpqhFDdBsiFJieU35EJ9l/YmYjuxrxu5Mi280QcZN87o3SgeM4Aelh6WlGjMG5k+Ht0nXqKXxx1SC/M7OLCJQRK1q8bJE24kH64C8gwv4xizoj/nLDWhqQEkUoOoA/PSK+nw2yUlSsSyclkJHcJTigbCSnmcxU6VWiPcCqYpwC983MXh0PXPB+aqUkJh9IkxFHUgpOaSByyFi8L48QeOCuIpYSgP8CcEI5jDPkNp6CLmJFO6rOILtOQxl1F7FAiQbybNXS1EWcGhfs5BkHS1W6iDeTOhZXJrdkzoqvK2IAJSXfkfM59Gad7ew4qRNOHqepBqKOlTWQ2hnmfdqCa50rvVFChEhL48AZIkeBWl9PW3DWj1squPXGUnpmezWAquBav24lZZ+CaLoWkQ8DnmsGAQixXTwIyFDk/O4ZfcrevVdsatiL9+6SYU+Orhr2yjy2jrbYNc1nc+PtkkJatPf/EX8DIXGOHzTONr8AAAAASUVORK5CYII=" alt="Instagram Icon" />
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; 2024 Harmi Pagada. All Rights Reserved.</p>
          </div>

        </div>

        {/* <img src="https://designmodo.com/wp-content/uploads/2012/01/5-Contact-Us-by-Ivan-Poddubchenko.jpg" alt="" /> */}

      </div>
    </div>
  )
}
