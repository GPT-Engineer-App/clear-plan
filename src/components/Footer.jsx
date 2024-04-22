import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4} textAlign="center">
      <Text>Made with ❤️ by GPT Engineer - {new Date().getFullYear()}</Text>
    </Box>
  );
};

export default Footer;
