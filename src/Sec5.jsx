import React, { useEffect, useRef } from 'react'

export default function Sec5() {
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

    return (

        <div>

            <div className="sec5">
                <div className="project-gallery">
                    <h2>My Projects</h2>

                    <div className="projects-container" ref={sliderRef}>
                
                        <div className="project-card">
                            <img src="./public/craft.jpeg" alt="Craft Project" className="project-image"/>
                            <h3 className="project-title">Craft Project</h3>
                            <p className="project-description">A beautiful craft-making project.</p>
                        </div>

                        <div className="project-card">
                            <img src="./public/cakestore.jpeg" alt="Craft Project" className="project-image" />
                            <h3 className="project-title">cake Project</h3>
                            <p className="project-description">Delicious Cakes</p>
                        </div> 
                        
                        <div className="project-card">
                            <img src="./public/foodly.jpeg" alt="Craft Project" className="project-image"/>
                            <h3 className="project-title">Foodly Project</h3>
                            <p className="project-description">"Discover recipes, savor flavors, and enjoy the art of cooking with Foodly!"</p>
                        </div> 

                        <div className="project-card">
                            <img src="./public/garden.jpeg" alt="Portfolio Project" className="project-image" />
                            <h3 className="project-title">Garden Project</h3>
                            <p className="project-description">"Bloom your space with vibrant plants and garden inspiration!"</p>
                        </div>

                        <div className="project-card">
                            <img src="./public/gift.jpeg" alt="E-commerce Project" className="project-image"/>
                            <h3 className="project-title">Gift Project</h3>
                            <p className="project-description">
                            "Find the perfect gift for every occasion, <br /> made with love!"</p>
                        </div>

                        <div className="project-card">
                            <img src="./public/kia.jpeg" alt="Blog Project" className="project-image"/>
                            <h3 className="project-title"> KiaWheels</h3>
                            <p className="project-description">"Experience innovation and style with every drive!"</p>
                        </div>

                        <div className="project-card">
                            <img src="./public/receipe.png" alt="Blog Project" className="project-image"/>
                            <h3 className="project-title">FlavorFusion</h3>
                            <p className="project-description"> "Whisk, savor, and share the joy of cooking!"</p>
                        </div>

                        <div className="project-card">
                            <img src="./public/spark.jpeg" alt="Blog Project" className="project-image"/>
                            <h3 className="project-title">Blog Project</h3>
                            <p className="project-description">A blog for sharing ideas and stories.</p>
                        </div>

                        <div className="project-card">
                            <img src="./public/zomato.jpeg" alt="Blog Project" className="project-image"/>
                            <h3 className="project-title">Zomato 😋</h3>
                            <p className="project-description"> "Crave it, order it, love it—deliciousness delivered!"</p>
                        </div>


                        <div className="project-card">
                            <img src="./public/bellavita.jpeg" alt="Blog Project" className="project-image"/>
                            <h3 className="project-title">Bellavita</h3>
                            <p className="project-description">"Elevate your senses with timeless beauty and wellness!"</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>


    )
}
