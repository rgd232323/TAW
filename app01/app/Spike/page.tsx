import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Sipke</h2>

        <nav className={styles.nav}>
          <Link href="/">El Primo</Link>
          <Link href="/Poco">Poco</Link>
          <Link href="/Spike">Spike</Link>
          <Link href="/Crow">Crow</Link>
        </nav>

        <div className={styles.content}>
          <Image
            src="/spike.png"
            alt="Imagem principal"
            className={styles.logo}
            width={300}
            height={200}
            priority
          />

          <p className={styles.text}>
            O Spike é um Brawler Lendário que possui vida moderadamente baixa e longo alcance, mas causa dano muito alto a curta distância, em compensação por sua velocidade de recarga lenta. Ele foi um dos 15 Brawlers lançados na primeira versão beta do jogo.
          </p>
        </div>
      </main>
    </div>
  );
} 