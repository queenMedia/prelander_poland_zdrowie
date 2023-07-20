<script lang="ts">
  import * as styles from "./Header.styles";
  import { Scrollbar } from "@sharing/molecules";
  // import logo from "@icons/svelte-logo.svg";

  import { Lang } from "@sharing/atoms";
</script>

<header class={styles.header}>
  <a class={styles.corner} href="https://kit.svelte.dev/docs/introduction">
    <!-- <img src={logo} alt="SvelteKit" /> -->
  </a>
  <div class={styles.corner}>
    <Scrollbar />
    <Lang />
  </div>
</header>
