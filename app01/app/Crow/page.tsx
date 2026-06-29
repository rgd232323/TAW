import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Crow</h2>

        <nav className={styles.nav}>
          <Link href="/">El Primo</Link>
          <Link href="/Poco">Poco</Link>
          <Link href="/Spike">Spike</Link>
          <Link href="/Crow">Crow</Link>
        </nav>

        <div className={styles.content}>
          <Image
            src="/crow.png"
            alt="Imagem principal"
            className={styles.logo}
            width={300}
            height={200}
            priority
          />

          <p className={styles.text}>
            Crow é um Brawler Lendário que possui vida moderadamente baixa, alta velocidade de recarga e um ataque de dano moderadamente baixo, que envenena os inimigos, causando dano adicional ao longo do tempo com suas adagas de longo alcance. Ele foi um dos 15 Brawlers lançados na primeira versão Beta do jogo.
          </p>
        </div>
      </main>
    </div>
  );
} 