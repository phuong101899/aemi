import Image from "next/image";
import React from "react";

const navigation = {
    company: [
        {name: 'Địa chỉ: Lầu 4, Tòa nhà TSA, 22-24 Ung Văn Khiêm, Phường 25, Quận Bình Thạnh, TPHCM', href: '#'},
        {name: 'Hotline: 1800-646847', href: '#'},
        {name: 'Email: hello@aemi.vn', href: '#'},
        {name: 'Giấy phép ĐKKD: 0317056900 (Ngày 29 tháng 11 năm 2021, Sở KHĐT TP. HCM)', href: '#'},
    ],
    support: [
        {name: 'Thông tin bảo mật', href: '#'},
        {name: 'Điều khoản bán hàng', href: '#'},
        {name: 'Chính sách hoàn trả', href: '#'},
        {name: 'Chính sách giao hàng', href: '#'},
        {name: 'Chính sách thanh toán', href: '#'},
    ],
    social: [
        {name: 'Instagram', href: '#', icon: require('./assets/instagram.png')},
        {name: 'Facebook', href: '#', icon: require('./assets/facebook.png')},
        {name: 'Zalo', href: '#', icon: require('./assets/zalo.png')},
        {name: 'Tiktok', href: '#', icon: require('./assets/tiktok.png')},
    ],
}

export function Footer() {
    return (
        <footer className="bg-primary" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-5 xl:gap-8">
                    <div className="hidden lg:block space-y-8 xl:col-span-1">
                        <Copyright />
                    </div>
                    <div className="space-y-3 xl:col-span-3">
                        <div>
                            <h3 className="text-xl font-semibold uppercase text-be-white">Công ty TNHH Aemi</h3>
                            <ul role="list" className="mt-3 space-y-3">
                                {navigation.company.map((item) => (
                                    <li key={item.name}>
                                    <span className="text-base text-be-white">
                                        {item.name}
                                    </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="h-5" />
                        <div>
                            <h3 className="text-xl font-semibold uppercase text-be-white">hỗ trợ khách hàng</h3>
                            <ul role="list" className="mt-3 space-y-3">
                                {navigation.support.map((item) => (
                                    <li key={item.name}>
                                    <span className="text-base text-be-white">
                                        {item.name}
                                    </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="xl:col-span-1 mt-5 lg:mt-0 grid grid-cols-2 lg:grid-cols-none">
                        <div className="col-span-1">
                            <h3 className="text-xl font-semibold uppercase text-be-white">mạng xã hội</h3>
                            <ul role="list" className="mt-3 space-y-3">
                                {navigation.social.map((item) => (
                                    <li key={item.name}>
                                        <span className="flex gap-3 text-base text-be-white">
                                            <Image src={item.icon} width={20} height={20} alt="icon" />
                                            {item.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-1 lg:hidden flex flex-col items-end space-y-8">
                            <Copyright />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const Copyright: React.FC = () => {
    return (
        <>
            <Image src={require('./assets/brand-vertical.png')} height={156} alt="Brand" />
            <p className="text-be-white text-base font-semibold">
                © Aemi, 2022
            </p>
        </>
    );
};
