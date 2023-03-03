import React from 'react';
// import { ChannelList, useChatContext } from 'stream-chat-react'
// import Cookies from 'universal-cookie';
import { ChannelSearch, GeneralChannelList, GeneralChannelPreview } from '.';
import threadifyIcon from '../assets/threadify.png'
import LogoutIcon from '../assets/logout.png'
import { ChannelList, ThreadHeader } from 'stream-chat-react';

const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={threadifyIcon} alt="threadify" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
)

const ChannelListContainer = () => {
    return (
        <>
            <SideBar />
            <div className='channel-list__list__wrapper'>
                <ThreadHeader />
                <ChannelSearch />
                <ChannelList
                filters={{}}
                channelRenderFilterFn={() => { }}
                List={(listProps) => (
                    <GeneralChannelList
                    {...listProps}
                    type="general"
                    />
                )}
                Preview={(previewProps) => (
                    <GeneralChannelPreview
                    {...previewProps}
                    type="general"
                    />
                )}
        />
            </div>
        </>
    );
}

export default ChannelListContainer;