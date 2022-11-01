import React from "react";
import {Header} from "../Header";
import {Sidebar} from "../Sidebar";

type Props = {
    children?: JSX.Element | JSX.Element[];
};

export const Layout: React.FC<Props> = ({children}) => {
    return (
        <div className="min-h-full">
            <Header />
            <div className="py-10">
                <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
                    <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
                        <Sidebar />
                    </div>
                    <main className="lg:col-span-10 xl:col-span-10">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}