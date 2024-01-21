import React from 'react'
import "./About.css"
import img1 from "../Links/pexels-nishant-aneja-4271641.jpg"
import img2 from "../Links/pexels-thisisengineering-3862129.jpg"
import img3 from "../Links/pexels-nishant-aneja-4271641.jpg";
import img4 from "../Links/worker-4395770.jpg"
import img5 from "../Links/forklift-835342.jpg"
export const About = () => {
    return (
        <div>
            <div className='aboutMainCont'>
                <div className="left" style={{ width: "50%", margin: "auto", textAlign: 'left' }}>
                    <div style={{ width: "50%", margin: "auto" }}>
                        <h1 style={{ width: "90%", color: '#00FF00' }}>A FEW WORDS ABOUT US</h1>\
                        <h3>IS A CHALLENGE TO DO BETTER</h3>

                        <p>
                            Si dero magnientem ut et a sum que pa eium nimus
                            min eumet la con et licabor alis dit pratia cumquas mos
                            dolecepratur min praes magnatur aut quaturera il id
                            quiam, ulparunt dios doloresciis aut prorporporem et
                            fugita ducius debit, cullibus ut vel ilicill atenduc ipsapid
                            elluptibus.
                        </p>


                        <button style={{ background: "#993365", padding: "10px 15px", fontWeight: "bold", fontSize: "larger", color: "white" }}>
                            READ MORE ABOUT US
                        </button>
                    </div>

                </div>
                <div className='right' style={{ width: "50%", margin: "auto", position: "relative" }}>
                    <div className="imageCollage">
                      <img src={img1} alt="" />
                      <img src={img2} alt="" />
                      <img src={img3} alt="" />
                      <img src={img4} alt="" />
                      <img src={img5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
