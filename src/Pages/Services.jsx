import React from 'react';
import { FaPalette } from 'react-icons/fa'; // Import the creative icon

const Services = () => {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(your-background-image.jpg) center/cover fixed no-repeat" }}>
      <div style={{ width: "80%", margin: "auto", textAlign: 'center', padding: '20px', color: 'white' }}>
        <h2 style={{ color: '#62BD57', marginBottom: '20px' }}>SERVICES THAT WE OFFERED</h2>

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* Service Card 1 */}
          <div style={{ width: '30%', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', background: '#333', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
            <FaPalette size={30} style={{ marginBottom: '10px', color: '#62BD57' }} />
            <h3>Creative Design</h3>
            <p>
              Si dero magnientem ut et a sum que pa eium nimus min eumet la con et licabor alis dit pratia cumquas mos
              dolecepratur min praes.
            </p>
            <button style={{ padding: '10px', background: '#D92F42', color: '#fff', cursor: 'pointer', border: 'none', borderRadius: '4px' }}>READ MORE</button>
          </div>

          {/* Service Card 2 */}
          <div style={{ width: '30%', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', background: '#333', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
            <FaPalette size={30} style={{ marginBottom: '10px', color: '#62BD57' }} />
            <h3>New Technologies</h3>
            <p>
              Si dero magnientem ut et a sum que pa eium nimus min eumet la con et licabor alis dit pratia cumquas mos
              dolecepratur min praes.
            </p>
            <button style={{ padding: '10px', background: '#D92F42', color: '#fff', cursor: 'pointer', border: 'none', borderRadius: '4px' }}>READ MORE</button>
          </div>

          {/* Service Card 3 */}
          <div style={{ width: '30%', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', background: '#333', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
            <FaPalette size={30} style={{ marginBottom: '10px', color: '#62BD57' }} />
            <h3>Quality Products</h3>
            <p>
              Si dero magnientem ut et a sum que pa eium nimus min eumet la con et licabor alis dit pratia cumquas mos
              dolecepratur min praes.
            </p>
            <button style={{ padding: '10px', background: '#D92F42', color: '#fff', cursor: 'pointer', border: 'none', borderRadius: '4px' }}>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
