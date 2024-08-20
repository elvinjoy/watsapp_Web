import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from '@mui/icons-material';
// import { emptyProfilePicture } from "../../constants/data";

const Header = styled(Box)` 
    height: 44px;
    background: #ededed;    
    padding: 8px 16px;
    display: flex;
    align-items: center;
`;

const Image = styled('img')({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%',
});

const Name = styled(Typography)`
    margin-left: 12px !important;
`;   

const Status = styled(Typography)`
    margin-left: 12px !important;
    font-size: 13px;
    color: #rgba(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
       padding: 8px;
       font-size: 26px;
       color: #000;
    }
`;


const ChatHeader = ({ person }) => {
    return (
        <Header>
            <Image src={person.picture} alt="DP" />
            <Box sx={{ flexGrow: 1 }}>
                <Name>{person.name}</Name>
                <Status>offline</Status>
            </Box>
            <RightContainer>
                <Search style={{ marginRight: '10px' }} />
                <MoreVert />
            </RightContainer>
        </Header>
    );
};

export default ChatHeader;
