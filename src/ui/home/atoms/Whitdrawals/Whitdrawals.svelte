<script lang="ts">
  //import type { TestimonialProps } from "./Whitdrawals.proptypes";
  import * as styles from "./Whitdrawals.styles";
  import dollarIcon from "@icons/dollaricon-1.png";
 
  let position = 100;
  
  const moveWhitdrawal = () => position = position>0 ? -100 : 100;
  const whitdrawalInterval = setInterval(moveWhitdrawal, 5000);

</script>

<div class={styles.container} style={`bottom: ${position}px`}>
  <img class={styles.img} src={dollarIcon} alt="">
  <p class={styles.description}>Noen fra Ålesund  har nettopp trukket seg 1204 kr ingetrokken</p>
  <p class={styles.nowText}>AKKURAT NÅ</p>
</div>
