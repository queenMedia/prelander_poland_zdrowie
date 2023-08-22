<script lang="ts">
  //import type { TestimonialProps } from "./Whitdrawals.proptypes";
  import * as styles from "./Whitdrawals.styles";
  import dollarIcon from "@icons/dollaricon-1.png";
  import type { WhitdrawalsProps } from "./Whitdrawals.proptypes";
  import { A } from "@sharing/atoms"

  let position = 70;

  export let whitdrawalText: WhitdrawalsProps["whitdrawalText"];

  const moveWhitdrawal = () => (position = position > 0 ? -100 : 70);
  const whitdrawalInterval = setInterval(moveWhitdrawal, 5000);
</script>

<A section="mini-modal">
  <div class={styles.container} style={`bottom: ${position}px`}>
    <img class={styles.img} src={dollarIcon} alt="" />
    <p class={styles.description}>
      {whitdrawalText.top}
    </p>
    <p class={styles.nowText}>{whitdrawalText.bottom}</p>
  </div>
</A>
