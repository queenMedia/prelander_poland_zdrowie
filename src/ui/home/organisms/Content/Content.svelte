<script lang="ts">
  import Customtext from "../../../sharing/atoms/Customtext/Customtext.svelte";
  import Comments from "../../molecules/Comments/Comments.svelte";
  import type { Props } from "./Content.proptypes";

  import * as styles from "./Content.styles";

  import { Largebuttons, Readmore, Imagedescription } from "@sharing/atoms";
  import { Imagegroup } from "@sharing/molecules";

  export let offer_name: Props["offer_name"];

</script>

<div class={styles.content}>

  LARGE BUTTON COMPONENT 👇
  <Largebuttons text="hola" />

  READ MORE COMPONENT 👇
  <Readmore text="button" />

  IMAGE DESCRIPTION COMPONENT 👇
  <Imagedescription 
    text="Mi hermano y yo ... bla bla bla bla bla bla " 
    offer={offer_name} 
    type="banners"
  />

  IMAGE GROUP COMPONENT 👇
  <Imagegroup 
    offer_name={offer_name}
  />

  CUSTOM TEXT COMPONENT 👇
  <Customtext 
    text="I'm a title"
    type="title"
  />
  <Customtext 
    text="I'm a subtitle"
    type="subtitle"
  />
  <Customtext 
    text="I'm a paragraph"
    type="paragraph"
  />


  COMMENTS AREA 👇
  <Comments 
    type="old"
  />

</div>
