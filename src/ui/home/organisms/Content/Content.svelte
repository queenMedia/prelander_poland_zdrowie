<script lang="ts">
  import { onMount } from "svelte";
  import { Html, isTag, Text } from 'html-svelte-parser';

  import type { Props } from "./Content.proptypes";
  import * as styles from "./Content.styles";

  import config from "@config";

  import { Comments } from "@home/molecules";
  import { Whitdrawals } from "@home/atoms";

  import { Imagegroup } from "@sharing/molecules";
  import { Largebuttons, Readmore, A } from "@sharing/atoms";

  import { Img1, Img3, BillGatesImg, OfferBannerImg, TopBannerImg,
    FBPostImg, GIFImg, CheckImg, FamilyImg,
    Step2Img, Step3Img } from "@data"

  
  import { parseImage } from '@services/parseHtml'

  export let bucket: Props["bucket"];
  export let offer: Props["offer"];

  let processNode: any;

  let html = ""
  let data = "";

  const getPageData = async ()  => {
    const response = await fetch("content.txt");
    if(response.ok)
      return await response.text();
    return ""
  }

  getPageData().then((response) => {
    data = response;
    data = data.replaceAll("{{IMG_DESCRIPTION_BUCKET}}", `${bucket.firstSection.ImgDescription}`);
    data = data.replaceAll("{{BUCKET_TITLE}}", `${bucket.title}`);

    data = data.replaceAll("{{BUCKET_SUBTITLE}}", `<p><i>${bucket.subtitle}</i></p>`);
    
    data = data.replaceAll("{{BUCKET_FIRST_CONTENT}}", `${bucket.firstSection.celebrityDescription}`);

    data = data.replaceAll("{{CELEBRITY}}", `${bucket.fullName}`);
    data = data.replaceAll("{{OFFER}}", `${bucket.offers[offer].name}`);

    /** HTML **/
    data = data.replaceAll("{{title}}", `<h1 class='${styles.title}'>`);
    data = data.replaceAll("{{/title}}", "</h1>");

    data = data.replaceAll("{{u}}", "<u>");
    data = data.replaceAll("{{/u}}", "</u>");

    data = data.replaceAll("{{b}}", "<b>");
    data = data.replaceAll("{{/b}}", "</b>");

    data = data.replaceAll("{{subtitle}}", `<h2 class='${styles.sub_title}'>`);
    data = data.replaceAll("{{/subtitle}}", "</h2>");

    data = data.replaceAll("{{i}}", "<i>");
    data = data.replaceAll("{{/i}}", "</i>");

    data = data.replaceAll("{{p}}", "<p>");
    data = data.replaceAll("{{/p}}", "</p>");


    /** COMPONENTS **/
    data = data.replaceAll("{{large_button}}", "<div id='large_button'></div>");

    data = data.replaceAll("{{image_celebrity_with_table}}", "<div id='image_group'></div>");


    data = data.replaceAll("{{read_more}}", "<div id='read_more'></div>");

   
    data = data.replaceAll("{{link}}", "<a id='link'>");
    data = data.replaceAll("{{/link}}", "</a>");


    /** IMAGES **/
    const imgRegex = /\[\[([^[\]]+)\]\]\[([^[\]]+)\]/g;

    data = data.replace(imgRegex, "<div id='image' imgtype='$1' text='$2'></div>");

    const result = data.split("{{SEPARATOR_SECOND_CONTENT}}")

    html = result[0];

    const images: any = {
      'top_banner': TopBannerImg,
      'image_celebrity_1': Img1,
      'image_celebrity_3': Img3,
      'image_bill': BillGatesImg,
      'image_post': FBPostImg,
      'image_family': FamilyImg,
      'image_gif': GIFImg,
      'image_check': CheckImg,
      'image_offer_banner': OfferBannerImg,
      'image_step_2': Step2Img,
      'image_step_3': Step3Img
    }

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
      else if(isTag(domNode) && domNode.attribs.id === 'read_more') {
        return { component: Readmore, props: { text: 'LEER MAS' , hanldeReadMore: hanldeReadMore} };
      }
      else if(isTag(domNode) && domNode.attribs.id === 'image') {
        return parseImage(images[domNode.attribs.imgtype], domNode.attribs.text);
      }
    };

  }).catch((error) => {
    console.error('Ocurrió un error:', error);
  });

  onMount(async () => {});

  const  hanldeReadMore =  () => {
    data = data.replace("<div id='read_more'></div>"," ");  //remove read more button 
    const result = data.split("{{SEPARATOR_SECOND_CONTENT}}")
    html = result[0] + result[1];
  }
  
</script>

<div class={styles.content}>
  <Html {html} {processNode} />

</div>
