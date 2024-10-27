import Link from "next/link"
import HeaderTop from "./Top";
import HeaderMenu from "./Menu";

export default function Header() {
    return (
        <section>
            <HeaderTop />
            <HeaderMenu />
        </section>
    )
}