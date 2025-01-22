import { entriLinks } from "../utils/constants";

export default function EntriLogo() {
    return (
        <a className="rounded-full bg-white p-2 flex-shrink mr-auto flex" href={entriLinks.entriMainPage}>
            <img
                src="/entri_logo.svg"
                alt="Entri Logo"
                className="w-[120px] mr-2"
            />
            <span className='uppercase'>Entri</span>
        </a>
    )
}