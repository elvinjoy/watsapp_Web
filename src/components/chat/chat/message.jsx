import { Box, Typography, styled } from "@mui/material";
import { formatDate, downloadMedia } from "../../../utils/Common-utils";
import { useContext } from "react";
import { AccountContext } from "../../context/accountProvider";
import GetAppIcon from "@mui/icons-material/GetApp";
import { iconPDF } from '../../constants/data';

const Own = styled(Box)`
    background: #dcf8c6;
    max-width: 60%;
    margin-left: auto;
    padding: 2px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Wrapper = styled(Box)`
    background: #FFFFFF;
    max-width: 60%;
    padding: 2px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Text = styled(Typography)`
    font-size: 14px;
    padding: 2px 25px 2px 5px;
`;

const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`;

const Message = ({ message }) => {
    const { account } = useContext(AccountContext);

    return (
        <>
            {account.sub === message.senderId ? (
                <Own>
                    {message.type === "text" ? (
                        <TextMessage message={message} />
                    ) : (
                        <ImageMessage message={message} />
                    )}
                </Own>
            ) : (
                <Wrapper>
                    {message.type === "text" ? (
                        <TextMessage message={message} />
                    ) : (
                        <ImageMessage message={message} />
                    )}
                </Wrapper>
            )}
        </>
    );
};

const ImageMessage = ({ message }) => {
    return (
        <Box style={{ position: 'relative' }}>
            {message?.text?.includes('.pdf') ? (
                <Box style={{ display: 'flex'}}> 
                    <img src={iconPDF} alt="PDF" style={{ width: 80 }} />
                    <Typography style={{ fontSize: 14 }}>{message.text.split('/').pop()}</Typography>
                </Box>
            ) : (
                <img style={{ width: 300 , height: '100%', objectFit: 'cover'}} src={message.text} alt="Sent Image" />
            )}
            <Time style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <GetAppIcon 
                 onClick = {(e) => downloadMedia(e, message.text)}
                 style={{ marginRight: 12, cursor: 'pointer', border: '1px solid grey', borderRadius: '50%' }}
                 fontSize="small"
                 />
                {formatDate(message.createdAt)}</Time>
        </Box>
    );
};

const TextMessage = ({ message }) => {
    return (
        <>
            <Text>{message.text}</Text>
            <Time>{formatDate(message.createdAt)}</Time>
        </>
    );
};


export default Message;
