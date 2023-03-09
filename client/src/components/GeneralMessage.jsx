import React from 'react';
import { MessageSimple, useMessageContext } from 'stream-chat-react';

const GeneralMessage = () => {
    const { handleOpenThread, message } = useMessageContext();

    return (
        <MessageSimple
            message={{ ...message, user: {}}}
            //  handleOpenThread={}
        />
    )
}

export default GeneralMessage