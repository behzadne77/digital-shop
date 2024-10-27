import HeaderTop from "./Top";
import HeaderMenu from "./Menu";

export default function Header() {
    return (
        <section className={"pb-6 shadow-[0_8px_32px_#00000010]"}>
            <HeaderTop />
            <HeaderMenu />
        </section>
    )
}