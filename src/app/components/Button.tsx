import clsx from 'clsx';
import { FC } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';

interface ButtonProps {
    linkField: string;
    label: string;
    showIcon?: boolean;
    className?: string;
}

const Button: FC<ButtonProps> = ({ linkField, label, showIcon = true, className }) => {
    // Check if the link is for a downloadable file or an internal/external link
    const isDownloadLink = linkField.startsWith('/') && linkField.includes('.');

    // If it's a downloadable link, use a regular <a> tag with the `download` attribute
    if (isDownloadLink) {
        return (
            <a
                href={linkField}
                download
                className={clsx(
                    "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 text-slate-900 border-slate-900 bg-slate-300 px-4 py-2 font-bold transition-transform ease-out hover:scale-105",
                    className,
                )}
            >
                <span
                    className={clsx(
                        "absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                    )}
                />
                <span className="relative flex items-center justify-center gap-2">
                    {label} {showIcon && <MdArrowOutward className="inline-block" />}
                </span>
            </a>
        );
    }

    // If it's not a downloadable link, use Next.js Link component for routing
    return (
        <Link href={linkField} passHref>
            <a className={clsx(
                "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 text-slate-900 border-slate-900 bg-slate-300 px-4 py-2 font-bold transition-transform ease-out hover:scale-105",
                className,
            )}>
                <span
                    className={clsx(
                        "absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                    )}
                />
                <span className="relative flex items-center justify-center gap-2">
                    {label} {showIcon && <MdArrowOutward className="inline-block" />}
                </span>
            </a>
        </Link>
    );
}

export default Button;
