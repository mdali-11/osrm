// components/SocialIcons.js

import React from 'react';
import { Flex, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <Flex align="center" justify="center" gap={"5px"}>
      <IconButton
      color={"white"}
        as="a"
        href="#your-facebook-url"
        target="_blank"
        aria-label="Facebook"
        icon={<FaFacebook />}
        variant="ghost"
        fontSize="24px"
      />
      <IconButton
      color={"white"}

        as="a"
        href="#your-instagram-url"
        target="_blank"
        aria-label="Instagram"
        icon={<FaInstagram />}
        variant="ghost"
        fontSize="24px"
        ml={4}
      />
      <IconButton
      color={"white"}

        as="a"
        href="#your-twitter-url"
        target="_blank"
        aria-label="Twitter"
        icon={<FaTwitter />}
        variant="ghost"
        fontSize="24px"
        ml={4}
      />
       <IconButton
      color={"white"}
        as="a"
        href="#your-twitter-url"
        target="_blank"
        aria-label="Twitter"
        icon={<FaYoutube />}
        variant="ghost"
        fontSize="24px"
        ml={4}
      />
    </Flex>
  );
};

export default SocialIcons;
