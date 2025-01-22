import { entriLinks } from "../utils/constants";

function Navbar() {
    return (
        <nav>
            <div className="px-10 py-3 shadow-sm">
                <a href={entriLinks.entriMainPage} className="flex w-fit">
                    <img src="/entri_logo.svg" alt="Brand Logo" className="w-[120px]" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;