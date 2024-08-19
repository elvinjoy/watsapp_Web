import { Box } from "@mui/material";
import Header from "./header";
import Search from "./Search";
import Conversations from "./conversations";


const Menu = () => {
    return (
        <Box>
            <Header />
            <Search />
            <Conversations />
        </Box>
    );
};

export default Menu;