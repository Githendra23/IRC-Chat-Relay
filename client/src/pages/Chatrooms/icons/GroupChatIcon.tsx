import React from "react";

interface IconProps {
    className?: string;
}

const GroupChatIcon:React.FC<IconProps> = ({className}) => {
    return (
        <svg viewBox="0 0 1024 1024" className={className} version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"
             data-darkreader-inline-fill="" stroke="#000000"
             data-darkreader-inline-stroke="">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M388.9 597.4c-135.2 0-245.3-110-245.3-245.3s110-245.3 245.3-245.3 245.3 110 245.3 245.3-110.1 245.3-245.3 245.3z m0-405.3c-88.2 0-160 71.8-160 160s71.8 160 160 160 160-71.8 160-160-71.8-160-160-160z"
                    fill="#FFFFFFFF"></path>
                <path
                    d="M591.3 981.3H186.5c-76.6 0-138.8-62.3-138.8-138.8V749c0-130.6 106.2-236.9 236.9-236.9h208.8c130.6 0 236.9 106.3 236.9 236.9v93.5c-0.2 76.5-62.4 138.8-139 138.8zM284.5 597.4c-83.6 0-151.5 68-151.5 151.5v93.5c0 29.5 24 53.5 53.5 53.5h404.8c29.5 0 53.5-24 53.5-53.5v-93.5c0-83.6-68-151.5-151.6-151.5H284.5z"
                    fill="#FFFFFFFF"></path>
                <path
                    d="M847.2 938.6c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c29.5 0 53.5-24 53.5-53.5v-93.5c0-83.6-68-151.5-151.6-151.5h-14.3c-19.8 0-37-13.6-41.5-32.9-4.5-19.3 4.8-39.1 22.5-48 54.8-27.3 88.9-82.1 88.9-143.1 0-88.2-71.8-160-160-160-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c135.2 0 245.3 110 245.3 245.3 0 57.8-19.9 111.9-54.9 154.8 88.3 34.6 151 120.6 151 220.9v93.5c0 76.6-62.3 138.8-138.9 138.8z"
                    fill="#FFF" data-darkreader-inline-fill=""></path>
            </g>
        </svg>
    );
}

export default GroupChatIcon;