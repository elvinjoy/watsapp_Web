import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    display: flex;
    width: 75vw;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    background-color: #ffffff;
    border-radius: 18px;
    width: calc(98% - 100px);
`;

const InputField = styled(InputBase)`   
    width: 100%;
    padding: 20px;  
    height: 15px;
    padding-left: 25px;
    font-size: 14px;    
`;

const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg);
    cursor: pointer;
`;

const Footer = ({ sendText, setValue, value }) => {
    return (
        <Container>
            <EmojiEmotionsOutlined style={{cursor: 'pointer'}}/>
            <ClipIcon />
            <Search>
                <InputField
                    placeholder="Type a message"
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={sendText}  // This will call sendText when the user presses a key
                    value={value}  // Bind the input value to the state
                />
            </Search>
            <Mic style={{cursor: 'pointer'}}/>
        </Container>
    );
};

export default Footer;
