import Image from "next/image";

import w1440 from "./assets/1440w.png";
import w1200 from "./assets/1200w.png";
import w1000 from "./assets/1000w.png";
import w863 from "./assets/863w.png";
import w767 from "./assets/767w.png";

export const Banner = () => {
    return (
        <picture>
            <source media="(min-width: 1440px)" srcSet={w1440.src} />
            <source media="(min-width: 1200px)" srcSet={w1200.src} />
            <source media="(min-width: 1000px)" srcSet={w1000.src} />
            <source media="(min-width: 863px)" srcSet={w863.src} />
            <source media="(min-width: 767px)" srcSet={w767.src} />
            <Image src={w863} alt="banner" />
        </picture>
    );
}