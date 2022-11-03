import React, {InputHTMLAttributes} from "react";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    trailing?: JSX.Element,
}

export const Input: React.FC<Props> = ({trailing, ...props}) => {
    return (
        <div>
            <div className="relative mt-1 flex items-center">
                <input
                    type="text"
                    className="block w-full border-be-gray rounded focus:border-primary sm:text-sm font-normal placeholder:text-sm"
                    {...props}
                />
                {
                    trailing && (
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            {trailing}
                        </div>
                    )
                }
            </div>
        </div>
    );
};