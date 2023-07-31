<script lang="ts">
  //import type { TestimonialProps } from "./Whitdrawals.proptypes";
  import * as styles from "./Whitdrawals.styles";
  import dollarIcon from "@icons/dollaricon-1.png";
  import type { WhitdrawalsProps } from "./Whitdrawals.proptypes";

  let position = 100;

  export let geo: WhitdrawalsProps["geo"];
  export let currency_simbol: WhitdrawalsProps["currency_simbol"];
  export let whitdrawalText: WhitdrawalsProps["whitdrawalText"];

  const moveWhitdrawal = () => (position = position > 0 ? -100 : 100);
  const whitdrawalInterval = setInterval(moveWhitdrawal, 5000);
</script>

<div class={styles.container} style={`bottom: ${position}px`}>
  <img class={styles.img} src={dollarIcon} alt="" />
  <p class={styles.description}>
    {whitdrawalText.top}
  </p>
  <p class={styles.nowText}>{whitdrawalText.bottom}</p>
</div>
