import React from 'react';

import { AddChannel } from '../assets';

const GeneralChannelList = ({ setToggleContainer, children, error = false, loading, type, isCreating, setIsCreating, setCreateType, setIsEditing }) => {
    if(error) {
        return type === 'general' ? (
            <div className="general-channel-list">
                <p className="general-channel-list__message">
                    Connection error, please wait a moment and try again.
                </p>
            </div>
        ) : null
    }

    if(loading) {
        return (
            <div className="general-channel-list">
                <p className="general-channel-list__message loading">
                    {type === 'general' ? 'Channels' : 'Messages'} loading...
                </p>
            </div>
        )
    }

    return (
        <div className="general-channel-list">
            <div className="general-channel-list__header">
                <p className="general-channel-list__header__title">
                    {type === 'general' ? 'Channels' : 'Direct Messages'}
                </p>
                <AddChannel 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType} 
                    setIsEditing={setIsEditing}
                    type={type === 'general' ? 'general' : 'messaging'}
                    setToggleContainer={setToggleContainer}
                />
            </div>
            {children}
        </div>
    )
}

export default GeneralChannelList
