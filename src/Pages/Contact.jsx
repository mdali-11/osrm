import React from 'react'
import img5 from "../Links/films1.jpg"
import "./Contact.css"
const Contact = () => {
  return (
    <div style={{height:"100vh" , display:"flex",flexDirection:"column", justifyContent:"center", background:"black" ,overflow:"hidden", color:"white"}}>
        <h1 style={{textAlign:"left" , marginLeft:"100PX", marginTop:"50px" , color:"#62BD57"}}>GET IN TOUCH</h1>
        <div className='contactDetails'>
            <div>
                <h4>NEWS AND EVENTS</h4>
                <div style={{textAlign:"left"}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugit atque, possimus nemo in eligendi praesentium maxime recusandae quibusdam excepturi. Ea cum sapiente voluptatibus nobis?</p>
                     <br />
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugit atque, possimus nemo in eligendi praesentium maxime recusandae quibusdam excepturi. Ea cum sapiente voluptatibus nobis?</p>
                     <br />
                     <button style={{padding:"10px 15px"}}>Read More</button>
                </div>
            </div>
            <div><h4>CORPORATE EVENTS</h4>
            <div>
                <img width="250px" src={img5} alt="" />
            </div>
            </div>
            <div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input placeholder='NAME' type="text" id="name" name="name" required />

            <input placeholder='EMAIL' type="email" id="email" name="email" required />

            <input placeholder='PHONE' type="tel" id="phone" name="phone" required />

            <textarea placeholder='MESSAGE' id="message" name="message" rows="4" required />

            <button type="submit" style={{ padding: '10px',marginTop:"15px", background: '#62BD57', color: '#fff', cursor: 'pointer', border: 'none', borderRadius: '4px' }}>
              Submit
            </button>
            </form>
            </div>
        </div>
        <div style={{background:"#62BD57" ,width:"100%" ,height:"10vh",display:"flex" , justifyContent:"center",alignItems:"center", marginTop:"120px" , color:"black"}}>
        <p>&copy; 2024 OSRM. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Contact
