import Link from "next/link"
export default function HeaderTop() {
    const links = [
        {
            href: "",
            title: "About"
        },
        {
            href: "",
            title: "Contact Us"
        },
        {
            href: "",
            title: "Term of Use"
        }
    ]
    return (
        <header className={"py-4 bg-blue-100"}>
            <section className={"container flex items-center justify-between"}>
                <p className={"text-sm text-dark-800 font-normal"}>We ship packages within 24 hours of ordering</p>
                <section className={"flex items-center gap-2"}>
                    {links.map((link, index)=> (
                        <Link href={link.href} key={index} className={"text-sm text-dark-800"}>{link.title}</Link>
                    ))}
                </section>
            </section>
        </header>
    )
}