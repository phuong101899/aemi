import React from "react";
import {Header} from "../Header";
import {Sidebar} from "../Sidebar";
import {Banner} from "../Banner";
import {Footer} from "../Footer";

type Props = {
    children?: JSX.Element | JSX.Element[];
};

export const Layout: React.FC<Props> = ({children}) => {
    return (
        <div className="min-h-full">
            <Header />
            <div className="container">
                <Banner />
                <div className="py-10">
                    <div className="mx-auto max-w-screen-xl lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="hidden lg:block lg:col-span-3">
                            <Sidebar />
                        </div>
                        <main className="lg:col-span-9">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}