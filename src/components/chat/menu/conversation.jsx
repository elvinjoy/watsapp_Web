import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled component for the container
const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled('img')({
    width: 30,
    height: 46,
    borderRadius: '50%',
    padding: '0 14px',
    objectFit: 'cover',
});

const Conversation = ({ user }) => {
    return (
        <Component>
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
