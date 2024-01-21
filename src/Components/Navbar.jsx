import React from 'react'
import { FaLocationArrow, FaPhone, FaBuilding, FaInbox } from 'react-icons/fa'
import { HStack } from '@chakra-ui/react'
import SocialIcons from './SocialIcons'
import "../Styles/Navbar.css"
import { IconButton } from '@chakra-ui/react'
import { useState } from 'react'

const Navbar = () => {

    const menuItems = ['HOME', 'ABOUT US', 'PRODUCTS', 'QUALITY', 'SERVICES', 'INFRASTRUCTURE', 'INVESTORS'];
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);

    const selectMenuItem = (index) => {
        setSelectedMenuItem(index);
    };
    return (
        <div>
            <div className="firtNavCont">
                <div className="firstNav">
                    <HStack>
                        <FaLocationArrow />
                        <p>“Khattri House” Near Bhagwan Sheet Bhandar, Kothi Road, Rewa-486001 M.P.</p>

                    </HStack>
                    <HStack>
                        <FaPhone />
                        <p>
                            +91 9007977270

                        </p>
                    </HStack>
                    <HStack>
                        <SocialIcons />
                    </HStack>
                </div>
            </div>
            <div className='secondNavCont'>
            <div className='secondNav'>
                <HStack>
                    <h1>OSRM</h1>
                </HStack>
                <HStack width={"45%"}>
                    <IconButton
                        color={'#62BD57'}
                        as="a"
                        href="#your-facebook-url"
                        target="_blank"
                        aria-label="building"
                        icon={<FaBuilding />}
                        variant="ghost"
                        fontSize="24px"
                    />
                    <p><span style={{ "font-weight": "bold", "font-size": "larger" }}>“Khattri House”</span> Near Bhagwan Sheet Bhandar, Kothi Road, Rewa-486001 M.P.</p>

                </HStack>
                <HStack>
                    <IconButton
                        color={'#62BD57'}
                        as="a"
                        href="#your-facebook-url"
                        target="_blank"
                        aria-label="mail"
                        icon={<FaInbox />}
                        variant="ghost"
                        fontSize="24px"
                    />
                    <p>mdali91935@gmail.com</p>
                </HStack>
            </div>
            </div>
        
            <div className="thirdNav">
                <div className="menu-container">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className={`menu-item ${selectedMenuItem === index ? 'selected' : ''}`}
                            onClick={() => selectMenuItem(index)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar