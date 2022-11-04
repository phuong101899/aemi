import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import {ListTile} from "../../ui/list";

interface iSlideOver {
    trigger: JSX.Element,
}
export const SlideOver: React.FC<iSlideOver> = ({trigger}) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            {
                React.cloneElement(trigger, {
                    onClick: () => setOpen(true),
                })
            }
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <div className="fixed inset-0" />

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition ease-in-out duration-300 transform"
                                    enterFrom="-translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transition ease-in-out duration-300 transform"
                                    leaveFrom="translate-x-0"
                                    leaveTo="-translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <div className="flex items-start justify-center">
                                                    <Dialog.Title className="text-lg font-medium text-gray-900">
                                                        <Image
                                                            src={require('./assets/logo_primary.svg')}
                                                            alt="logo"
                                                            width={82}
                                                            height={28}
                                                        />
                                                    </Dialog.Title>
                                                </div>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <div className="space-y-1">
                                                    <ListTile>Thông tin tài khoản</ListTile>
                                                    <ListTile isActivated={true}>Lịch sử đơn hàng</ListTile>
                                                    <ListTile>Đổi mật khẩu</ListTile>
                                                    <ListTile>Đăng xuất</ListTile>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
