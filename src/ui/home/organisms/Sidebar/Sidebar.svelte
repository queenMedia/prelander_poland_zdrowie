<script lang="ts">
  import type { Props } from "./Sidebar.proptypes";

  import * as styles from "./Sidebar.styles";
  import { Testimonials, Steps } from "@home/molecules";

  export let offer: Props["offer"];
  export let bucket: Props["bucket"];
  export let redirect: Props["redirect"];
  const { name, color_button, background_button } = offer;
  const {
    citizenText,
    fullName,
    lastName,
    contentLnag,
    targetGeo,
    geoCapital,
    currency,
    geo,
    title,
    subtitle,
    firstSection,
    offers,
    targetGeoCode,
  } = bucket;
</script>

<div class={styles.container}>
  <Testimonials currency_simbol={currency.symbol} {redirect} offer_name={name} character_name={fullName} />
  <Steps
    currency={currency.symbol}
    currency_simbol={currency.symbol}
    character_name={fullName}
    {redirect}
    offer_name={name}
    {offer}
  />
</div>
