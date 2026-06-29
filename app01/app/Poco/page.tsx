import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Poco</h2>

        <nav className={styles.nav}>
          <Link href="/">El Primo</Link>
          <Link href="/Poco">Poco</Link>
          <Link href="/Spike">Spike</Link>
          <Link href="/Crow">Crow</Link>
        </nav>

        <div className={styles.content}>
          <Image
            src="/poco.png"
            alt="Imagem principal"
            className={styles.logo}
            width={300}
            height={200}
            priority
          />

          <p className={styles.text}>
            O Poco é um Brawler Raro que possui vida moderadamente alta, alcance médio e a capacidade de curar seus companheiros de equipe em grande quantidade, mas causa muito pouco dano. Ele foi um dos 15 Brawlers lançados na primeira versão beta do jogo.
          </p>
        </div>
      </main>
    </div>
  );
} 