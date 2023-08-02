<script lang="ts">
  import type { Props } from "./Sidebar.proptypes";

  import * as styles from "./Sidebar.styles";
  import { Testimonials, Steps } from "@home/molecules";

  export let offer: Props["offer"];
  export let bucket: Props["bucket"];
  export let redirect: Props["redirect"];
  const { name, color_button, background_button } = offer;
  const {
    fullName,
    firstName,
    lastName,
    contentKeys,
    targetKeys,
    targetCurrency,
    subtitle,
    title,
    offerBarText,
    firstSection,
    modal,
    offers,
  } = bucket;
</script>

<div class={styles.container}>
  <Testimonials currency_simbol={targetCurrency.symbol} {redirect} offer_name={name} character_name={fullName} />
  <Steps
    currency={targetCurrency.symbol}
    currency_simbol={targetCurrency.symbol}
    character_name={fullName}
    {redirect}
    offer_name={name}
    {offer}
  />
</div>
