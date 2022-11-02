import React from "react";

import Image from "next/image";
import {CircularButton} from "ui/buttons";


export const Header: React.FC = () => {
    return (
        <header
            className="bg-primary py-4"
        >
            <div className="max-w-7xl mx-auto flex justify-between">
                <Image src={require('./assets/brand_lg.png')} height={32} alt="Brand" />
                <div className="flex gap-4">
                    <CircularButton>
                        <Image src={require('./assets/ic_notification.png')} alt="notification" height={28} width={28} />
                    </CircularButton>
                    <CircularButton>
                        <Image src={require('./assets/ic_account.png')} alt="account" height={28} width={28} />
                    </CircularButton>
                    <CircularButton>
                        <Image src={require('./assets/ic_notification.png')} alt="notification" height={28} width={28} />
                    </CircularButton>
                </div>
            </div>
        </header>
    );
};