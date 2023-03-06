import React from 'react';
import ChannelSearch from './ChannelSearch';
import GeneralChannelPreview from '.GeneralChannelPreview'
import GeneralChannelList from './GenneralChannelList';


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

const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>Threadify Messenger</p>
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