import { Box, Typography, styled  } from "@mui/material";
import { useContext } from "react"; 
import { AccountContext } from "../../context/accountProvider";
import { setConversation } from "../../../service/api";

// Styled component for the container
const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled('img')({
    width: 40,
    height: 46,
    borderRadius: '50%',
    padding: '0 14px',
    objectFit: 'cover',
});

const Conversation = ({ user }) => {

    const { setPerson, account } = useContext(AccountContext);

    const getUser = async () => {
        setPerson(user);
        await setConversation({senderId: account.sub, receiverId: user.sub });
    } 

    return (
        <Component onClick={() => getUser()}>
            <Box>
                <Image src={user.picture} alt="DP" />
            </Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Component>
    );
};

export default Conversation;
