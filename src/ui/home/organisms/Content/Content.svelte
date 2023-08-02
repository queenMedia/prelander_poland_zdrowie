<script lang="ts">
  import { Html, isTag } from 'html-svelte-parser';
  import { page } from "$app/stores";

  import type { Props } from "./Content.proptypes";
  import * as styles from "./Content.styles";

  import { Comments } from "@home/molecules";
  
  import { parseToSvelte, parseToHtml } from '@services/parseContent'

  export let bucket: Props["bucket"];
  export let offer: Props["offer"];

  let processNode: any;

  let html = ""
  let data = "";

  const getPageData = async ()  => {
    const response = await fetch(`content.txt`);

    
    if(response.ok)
      return await response.text();
    else 
      return "ocurrió un error al cargar la pagina"
  }

  getPageData().then((response) => {
    data = response;

    data = parseToHtml(data, bucket, offer, styles);

    /** @type {import('html-svelte-parser').ProcessNode} */
    processNode = (domNode: any) => {
      if (isTag(domNode) && domNode.attribs.id) 
        return parseToSvelte(domNode.attribs, hanldeReadMore);
    };

    const result = data.split("{{SEPARATOR_SECOND_CONTENT}}")
    html = result[0];

  }).catch((error) => {
    console.error('Ocurrió un error', error);
  });

  const  hanldeReadMore =  () => {
    data = data.replace("<div id='read_more'></div>"," ");  //remove read more button 
    const result = data.split("{{SEPARATOR_SECOND_CONTENT}}")
    html = result[0] + result[1];
  }
  
</script>

<div class={styles.content}>
  <Html {html} {processNode} />
  <Comments type='old' offer={bucket.offers[offer].name}/>
</div>
