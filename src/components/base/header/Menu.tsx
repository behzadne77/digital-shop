import {Image, Input} from "antd"
import Link from "next/link"
import styles from "./header.module.css"

export default function HeaderMenu() {
    const menuItems = [
        {
            icon: "element-3",
            title: "All"
        },
        {
            icon: "monitor",
            title: "Computers"
        },
        {
            icon: "mobile",
            title: "SmartPhones"
        },
        {
            icon: "watch",
            title: "Watches"
        },
        {
            icon: "monitor-recorder",
            title: "TV/Audio"
        },
        {
            icon: "game",
            title: "Gaming"
        }
    ]
    return (
        <section className={"container mt-6"}>
            <section className={"flex items-center justify-between"}>
                <section className={'w-32'}>
                    <Image src={"/Logo.png"} preview={false} loading={"lazy"} alt={"Logo"}/>
                </section>
                <section className={"w-[26rem]"}>
                    <Input prefix={<i className={"isax isax-search-normal"} /> }/>
                </section>
                <section className={"flex items-center gap-4"}>
                    <section className={styles.menuItem}>
                        <i className={`isax isax-headphone ${styles.menuItemIcons}`} />
                        <section>
                            <p className={styles.menuItemText}>SUPPORT</p>
                            <span className={styles.menuItemDescription}>+1 123 4567890</span>
                        </section>
                    </section>
                    <section className={styles.menuItem}>
                        <i className={`isax isax-user ${styles.menuItemIcons}`} />
                        <section>
                            <p className={styles.menuItemText}>LOGIN</p>
                            <span className={styles.menuItemDescription}>OR REGISTER</span>
                        </section>
                    </section>
                    <section className={styles.menuItem}>
                        <i className={`isax isax-bag ${styles.menuItemIcons}`} />
                        <section>
                            <p className={styles.menuItemText}>Cart</p>
                            <span className={styles.menuItemDescription}>Cart Items</span>
                        </section>
                    </section>
                </section>
            </section>
            <section className={"mt-8 flex items-center gap-16"}>
                {menuItems.map((item, index) => (
                    <Link key={index} href={"#"} className={"flex items-center gap-1 text-sm text-dark-800 hover:text-blue-600"}>
                        <i className={`isax isax-${item.icon}`} />
                        { item.title }
                    </Link>
                )) }
            </section>
        </section>
    )
}