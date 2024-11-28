import React, { useEffect, useRef, useState } from 'react'

export default function Home() {

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  //sec1
  //Linked In
  const handleLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/pagada-h-b7085327b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
  }

  useEffect(() => {
    const LinkedIn = document.querySelector('.LinkedIn')
    if (LinkedIn) {
      LinkedIn.addEventListener('click', handleLinkedIn)
    }
    return () => {
      if (LinkedIn) {
        LinkedIn.removeEventListener('click', handleLinkedIn)
      }
    }
  }, [])

  //Github
  const handleGit = () => {
    window.location.href = "https://github.com/"
  }

  useEffect(() => {
    const Github = document.querySelector('.Github');
    if (Github) {
      Github.addEventListener('click', handleGit);
    }
    return () => {
      if (Github) {
        Github.removeEventListener('click', handleGit)
      }
    }
  }, [])

  //insta
  const handleInsta = () => {
    window.location.href = "https://www.instagram.com/hxrmii__.04/profilecard/?igsh=eWd2cGsxdTJwb3pl";
  };

  useEffect(() => {
    const instaIcon = document.querySelector('.insta-icon');
    if (instaIcon) {
      instaIcon.addEventListener('click', handleInsta);
    }

    return () => {
      if (instaIcon) {
        instaIcon.removeEventListener('click', handleInsta);
      }
    };
  }, []);


  //sec4

  const [count, setCount] = useState(1)
  const [count1, setCount1] = useState(1)
  const [count2, setCount2] = useState(1)
  const [count3, setcount3] = useState(1)

  useEffect(() => {
    if (count < 200) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1)
      }, 1)
      return () => clearInterval(timer)
    }

    if (count1 < 300) {
      const timer = setInterval(() => {
        setCount1((prevCount) => prevCount + 1)
      }, 1)
      return () => clearInterval(timer)
    }

    if (count2 < 100) {
      const timer = setInterval(() => {
        setCount2((prevCount) => prevCount + 1)
      }, 1)
      return () => clearInterval(timer)
    }

    if (count3 < 4 ) {
      const timer = setInterval(() => {
        setcount3((prevCount) => prevCount + 1)
      }, 1)
      return () => clearInterval(timer)
    }
  }, [count, count1, count2, count3])


  //sec5
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current

    let scrollInterval = setInterval(() => {
      if (slider) {
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
          slider.scrollTo({ left: 0, behaviour: "smooth" })
        } else {
          slider.scrollBy({ left: 300, behaviour: "smooth" })
        }
      }
    }, 2000)

    return () => clearInterval(scrollInterval)
  }, [])


  //sec6
  const LinkedIn_foot = () => {
    window.location.href = "https://www.linkedin.com/in/pagada-h-b7085327b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";
  };

  const Git_foot = () => {
    window.location.href = "https://github.com/";
  };

  const Insta_foot = () => {
    window.location.href = "https://www.instagram.com/hxrmii__.04/profilecard/?igsh=eWd2cGsxdTJwb3pl";
  };

  // const craft_web = () => {
  //   window.location.href = ("https://craft-inky.vercel.app/?vercelToolbarCode=qafqnfNnjnER64F")
  // }

  // const cake_web = () => {
  //   window.location.href = "https://cake-dlng8ygf6-harmi123456s-projects.vercel.app/"
  // }

  // const foodly_web = () => {
  //   window.location.href = "https://foodly-eosin.vercel.app/?vercelToolbarCode=W3It6lr4LA9aUO8"
  // }

  // const hotel_web = () => {
  //   window.location.href = "https://hotel-xi-one.vercel.app/?vercelToolbarCode=Eyclwrvl8shoTD5"
  // }

  // const wedding_web = () => {
  //   window.location.href = "https://674723ba59edc900c8afbd35--elegant-piroshki-3db2b3.netlify.app/"
  // }

  // const shutter_web = () => {
  //   window.location.href = "https://674725d7dbbaf400e661db94--incomparable-haupia-9feb42.netlify.app/"
  // }

  // const spark_web = () => {
  //   window.location.href = "https://6747282eb9581400bbb27ff4--inquisitive-gelato-816db8.netlify.app/"
  // }

  // const cookie_web = () => {
  //   window.location.href = "https://674728af15eda804d744443d--fluffy-gecko-16e507.netlify.app/#top"
  // }

  // const basilico_web = () => {
  //   window.location.href = "https://6747293d59edc90755afbdfd--magenta-entremet-ea90e7.netlify.app/"
  // }

  // const zomato_web = () => {
  //   window.location.href = "https://67472a3fdbbaf4074261dbe8--monumental-clafoutis-71a3a7.netlify.app/"
  // }

  return (
    <div>

      <div className="home">

        <div className="header">

          <div className="bars" onClick={toggleNav}>
            <i class="fa-solid fa-bars-staggered"></i>
          </div>

          <div className={`nav1 ${isNavVisible ? "show" : ""}`}>
            <a href="#profile">PROFILE</a>
            <a href="#services">SERVICES</a>
            <a href="#aboutme">ABOUT </a>
            <a href="#project">PROJECT</a>
            <a href="#resume">RESUME</a>
            <a href="#skills">SKILLS</a>
            <a href="#contact">CONTACT</a>
          </div>

          <div className="nav">
            <div className="blue"></div> &nbsp;&nbsp;&nbsp;
            <h1>Harmi Pagada / <span >DEVELOPER</span> </h1>
          </div>
          <div className="nav" id='nav'>
            <a href="#profile">PROFILE</a>
            <a href="#services">SERVICES</a>
            <a href="#aboutme">ABOUT </a>
            <a href="#project">PROJECT</a>
            <a href="#resume">RESUME</a>
            <a href="#skills">SKILLS</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>

      </div>

      <div id='profile' >
        <div className="sec1">

          <div className="right">

            <div className="profile">

              <div className="profile_pic">
                <img src="/img1.jpg" alt="" />
              </div>
              <h1>Harmii <br /> Pagada</h1>
              <div className="blue_line"></div>
              <p>Web Developer</p>

              <div className="white">

                <div className="icon">
                  <i class="fa-brands fa-meta"></i>
                  {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZZJREFUSEvtltFNxEAMRH2dQCdQCVAJUAlQCVAJdAL3pJ1o4nj3EiGR+zhLJ12y3hl7MuvkEDvFYSfeuBD/m/JnL/VNRHy33ylVVuWOOr6KiJeIAMjj4XjvIxVR5ZJDLgUvokcM2fugteeIeG2gkH5ZLkTcU1xX5BVxBqLytyP4XQMUKOSsqUDvkMJRi1wKuc3kFfFTRDy2cukKuRQAQSRydQcp4DlQgtyMsxgg3i2gyJSjIq/y2HffOuf/TPLcsXeLlFxX4XkL0LRBXc/wMvFP29TrVpgC0/XaIic+J3aZ1wDpmOh5l+5tx1EGnHK2Eufi6FhGLN3bJJGSGBAjzszlRsDJODEHlWsyyVAue08p5Uy43rEbZqrMmHvredhUki8M5sSjjl3ixZls7pfk1aiU1JMiTuyVO7if25Hbe5J70eUzRlXfDPlnM4+Pyd7ZzoNF+xmdivI4sQioZnI2Vs9wnpcHi68NB0iPfA2pSPAKz9vfUAu3n3ofA1a+Tzuj1G8PPwjO/tNnRYPbUi4db9PrD9m7Sf0LkDl0H35XXYsAAAAASUVORK5CYII=" /> */}
                </div>
                <div className="icon">
                  <div className="Github" ><i class="fa-brands fa-github"></i></div>
                  {/* <img className='Github' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAa1JREFUSEvFlo1NAzEMRtNNYBOYBJgEmASYpHSSsgncQ/cdjuskboR0lqpCleT5c/yTQ9nJDjtxywz4rpRyszrM9+f691cphU/KsmAAzwvEQiMATjxlHMiA35aDHlMy/ha9l1Jeew70wKgEisoZI+z3LXgLDPQ8Qwv23EbwFvholCp5ssqVZFofKo/AL2siyXmShTvjIBLMZjJr+F+/faxZzlqcl3HfnLuZB0ch5p6kOhv96Jwq5B7s1QL6LzBRI3q/5sHfThL3g6czRnKq0Wj/ptqCo/Bc3M0VHnSjZ8E+IWbDLN+i85SoVajpTjQMa2ENJlVHEUyDZxJLfnWvbhTqzcOkSrssfcds8lmdnjaBY7b7XVSRL6eoBGYyO8qXqjR7DYSFqsPhmDOKW2O0EhD1aqnWQOcgOUDo6cc4Yg2F6uOtdKhYoyFBOXHog4FHCTcao8MhIW+lGoWUlH3yeLV+j1cctt3eC0RwvAU2eshFidns9aM3lz1MA54IRObB3QEzAgOwidM7zIKHJZgBS536+DZTnWwaxmn5rXpppFJ8oi1Ob7lG8TQk2rgb+AfWnmsfmQKnwwAAAABJRU5ErkJggg==" /> */}
                </div>
                <div className="icon">
                  <div className='LinkedIn' ><i class="fa-brands fa-linkedin-in"></i></div>
                  {/* <img className='LinkedIn' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAATVJREFUSEvtljFuwkAQRR8HoExDFVrOkEhwDhQBoghHSAfcgg4iRWlzAkSU9Gkpk0PkAORHCxoPNga0lhHySCtL6915npm/O65RktVK4nJx4D5wAyyBryKykhbxJ3BnYA/AS2y4Bz8CMwdZA62iweM/wMRBfoF60eB74MNBXoFu0WD5HwFPQAN4A4aAoo5qF3eczo3uFtD4CSPTj49Ym1Zu9bMRnITXc+87ATYPT/v6HRikfUQa+Ns5XoTNmhZYyrc2TZnLhccAH1MWfVzimMYGq7YqlzelXCXZWSywnMp5Vjk037S1jgHeS2MQaNuFHR0s1UqA1qRwdThrNit7/Vj1OVXVCYcH0l2BE3WoUq105F2Zlbiybq+Dx0mb/I1je+u23/ru4+/m3HVX8wdyTIv8X1NaxBtPCGofbR6NigAAAABJRU5ErkJggg==" /> */}
                </div>
                <div className="icon">
                  <div className="insta-icon" ><i class="fa-brands fa-instagram"></i></div>
                  {/* <img className="insta-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAcBJREFUSEvllk1OxDAMhT03gZMABwEBFwFOws9F+NmyZQ+cBPqN/JBJnTZtFhUi0qgznfg9+9lxvLON1m4jXvsTxAdmxmduPc1t4P+5iK/N7MjMjlvAfM+HP++HJ/bpqhFDdBsiFJieU35EJ9l/YmYjuxrxu5Mi280QcZN87o3SgeM4Aelh6WlGjMG5k+Ht0nXqKXxx1SC/M7OLCJQRK1q8bJE24kH64C8gwv4xizoj/nLDWhqQEkUoOoA/PSK+nw2yUlSsSyclkJHcJTigbCSnmcxU6VWiPcCqYpwC983MXh0PXPB+aqUkJh9IkxFHUgpOaSByyFi8L48QeOCuIpYSgP8CcEI5jDPkNp6CLmJFO6rOILtOQxl1F7FAiQbybNXS1EWcGhfs5BkHS1W6iDeTOhZXJrdkzoqvK2IAJSXfkfM59Gad7ew4qRNOHqepBqKOlTWQ2hnmfdqCa50rvVFChEhL48AZIkeBWl9PW3DWj1squPXGUnpmezWAquBav24lZZ+CaLoWkQ8DnmsGAQixXTwIyFDk/O4ZfcrevVdsatiL9+6SYU+Orhr2yjy2jrbYNc1nc+PtkkJatPf/EX8DIXGOHzTONr8AAAAASUVORK5CYII=" alt="Instagram Icon" /> */}
                </div>

              </div>

            </div>

          </div>

          <div className="left">

            <div className="intro">
              <h2>"Welcome to my world of code!" &nbsp;!</h2>
              <h3>Here's who I am & what I do</h3>
              <div className="resume">
                <div className="project" id='pro_1'>
                  <a href="#resume">RESUME</a>
                </div>
                <div className="project">
                  <a href="#project">PROJECT</a>
                </div>
              </div>
              <p>"As a passionate web developer, I specialize in crafting dynamic, user-friendly, and visually appealing websites. With expertise in HTML, CSS, JavaScript, and frameworks like React, I focus on creating seamless user experiences while ensuring responsive and accessible designs."</p>
              <p>"Creative web developer building responsive and user-friendly websites with a focus on innovation and functionality."</p>
            </div>

          </div>

        </div>
      </div>

      <div id='services' className="sec3">

        <h1>My Offered Services</h1> <br />

        <p>"A web developer girl is a creative problem-solver, crafting innovative digital experiences <br /> with code and design."</p>

        <div className="web">

          <div className="six">
            <div className="icon">
              <i class="fa-solid fa-chart-pie"></i>
              {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAfNJREFUSEvFljFOxDAQRf/eBO6ARAm0tFwALkBJC1Qg0SNRAScBSpCWhgNAxTVgP/JEP87YM2GLtRRltUnm/fke27PAhsZiQ1z8B7wFYB8A719FOO/Pc5LIggk5BnDeCW7wx4yICJwB1lpMwKU4MtHbAxP6VCy1D2nnS8mIv9X2vTIF9i4FHLTgLTADfopMBjlxLLwC8A3gFcBbEaJim/AWmB+zgDho2UVjbn/k/yUACuFd68GFe+D78mEE5XMFm4YbAGdFrBXjQ3Fs0FmDmSWz5aDS7WCJeGB+QvgtACbBmJOpqsGaLQsjWpstMOFHAN6lVhiLMf9GDWZBsbAm1iTmuH6Fc71THLSsBwcVrDb3CkoBvYz53u6q2g9l4xlcVDArkVZzcOkw62hE4NOV5R9SN0PcFpiW2D7cg0fgawB3Ms+DkwrmWrXyz4IjR+y5CXQz1jnOVHQW6k7husWVgbtOKlj359Gay0TvvKN7w8Cr17Ht0a1DYa4Gnb7R3lCDNevMlhkJ0cNmVDfRIZHdwTwBOrfhIcEA2gAwa7YyrWOxlbFCXefWbQRqsNe1uEtzTutD5XZZ+2MOsYi81sfrWtzTycsg6i49u8NDJuoyLSgt5HZKEa1h9cBCCvf5LFgFUAQvs9nsj5qGkeC54Gjdpp9vDPwLG6mEH1KffnEAAAAASUVORK5CYII=" /> */}
            </div>
            <h3>Web Design</h3>
            <p>“It is not because things are difficult that we <br /> do not dare; it is because we do not dare that <br /> they are difficult.”</p>
          </div>

          <div className="six">
            <div className="icon">
            <i class="fa-solid fa-desktop"></i>
              {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAR9JREFUSEvtVsERgkAMXDrRStRK1ErUSrQT7URLkXU8JuS4XAgPeJAZZuC43LKbkKTBTNbMhIvFA+8nKvMBwKszi/EGwB3AVNAEdmtvrunBAuamy0Sm2n2bmFvAzz9bSnQOfMCxBTkpP57z4JoH+AXgEAAeUqyTuwTMuDK+jDOB6SCNazUbBUwwLc8QAIEpWy9T1UY3MNm9azTEe8bKir0bWG60YiqTZuxfMRhjCew90Lsv+5el4wpcyrOIMqvUvZIZkXDNapmQocrlldBqFizBvKRVK5fuRtJ5F5xK2FA4CPysVLm8vcLTHnkWQUmm62YSmD2YU4fXogNCxpgLabjTsdEfk4YDL+OMjDWBlJhno6pXIrlv8QN9hJTpMxvjL9djVh83tjVdAAAAAElFTkSuQmCC" /> */}
            </div>
            <h3>Web Development</h3>
            <p>If you are an entrepreneur, you know that <br /> your success cannot depend on the opinions <br /> of others. Like the wind, opinions.</p>
          </div>

          <div className="six">
            <div className="icon">
            <i class="fa-solid fa-camera-retro"></i>
              {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAWpJREFUSEvtls1tAjEQhR+dhE7gxolI0AA5hDYCbYQDNECkcMqNpJKkk4SHbGQsezxvtdJe4tMu2P7m583MjjDQGg3ERRfwCsBDweADgB+vIwqYsG/jYkKnXrgX3IJGe9xwD9gLleAl8D7L4cSbt2QfPU/z/XW5804DOfi3A0Q5Mo4GpeANgBfllnBJSeG1a56C53fl5AXz8GcWSpYYjW4Zsb1YRI4EJozlUluEUh+WJmQwhcL8xPUMYBZePgDswjPhZ8NzGXzLDYB3APPM7ROAx/CblTIZHEVIT18rsV4nnteqQwKnYT4CWFTAbwCW4T+21pLQJHAqKi+4F4/pRCx8T6itFit5TLAiLtY0y6q0ZHA+daxyskanDKb1bPI8aA171nCvDSQdeYSXWmYtvGnIO3mc54xwCqnVn5tgSxTi0KpuL3rc6rN9wG9jOP8Q8I431QimJWrjetbzzaVCXPv/wa4w9bFpsFD/AfhKYh8ToMDdAAAAAElFTkSuQmCC" /> */}
            </div>
            <h3>Photography</h3>
            <p>Do you want to be even more successful? <br /> Learn to love learning and growth. The more <br /> effort you put into improving your skills.</p>
          </div>

          <div className="six">
            <div className="icon">
            <i class="fa-solid fa-mountain-sun"></i>
              {/* <img src="data:image/png;base64,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" alt="" /> */}
            </div>
            <h3>Clipping Path</h3>
            <p>Hypnosis quit smoking methods maintain <br /> caused quite a stir in the medical world over <br /> the last two decades. There is a lot of <br /> argument.</p>
          </div>

          <div className="six">
            <div className="icon">
            <i class="fa-solid fa-mobile-screen-button"></i>
              {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAANRJREFUSEvtl9ENwjAMBV83gU1gEtgEmASYBEZhE+AkIhWKGyeNVJBsqeqP7Utsp3ntNJN1M3E1Bl5I2k5Y2E3S9ZmD98As8ErSZQI0hQI9SDp95rLAQIG3MOBLL/jegtjLMdigteMEpkTnykVsejNSDKY/+0owcbtXbIDNc5x6HKUumbMYrrdq5T4gMVwxXGMV+M/jxCX+Vbo4mo104sGKbydHfpdLgM1rsaXYQ+KuvWIPPX10dS/vBBS461uNExOJxE2TmUcMPUy99pO/MDU7dMc8AFTPQR/CKZyoAAAAAElFTkSuQmCC" /> */}
            </div>
            <h3>Apps Interface</h3>
            <p>Do you sometimes have the feeling that <br /> you’re running into the same obstacles over <br /> and over again? Many of my conflicts.</p>
          </div>

          <div className="six">
            <div className="icon">
            <i class="fa-solid fa-rocket"></i>
              {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAfVJREFUSEvFlitLBVEQx3+3mQ0WwQcWUavBptkiiFHUL6AWi0WtFoPBqGAQDH4FH0GjCIIIgg8sNrFo0x05Z5k7d/fs2QfchWXZ3dn5zX8e52yLLh2tLnFpEjzkRMh1Gnhx93L1Z6qzCbCADh0slMAjYMUb1AELcBnYKlGumSTAC7GvChboswHuOKc+rTr1585WFIvySmALFeB2QLW2T23LKrbQVIEDDwJvSfp/TSD+vhI4BB0BToBJ4AtY8yl1AXhw2mB5imUc5FxKHAhQ6uZrJr6s0lNgQan8BnqBHwPOVSzOpRE0xJbPQuX9PTBuDMeAB9f5Mm5tAWvFotB3n/chSv/b3x2XJoX++R6wruwegVF3LyPnwcN+YQmByzbePjALCHQTuHVgGTufwdSndm4XBFErEdY5ZMz8AtNWIquqSbhOcYeIrHQ2AddQyVi6VPr05dWxDrwQWrRkVoFHQYvA8r4M3I5jR3p1l8aMTCxcZlUUZ9bUjkYeeA5YBObdBzFwDS4UlGXQB3w44FkJuJ7ZSuBdYEOlJhZeW/E70G9qEgPv2PpCS55NyUCy5b2aD+6AVeBKPQ/9b2XtXh0xWPAUcO2sboBj4CAn8ix49PpuwRNAD/CUbHOfEbuDhQdnt+wcF/H1D7zeu4PfFbZ9EbXq+66B/wDkP3ofuGQtyQAAAABJRU5ErkJggg==" /> */}
            </div>
            <h3>Graphic Design</h3>
            <p>You’ve heard the expression, “Just believe it <br /> and it will come.” Well, technically, that is true, <br /> however, ‘believing’ is not just thinking that.</p>
          </div>

        </div>

      </div>

      <div id='aboutme'>
        <div style={{ position: 'relative', width: '100%', height: '0', paddingTop: '56.2225%', paddingBottom: '0', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: "0.9em", overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }} >
          <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0' }}
            src="https://www.canva.com/design/DAGXTbRAxRM/xuvxbR2VZNDMAL2NC8g6qw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
          </iframe>
        </div>
      </div>

      <div className="sec4">
        <div className="count">
          <h1>{count}  </h1>
          <p>Projects Completed</p>
        </div>
        <div className="count">
          <h1>{count1} </h1>
          <p>Learning Hours</p>
        </div>
        <div className="count">
          <h1>{count2} </h1>
          <p>Cups Of Coffee</p>
        </div>
        <div className="count">
          <h1>{count3} +</h1>
          <p>Company Visit</p>
        </div>
      </div>

      <div id='project' className="sec5">
        <div className="project-gallery">
          <h2>My Projects</h2>

          <div className="projects-container" ref={sliderRef}>

            <div className="project-card">
              <img src="/craft.jpeg" alt="Craft Project" className="project-image" />
              <h3 className="project-title">Craft Project</h3>
              <p className="project-description">A beautiful craft-making project.</p>
              {/* <button className="live_web" onClick={craft_web}>
                <a href="" target='blank'>Explore More</a>
              </button> */}
              <button className='live_web'>
                <a href="https://craft-inky.vercel.app/?vercelToolbarCode=qafqnfNnjnER64F" target='_blank' style={{textDecoration:"none", color:'white'}}>Explore More </a>
              </button>
            </div>

            <div className="project-card">
              <img src="/cakestore.jpeg" alt="Craft Project" className="project-image" />
              <h3 className="project-title">cake Project</h3>
              <p className="project-description">Delicious Cakes</p>
              <button className='live_web'>
                <a href="https://cake-dlng8ygf6-harmi123456s-projects.vercel.app/" target='_blank' style={{textDecoration:"none", color:'white'}}>Explore More </a>
              </button>
              {/* <button className="live_web" onClick={cake_web}>Explore More</button> */}
            </div>

            <div className="project-card">
              <img src="/foodly.jpeg" alt="Craft Project" className="project-image" />
              <h3 className="project-title">Foodly Project</h3>
              <p className="project-description">"Discover recipes, savor flavors, and enjoy  <br /> the art of cooking with Foodly!"</p>
              <button className='live_web'>
                <a href="https://foodly-eosin.vercel.app/?vercelToolbarCode=W3It6lr4LA9aUO8" target='_blank' style={{textDecoration:"none", color:'white'}}>Explore More </a>
              </button>
              {/* <button className="live_web" onClick={foodly_web}>Explore More</button> */}
            </div>

            <div className="project-card">
              <img src="/basiliico.jpeg" alt="Portfolio Project" className="project-image" />
              <h3 className="project-title">Hotel</h3>
              <p className="project-description">"Enjoy your Meal"</p>
              <button className='live_web'>
                <a href="https://6747293d59edc90755afbdfd--magenta-entremet-ea90e7.netlify.app/" target='_blank' style={{textDecoration:"none", color:'white'}}>Explore More </a>
              </button>
              {/* <button className="live_web" onClick={basilico_web}>Explore More</button> */}
            </div>

            <div className="project-card">
              <img src="/cookies.jpeg" alt="E-commerce Project" className="project-image" />
              <h3 className="project-title">Cookies</h3>
              <p className="project-description">"Cookies are delicious baked treats, <br /> often sweet and crispy, enjoyed <br /> as snacks or desserts worldwide."</p>
              <button className='live_web'>
                <a href="https://674728af15eda804d744443d--fluffy-gecko-16e507.netlify.app/#top" target='_blank' style={{textDecoration:"none", color:'white'}}>Explore More </a>
              </button>
              {/* <button className="live_web" onClick={cookie_web}>Explore More</button> */}
            </div>

            <div className="project-card">
              <img src="/hotel.jpeg" alt="Blog Project" className="project-image" />
              <h3 className="project-title"> Hotel</h3>
              <p className="project-description">"Stay fearlessly"</p>
              <button className='live_web'>
                <a href="https://hotel-xi-one.vercel.app/?vercelToolbarCode=Eyclwrvl8shoTD5" target='_blank' style={{textDecoration:"none", color:'white'}}>Explore More </a>
              </button>
              {/* <button className="live_web" onClick={hotel_web}>Explore More</button> */}
            </div>

            <div className="project-card">
              <img src="/shutter.jpeg" alt="Blog Project" className="project-image" />
              <h3 className="project-title">Shutter</h3>
              <button className='live_web'>
                <a href="https://674725d7dbbaf400e661db94--incomparable-haupia-9feb42.netlify.app/" target='_blank' style={{textDecoration:"none", color:'white'}}>Explore More </a>
              </button>
              {/* <button className="live_web" onClick={shutter_web}>Explore More</button> */}
              {/* <p className="project-description"> ""</p> */}
            </div>

            <div className="project-card">
              <img src="/spark.jpeg" alt="Blog Project" className="project-image" />
              <h3 className="project-title">Blog Project</h3>
              <p className="project-description">A blog for sharing ideas and stories.</p>
              <button className='live_web'>
                <a href="https://6747282eb9581400bbb27ff4--inquisitive-gelato-816db8.netlify.app/" target='_blank' style={{textDecoration:"none", color:'white'}}>Explore More </a>
              </button>
              {/* <button className="live_web" onClick={spark_web}>Explore More</button> */}
            </div>

            <div className="project-card">
              <img src="/sunshine.jpeg" alt="Blog Project" className="project-image" />
              <h3 className="project-title">Wedding</h3>
              <p className="project-description">"A wedding is a celebration of love and <br /> commitment, uniting two souls in a lifelong bond."</p>
              <button className='live_web'>
                <a href="https://674723ba59edc900c8afbd35--elegant-piroshki-3db2b3.netlify.app/" target='_blank' style={{textDecoration:"none", color:'white'}}>Explore More </a>
              </button>
              {/* <button className="live_web" onClick={wedding_web}>Explore More</button> */}
            </div>

            <div className="project-card">
              <img src="/zomato.jpeg" alt="Blog Project" className="project-image" />
              <h3 className="project-title">Zomato 😋</h3>
              <p className="project-description"> "Crave it, order it, love it—deliciousness delivered!"</p>
              <button className='live_web'>
                <a href="https://67472a3fdbbaf4074261dbe8--monumental-clafoutis-71a3a7.netlify.app/" target='_blank' style={{textDecoration:"none", color:'white'}}>Explore More </a>
              </button>
              {/* <button className="live_web" onClick={zomato_web}>Explore More</button> */}
            </div>

          </div>

        </div>
      </div>

      <div id='skills' className='sec6'>

        <div className="skill">
          {/* <h1>Skills</h1> */}
          <div className="html">
            <img className="vert-move" src="/html.png" />
            {/* <p>HTML</p> */}
          </div>

          <div className="css">
            <img className="vert-move" src="/css.png" />
            {/* <p>CSS</p> */}
          </div>

          <div className="javascript">
            <img className="vert-move" src="/javascript.jpg" />
            {/* <p>JAVASCRIPT</p> */}
          </div>

          <div className="jQuery">
            <img className="vert-move" src="/jquery.png" />
            {/* <p>jQuery</p> */}
          </div>

          <div className="bootstrape">
            <img className="vert-move" src="/bootstrape.jpg" />
            {/* <p>BootStrape</p> */}
          </div>

          <div className="react">
            <img className="vert-move" src="/react.gif" />
            <p>React.js</p>
          </div>

          <div className="git">
            <img className="vert-move" src="/git.png" />
            {/* <p>Git</p> */}
          </div>

          <div className="github">
            <img className="vert-move" src="/github.png" alt="" />
          </div>

        </div>


        <section class="main-container" id='resume'>

          <div className="resumee">
            <img src="/resumee.png" alt="" />
          </div>

          <div class="main">

            <div class="big-circle">
              <div class="icon-block">
                <h1>PHP</h1>
                {/* <img src="https://www.yudiz.com/codepen/animated-portfolio/web-dev-icon.png" alt="web design icon" /> */}
              </div>
              <div class="icon-block">
                <img src="/game.png" alt="" />
                {/* <img src="https://www.yudiz.com/codepen/animated-portfolio/game-design-icon.png" alt="game design icon" /> */}
              </div>
              <div class="icon-block">
                <h1>JS</h1>
                {/* <img src="https://www.yudiz.com/codepen/animated-portfolio/game-dev-icon.png" alt="game dev icon" /> */}
              </div>
              <div class="icon-block">
                <h1>C</h1>
                {/* <img src="https://www.yudiz.com/codepen/animated-portfolio/ui-ux-icon.png" alt="ui-ux icon" /> */}
              </div>
            </div>

            <div class="circle">
              <div class="icon-block">
                <h1 style={{ color: 'white' }}>CSS</h1>
                {/* <img src="https://www.yudiz.com/codepen/animated-portfolio/app-icon.png" alt="app icon" /> */}
              </div>
              <div class="icon-block">
                <img src="/blockchain.png" alt="" />
                {/* <img src="https://www.yudiz.com/codepen/animated-portfolio/blockchain-icon.png" alt="blockchain icon" /> */}
              </div>
              <div class="icon-block">
                <img src="/arvr.png" alt="" />
                {/* <img src="https://www.yudiz.com/codepen/animated-portfolio/arvr-icon.png" alt="ar-vr icon" /> */}
              </div>
              <div class="icon-block">
                <img src="/ai.png" alt="" />
                {/* <img src="https://www.yudiz.com/codepen/animated-portfolio/artificial-intelligence-icon.png" alt="artificial intelligence icon" /> */}
              </div>
            </div>

            <div class="center-logo">
              <img src="/girl.gif" alt="" />
            </div>
          </div>

        </section>

        {/* <img src="https://assets.codeavengers.com/file/cloud/blog/programming/programming.png" alt="" /> */}
        {/* <img src="https://i.pinimg.com/736x/34/9d/ec/349dece8b043bb1a145e1bef96491aae.jpg" alt="" /> */}


      </div>

      <div id='contact' className="contact">

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
            <img src="/contact-img.jpg" alt="" />
            {/* <img src="https://digitalmarketinglab.co.in/assets/images/contact-img.jpg" alt="" /> */}
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
                <i class="fa-brands fa-meta" ></i>
                {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZZJREFUSEvtltFNxEAMRH2dQCdQCVAJUAlQCVAJdAL3pJ1o4nj3EiGR+zhLJ12y3hl7MuvkEDvFYSfeuBD/m/JnL/VNRHy33ylVVuWOOr6KiJeIAMjj4XjvIxVR5ZJDLgUvokcM2fugteeIeG2gkH5ZLkTcU1xX5BVxBqLytyP4XQMUKOSsqUDvkMJRi1wKuc3kFfFTRDy2cukKuRQAQSRydQcp4DlQgtyMsxgg3i2gyJSjIq/y2HffOuf/TPLcsXeLlFxX4XkL0LRBXc/wMvFP29TrVpgC0/XaIic+J3aZ1wDpmOh5l+5tx1EGnHK2Eufi6FhGLN3bJJGSGBAjzszlRsDJODEHlWsyyVAue08p5Uy43rEbZqrMmHvredhUki8M5sSjjl3ixZls7pfk1aiU1JMiTuyVO7if25Hbe5J70eUzRlXfDPlnM4+Pyd7ZzoNF+xmdivI4sQioZnI2Vs9wnpcHi68NB0iPfA2pSPAKz9vfUAu3n3ofA1a+Tzuj1G8PPwjO/tNnRYPbUi4db9PrD9m7Sf0LkDl0H35XXYsAAAAASUVORK5CYII=" /> */}
              </div>
              <div className="face" onClick={Git_foot}>
                <div className='Github' ><i class="fa-brands fa-github"></i></div>
                {/* <img className='Github' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAa1JREFUSEvFlo1NAzEMRtNNYBOYBJgEmASYpHSSsgncQ/cdjuskboR0lqpCleT5c/yTQ9nJDjtxywz4rpRyszrM9+f691cphU/KsmAAzwvEQiMATjxlHMiA35aDHlMy/ha9l1Jeew70wKgEisoZI+z3LXgLDPQ8Qwv23EbwFvholCp5ssqVZFofKo/AL2siyXmShTvjIBLMZjJr+F+/faxZzlqcl3HfnLuZB0ch5p6kOhv96Jwq5B7s1QL6LzBRI3q/5sHfThL3g6czRnKq0Wj/ptqCo/Bc3M0VHnSjZ8E+IWbDLN+i85SoVajpTjQMa2ENJlVHEUyDZxJLfnWvbhTqzcOkSrssfcds8lmdnjaBY7b7XVSRL6eoBGYyO8qXqjR7DYSFqsPhmDOKW2O0EhD1aqnWQOcgOUDo6cc4Yg2F6uOtdKhYoyFBOXHog4FHCTcao8MhIW+lGoWUlH3yeLV+j1cctt3eC0RwvAU2eshFidns9aM3lz1MA54IRObB3QEzAgOwidM7zIKHJZgBS536+DZTnWwaxmn5rXpppFJ8oi1Ob7lG8TQk2rgb+AfWnmsfmQKnwwAAAABJRU5ErkJggg==" /> */}
              </div>
              <div className="face" onClick={LinkedIn_foot}>
                <div className='LinkedIn' ><i class="fa-brands fa-linkedin-in"></i></div>
                {/* <img className='LinkedIn' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAATVJREFUSEvtljFuwkAQRR8HoExDFVrOkEhwDhQBoghHSAfcgg4iRWlzAkSU9Gkpk0PkAORHCxoPNga0lhHySCtL6915npm/O65RktVK4nJx4D5wAyyBryKykhbxJ3BnYA/AS2y4Bz8CMwdZA62iweM/wMRBfoF60eB74MNBXoFu0WD5HwFPQAN4A4aAoo5qF3eczo3uFtD4CSPTj49Ym1Zu9bMRnITXc+87ATYPT/v6HRikfUQa+Ns5XoTNmhZYyrc2TZnLhccAH1MWfVzimMYGq7YqlzelXCXZWSywnMp5Vjk037S1jgHeS2MQaNuFHR0s1UqA1qRwdThrNit7/Vj1OVXVCYcH0l2BE3WoUq105F2Zlbiybq+Dx0mb/I1je+u23/ru4+/m3HVX8wdyTIv8X1NaxBtPCGofbR6NigAAAABJRU5ErkJggg==" /> */}
              </div>
              <div className="face" onClick={Insta_foot}>
                <div className="insta-icon" ><i class="fa-brands fa-instagram"></i></div>
                {/* <img className="insta-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAcBJREFUSEvllk1OxDAMhT03gZMABwEBFwFOws9F+NmyZQ+cBPqN/JBJnTZtFhUi0qgznfg9+9lxvLON1m4jXvsTxAdmxmduPc1t4P+5iK/N7MjMjlvAfM+HP++HJ/bpqhFDdBsiFJieU35EJ9l/YmYjuxrxu5Mi280QcZN87o3SgeM4Aelh6WlGjMG5k+Ht0nXqKXxx1SC/M7OLCJQRK1q8bJE24kH64C8gwv4xizoj/nLDWhqQEkUoOoA/PSK+nw2yUlSsSyclkJHcJTigbCSnmcxU6VWiPcCqYpwC983MXh0PXPB+aqUkJh9IkxFHUgpOaSByyFi8L48QeOCuIpYSgP8CcEI5jDPkNp6CLmJFO6rOILtOQxl1F7FAiQbybNXS1EWcGhfs5BkHS1W6iDeTOhZXJrdkzoqvK2IAJSXfkfM59Gad7ew4qRNOHqepBqKOlTWQ2hnmfdqCa50rvVFChEhL48AZIkeBWl9PW3DWj1squPXGUnpmezWAquBav24lZZ+CaLoWkQ8DnmsGAQixXTwIyFDk/O4ZfcrevVdsatiL9+6SYU+Orhr2yjy2jrbYNc1nc+PtkkJatPf/EX8DIXGOHzTONr8AAAAASUVORK5CYII=" alt="Instagram Icon" /> */}
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
