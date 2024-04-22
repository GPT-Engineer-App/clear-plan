import { Box, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="nav" p={4} bg="gray.100" display="flex" justifyContent="space-between">
      <Link href="#" p={2}>Home</Link>
      <Link href="#" p={2}>About</Link>
    </Box>
  );
};

export default Header;