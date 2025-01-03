import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/card/Card";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Card></Card>
      </main>
    </div>
  );
}
