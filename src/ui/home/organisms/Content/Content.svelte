<script lang="ts">
  import { onMount } from "svelte";
  import { Html, isTag, Text } from 'html-svelte-parser';

  import type { Props } from "./Content.proptypes";
  import * as styles from "./Content.styles";

  import config from "@config";

  import { Comments } from "@home/molecules";
  import { Whitdrawals } from "@home/atoms";

  import { Imagegroup } from "@sharing/molecules";
  import { Largebuttons, Readmore, Imagedescription, Customtext, A } from "@sharing/atoms";

  import { Img1, Img3, BillGatesImg, OfferBannerImg, TopBannerImg,
    FBPostImg, GIFImg, CheckImg, FamilyImg,
    Step2Img, Step3Img } from "@data"

  export let bucket: Props["bucket"];
  export let offer: Props["offer"];

  let processNode: any;

  let html = ""
  let data = "";

  onMount(async () => {
    
    const response = await fetch("content.txt");
    if(response.ok)
      data = await response.text();

    /** ONLY TEXT **/
    data = data.replaceAll("{{CELEBRITY}}", `${bucket.fullName}`);
    data = data.replaceAll("{{OFFER}}", `${bucket.offers[offer].name}`);

    /** HTML FROM BUCKET **/
    data = data.replaceAll("{{celebrity_subtitle}}", `<p><i>${bucket.subtitle}</i></p>`);
    data = data.replaceAll("{{first_content}}", `<p><i>${bucket.firstSection.lastp}</i></p>`);



    /** HTML **/
    data = data.replaceAll("{{title}}", `<h1 class='${styles.title}'>`);
    data = data.replaceAll("{{/title}}", "</h1>");

    data = data.replaceAll("{{u}}", "<u>");
    data = data.replaceAll("{{/u}}", "</u>");

    data = data.replaceAll("{{b}}", "<b>");
    data = data.replaceAll("{{/b}}", "</b>");

    data = data.replaceAll("{{subtitle}}", `<h2 class='${styles.sub_title}'>`);
    data = data.replaceAll("{{/subtitle}}", "</h2>");

    data = data.replaceAll("{{text_below}}", `<p class='${styles.description}'>`);
    data = data.replaceAll("{{/text_below}}", "</p>");

    data = data.replaceAll("{{i}}", "<i>");
    data = data.replaceAll("{{/i}}", "</i>");

    data = data.replaceAll("{{p}}", "<p>");
    data = data.replaceAll("{{/p}}", "</p>");


    /** COMPONENTS **/
    data = data.replaceAll("{{large_button}}", "<div id='large_button'></div>");

    data = data.replaceAll("{{image_celebrity_with_table}}", "<div id='image_group'></div>");
   
    data = data.replaceAll("{{link}}", "<a id='link'>");
    data = data.replaceAll("{{/link}}", "</a>");


    /** IMAGES **/
    data = data.replaceAll("{{top_banner}}", `<img src='${TopBannerImg}' class='${styles.img}' />`);

    data = data.replaceAll("{{image_family}}", `<img src='${FamilyImg}' class='${styles.img}' />`);


    data = data.replaceAll("{{image_celebrity_1}}", `<img src='${Img1}' class='${styles.img}' />`);
    data = data.replaceAll("{{image_celebrity_3}}", `<img src='${Img3}' class='${styles.img}' />`);
    data = data.replaceAll("{{image_bill}}", `<img src='${BillGatesImg}' class='${styles.img}' />`);
    data = data.replaceAll("{{image_post}}", `<img src='${FBPostImg}' class='${styles.img}' />`);

    data = data.replaceAll("{{image_gif}}", `<img src='${GIFImg}' class='${styles.img}' />`);
    data = data.replaceAll("{{image_check}}", `<img src='${CheckImg}' class='${styles.img}' />`);

    data = data.replaceAll("{{image_offer_banner}}", `<img src='${OfferBannerImg}' class='${styles.img}' />`);

    data = data.replaceAll("{{image_step_2}}", `<img src='${Step2Img}' class='${styles.img}' />`);
    data = data.replaceAll("{{image_step_3}}", `<img src='${Step3Img}' class='${styles.img}' />`);

    html = data;

    /** @type {import('html-svelte-parser').ProcessNode} */
    processNode = (domNode: any) => {
      if (isTag(domNode) && domNode.attribs.id === 'link') {
        return { component: A, props: { section: 'content' } };
      }
      else if(isTag(domNode) && domNode.attribs.id === 'large_button') {
        return { component: Largebuttons, props: { text: 'CLICCA PER INIZIARE SUBITO' } };
      }
      else if(isTag(domNode) && domNode.attribs.id === 'image_group') {
        return { component: Imagegroup, props: { text: 'CLICCA PER INIZIARE SUBITO' } };
      }
    };
      
  });

  
</script>
<div class={styles.content}>
  <Html {html} {processNode} />
</div>
