import { Box, Typography, styled } from "@mui/material";
import { formatDate } from "../../../utils/Common-utils";
import { useContext } from "react";
import { AccountContext } from "../../context/accountProvider";

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
    padding: 2px 25px 2px 05px;
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
                    <Text>{message.text}</Text>
                    <Time>{formatDate(message.createdAt)}</Time>
                </Own>
            ) : (
                <Wrapper>
                    <Text>{message.text}</Text>
                    <Time>{formatDate(message.createdAt)}</Time>
                </Wrapper>
            )}
        </>
    );
};

export default Message;
