<script lang="ts">
  import * as styles from "./Header.styles";
  import { Scrollbar } from "@sharing/molecules";
</script>

<header class={styles.header}>
  <a class={styles.corner} href="https://kit.svelte.dev/docs/introduction">
  </a>
  <div class={styles.corner}>
    <Scrollbar />
  </div>
</header>
