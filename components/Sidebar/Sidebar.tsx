import React from "react";
import {Categories} from "../Category";
import {Brands} from "../Brand";


export const Sidebar: React.FC = () => {
    return (
        <>
            <nav aria-label="Sidebar" className="sticky top-4">
                <div className="space-y-4">
                    <Brands />
                    <Categories />
                </div>
            </nav>
        </>
    );
}