function Footer() {
    return (
        <footer className="bg-footerBg text-sm text-footerText py-12">
            <div className="max-w-4xl mx-auto flex flex-col px-6 gap-6">
                <div className="rounded-full bg-white p-2 flex-shrink mr-auto">
                    <img
                        src="/entri_logo.png"
                        alt="Entri Logo"
                        className="w-[120px] mr-2"
                    />
                </div>
                <p>
                    Entri App is India's rapidly growing e-learning platform with 10M+ users. Entri offers courses for govt test prep, coding, digital marketing, Spoken English, finance & more in 6 regional languages.
                </p>
                <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
                    <div>
                        <p className="mb-1">Entri HQ,</p>
                        <p className="mb-1">Maleppally Rd, Kakkanad, Cochin, Kerala 682021</p>
                        <p>Ph: <a href="tel:+919446549626" className="hover:text-white">+91 9446 549 626</a></p>
                    </div>
                    <div className="flex flex-col place-items-start">
                        <a href="https://play.google.com/store/apps/details?id=me.entri.entrime" target="_blank" rel="noreferrer">
                            <img
                                src="/google_play.png"
                                alt="Entri app on Google Play Store"
                                className="mb-2"
                            />
                        </a>
                        <p className="text-base">Trusted over 1 crore learners</p>
                    </div>
                </div>
                <div className="flex flex-col gap-6 md:flex-row md:justify-between border-t-2 border-borderDarkGray pt-4">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 place-items-start">
                        <a
                            className="hover:text-white hover:underline"
                            href="https://entri.app/privacy-policy/"
                        >
                            Privacy policy
                        </a>
                        <a
                            className="hover:text-white hover:underline"
                            href="https://entri.app/terms/"
                        >
                            Terms and conditions
                        </a>
                        <p>© 2025 entri.app All rights reserved</p>
                    </div>
                    <div className="flex items-center gap-10">
                        <a href="https://www.instagram.com/entri.app/">
                            <img className="h-5 hover:scale-105" src="/icon_instagram.png" alt="Instagram icon" />
                        </a>
                        <a href="https://www.facebook.com/entri.me/">
                            <img className="h-5 hover:scale-105" src="/icon_facebook.png" alt="Facebook icon" />
                        </a>
                        <a href="https://in.linkedin.com/company/entri-me">
                            <img className="h-4 hover:scale-105" src="/icon_linkedin.png" alt="Linkedin icon" />
                        </a>
                        <a href="https://twitter.com/entri_app">
                            <img className="w-4 hover:scale-105" src="/icon_twitter.png" alt="Twitter icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;