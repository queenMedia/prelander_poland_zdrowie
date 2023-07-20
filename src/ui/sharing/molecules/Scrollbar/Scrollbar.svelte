<script lang="ts">
  import type { Props } from "./Scrollbar.proptypes";

  import * as styles from "./Scrollbar.styles";

  let progressBarWidth = 0;

  function updateProgressBar() {
    const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    progressBarWidth = (scrollTop / totalScrollableHeight) * 100;

  }
  updateProgressBar();
  window.addEventListener('scroll', updateProgressBar);
</script>

<div class={styles.scrollbar(progressBarWidth)}>

</div>
