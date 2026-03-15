import Image from "next/image"
import Link from "next/link"
import styles from "./header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/">
                    <Image
                    src="/jpg/Logo.jpg"
                    width ={80}
                    height={80}
                    className={styles.logo}
                    alt="Logo"
                    priority>
                    </Image>
                </Link>
                <ul>
                    <li>
                        <Link href="/catalog">
                            <p>Каталог</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio">
                            <p>Наш опыт</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sales">
                            <p>Продажи</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/aboutUs">
                            <p>О Нас</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts">
                            <p>Контакты</p>
                        </Link>
                    </li>
                </ul>
            <button className={styles.OrderButton}>
                <p>Заказать</p>
            </button>
            </nav>
        </header>
    )
}