import Link from "next/link";
import React from "react";
import styles from "../components/style/navbar.module.css"
export default function Navbar() {
  return (
    <div className={styles.navbar}>
  <Link legacyBehavior href={"/"}>
    <a className={styles.DITECCAP}>DITECCAP</a>
  </Link>
  <ul className={styles.navlinks}>
    <li className={styles.navitem}>
      <Link legacyBehavior href={"/about"}>
        <a className={styles.textnabvar}>
          ¿Quienes Somos?
        </a>
      </Link>
    </li>
    <li className={styles.navitem}>
      <Link legacyBehavior href="/products">
        <a className={styles.textnabvar}>Productos</a>
      </Link>
    </li>
    <li className={styles.navitem}>
      <Link legacyBehavior href={"/signin"}>
        <a className={styles.textnabvar}>login</a>
      </Link>
    </li>
    <li className={styles.navitemcart}>
      <Link legacyBehavior href={"/cart"}>
      <a className={styles.imgcart}><img src="/cart-shopping-solid.svg" alt="Image" className={styles.imgbutton} /></a>
      </Link>
    </li>
  </ul>
</div>
  );
}
