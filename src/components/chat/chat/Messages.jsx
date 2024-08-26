import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import { useContext, useState, useEffect } from "react";
import { AccountContext } from "../../context/accountProvider";
import { getMessages, newMessage } from "../../../service/api";
import Message from "./message";

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const Component = styled(Box)`
    height: 83vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;

`;

const Messages = ({ person, conversation }) => {
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const { account } = useContext(AccountContext);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [file, setFile] = useState();
    const [image, setImage] = useState('');

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    }, [person.id, conversation._id, newMessageFlag]);

    const sendText = async (e) => {
        const code = e.keyCode || e.which;
        if (code === 13) {
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: file ? "file" : "text",
                text: file ? image : value,
            };
    
            if (!file || (file && image)) { // Ensure the image URL is set before sending
                await newMessage(message);
    
                setValue('');
                setFile(null);
                setImage('');
                setNewMessageFlag(prev => !prev);
            } else {
                console.log("Image URL not set yet.");
            }
        }
    };
       

    return (
        <Wrapper>
            <Component>
                {messages && messages.map(message => (
                    <Container key={message._id}>
                        <Message message={message} />
                    </Container>
                ))}
            </Component>
            <Footer
                sendText={sendText}
                setValue={setValue}
                value={value}
                file={file}
                setFile={setFile}
                setImage={setImage}
            />
        </Wrapper>
    );
};

export default Messages;
