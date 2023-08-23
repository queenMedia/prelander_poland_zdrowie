<script lang="ts">

  import * as styles from "./Loader.styles";

</script>

<div class={styles.spinnerContainer}>
  <div class={styles.spinner}></div>
  <div class={styles.loader}>
    <p class={styles.loading_text}>loading</p>
    <div class={styles.words}>
      <span class={styles.word}>posts</span>
      <span class={styles.word}>images</span>
      <span class={styles.word}>followers</span>
      <span class={styles.word}>hashtags</span>
      <span class={styles.word}>posts</span>
    </div>
  </div>
</div>
