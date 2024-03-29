import Link from 'next/link';

import Logo from '@/components/icons/Logo';
import GitHub from '@/components/icons/GitHub';
import {
    GitHubLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon
} from '@radix-ui/react-icons';
import { MdWhatsapp } from 'react-icons/md';
import FeedbackForm from './feedback-form';

export default function Footer() {
    return (
        <footer className="mx-auto max-w-7xl px-4 bg-background border-t-primary/20 border-t-2 transition-all duration-300 ease-in-out-sine">
            <div className="grid grid-cols-1 gap-8 py-12 text-foreground lg:grid-cols-12  bg-background transition-all duration-300 ease-in-out-sine">
                <div className="col-span-1 lg:col-span-4 md:mr-24">
                    <div className="flex items-center flex-initial font-bold ">
                        <div className="flex flex-col items-start gap-2">
                            <Link
                                href={'/'}
                                className="flex flex-row items-center gap-2"
                            >
                                <Logo className="size-[54px] hover:bg-primary/20 bg-transparent border-2 border-primary/50 p-3 rounded-2xl" />
                                <h1 className="text-3xl font-extrabold dark:shadow-primary/80 shadow-primary/30  hover:[text-shadow:_1px_1px_16px_var(--tw-shadow-color)] transition-all duration-300 ease-in-out-sine tracking-tight">
                                    Study
                                    <span className="text-primary/90">
                                        Fliss
                                    </span>
                                </h1>
                            </Link>
                            <p className="font-thin text-sm lg:max-w-full max-w-[300px] text-foreground/80 dark:text-foreground/80">
                                StudyFliss is a platform consisting of all the
                                resources a student might need in order to live
                                their college years to the fullest.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-2">
                    <ul className="flex flex-col flex-initial md:flex-1">
                        <li className="py-1 md:py-0 md:pb-4">
                            <p className="font-bold text-foreground transition-all duration-300 ease-in-out-sine">
                                NAVIGATION
                            </p>
                        </li>
                        <li className="py-1 md:py-0 md:pb-4">
                            <Link
                                href="/about-us"
                                className="text-foreground/80 transition-all duration-300 ease-in-out-sine hover:text-foreground"
                            >
                                About Us
                            </Link>
                        </li>
                        <li className="py-1 md:py-0 md:pb-4">
                            <Link
                                href="/courses"
                                className="text-foreground/80 transition-all duration-300 ease-in-out-sine hover:text-foreground"
                            >
                                All Courses
                            </Link>
                        </li>
                        <li className="py-1 md:py-0 md:pb-4">
                            <Link
                                href="/growth-sf"
                                className="text-foreground/80 transition-all duration-300 ease-in-out-sine hover:text-foreground"
                            >
                                Growth SF
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1 lg:col-span-2">
                    <ul className="flex flex-col flex-initial md:flex-1">
                        <li className="py-1 md:py-0 md:pb-4">
                            <p className="font-bold text-foreground transition-all duration-300 ease-in-out-sine hover:text-foreground">
                                LEGAL
                            </p>
                        </li>
                        <li className="py-1 md:py-0 md:pb-4">
                            <Link
                                href="/"
                                className="text-foreground/80 transition-all duration-300 ease-in-out-sine hover:text-foreground"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li className="py-1 md:py-0 md:pb-4">
                            <Link
                                href="/"
                                className="text-foreground/80 transition-all duration-300 ease-in-out-sine hover:text-foreground"
                            >
                                Terms of Use
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1 lg:col-span-3">
                    <ul className="flex flex-col flex-initial md:flex-1">
                        <li className="py-1 md:py-0 md:pb-4">
                            <p className="font-bold text-foreground transition-all duration-300 ease-in-out-sine hover:text-foreground">
                                CONTACT US
                            </p>
                        </li>
                        <li className="py-1 md:py-0 md:pb-4 text-foreground/80 transition-all duration-300 ease-in-out-sine hover:text-foreground">
                            <Link href={'mailto:contact@studyfliss.com'}>
                                contact@studyfliss.com
                            </Link>
                        </li>
                        <li className="py-1 md:py-0 md:pb-4 text-foreground/80">
                            +91 8287028821
                        </li>
                        <li className="py-1 md:py-0 md:pb-4 text-foreground/80">
                            New Delhi, India
                        </li>
                    </ul>
                </div>
                <div className="flex lg:flex-row flex-col gap-8 justify-between md:items-start items-start col-span-1 text-foreground lg:col-span-full w-full lg:justify-between ">
                    {/* <h1 className="text-base uppercase font-bold transition-all duration-300 ease-in-out-sine">
                        Follow StudyFliss
                    </h1> */}
                    <div className="flex items-center h-10 divide-x-2 divide-primary/20 [:first-child]:mr-0 ">
                        {/* <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Github Repository"
                            href="https://github.com/HarjjotSinghh/"
                        >
                            <GitHubLogoIcon className="size-6 mx-2 ml-0 text-foreground/80 hover:text-foreground transition-all duration-300 ease-in-out-sine" />
                        </Link> */}
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Linkedin Company Page"
                            href="https://www.linkedin.com/company/studyfliss/"
                        >
                            <LinkedInLogoIcon className="size-6 mx-2 text-foreground/80 hover:text-primary transition-all duration-300 ease-in-out-sine" />
                        </Link>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram Page"
                            href="https://www.instagram.com/studyfliss/"
                        >
                            <InstagramLogoIcon className="size-6 mx-2 text-foreground/80 hover:text-primary transition-all duration-300 ease-in-out-sine" />
                        </Link>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram Page"
                            href="https://chat.whatsapp.com/Inpe3jKMg8eCQmt2v3PvxZ"
                        >
                            <MdWhatsapp className="size-6 mx-2 text-foreground/80 hover:text-primary transition-all duration-300 ease-in-out-sine" />
                        </Link>
                    </div>
                    <FeedbackForm className='w-full max-w-[calc(24em+8px)] space-y-1'/>

                </div>
            </div>
            <div className="flex flex-col items-center justify-between py-12 pb-24 space-y-4 md:flex-row bg-background transition-all duration-300 ease-in-out-sine border-t-primary/20 border-t-2 tracking-tight">
                <div>
                    <span>
                        &copy; {new Date().getFullYear()} StudyFliss. All rights
                        reserved.
                    </span>
                </div>
                <div>
                    <span>
                        Developed with{' '}
                        <span className="inline-block selection:bg-primary/0 animate-heart">
                            ❤️
                        </span>{' '}
                        by{' '}
                        <Link
                            href="https://harjot.pro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline-offset-[2px] underline decoration-[2px] decoration-primary transition-all duration-300 ease-in-out-sine hover:text-foreground font-bold"
                        >
                            Harjot Singh
                        </Link>
                        .
                    </span>
                </div>
            </div>
        </footer>
    );
}
