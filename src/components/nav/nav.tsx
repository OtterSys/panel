import { component$ } from "@builder.io/qwik"
import styles from "./nav.module.css"
import { User } from "../lucide/lucide"
import config from "@/config.json"

export const NavBar = component$(() => {
	return (
		<nav class={styles.nav}>
			<a class={styles.logo} href="/">
				<img src="icon.png" width={64} height={64} alt="Logo" />
				<h2>{config.Company}</h2>
			</a>
			<div>
				<User />
			</div>
		</nav>
	)
})
