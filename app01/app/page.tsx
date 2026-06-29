import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>El Primo</h2>

        <nav className={styles.nav}>
          <Link href="/">El Primo</Link>
          <Link href="/Poco">Poco</Link>
          <Link href="/Spike">Spike</Link>
          <Link href="/Crow">Crow</Link>
        </nav>

        <div className={styles.content}>
          <Image
            src="/elprimo.jpeg"
            alt="Imagem principal"
            className={styles.logo}
            width={300}
            height={200}
            priority
          />

          <p className={styles.text}>
            O El Primo é um Brawler Raro que possui a segunda maior quantidade de vida entre todos os Brawlers, uma velocidade de recarga muito rápida, alto poder de dano e grande mobilidade graças ao seu Super e à sua alta velocidade de movimento, porém tem um alcance de ataque curto. Ele foi um dos 15 Brawlers lançados na primeira versão beta do jogo.
          </p>
        </div>
      </main>
    </div>
  );
} 