<script lang="ts">
  //import type { TestimonialProps } from "./Whitdrawals.proptypes";
  import * as styles from "./Whitdrawals.styles";
  import dollarIcon from "@icons/dollaricon-1.png";
  import type { WhitdrawalsProps } from "./Whitdrawals.proptypes";
  let position = 100;
  export let geo: WhitdrawalsProps["geo"];
  export let currency_simbol: WhitdrawalsProps["currency_simbol"];
  const moveWhitdrawal = () => (position = position > 0 ? -100 : 100);
  const whitdrawalInterval = setInterval(moveWhitdrawal, 5000);
  console.log({geo});
</script>

<div class={styles.container} style={`bottom: ${position}px`}>
  <img class={styles.img} src={dollarIcon} alt="" />
  <p class={styles.description}>
    Qualcuno di {geo} ha appena depositato  {currency_simbol}1204
  </p>
  <p class={styles.nowText}>ESATTAMENTE ORA</p>
</div>
