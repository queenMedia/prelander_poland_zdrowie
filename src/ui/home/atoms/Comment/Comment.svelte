<script lang="ts">
  import type { CommentProps } from "./Comment.proptypes";

  import * as styles from "./Comment.styles";

  export let name: CommentProps["name"];
  export let text: CommentProps["text"];
  export let img: CommentProps["img"];
  export let time: CommentProps["time"];
  export let timeFormat: CommentProps["timeFormat"];
  export let likes: CommentProps["likes"];
  export let offer: CommentProps["offer"];

</script>

<div class={styles.container}>
  <img class={styles.img} src={img} alt="">
  <div class={styles.content}>
    <p class={styles.userName}>{name}</p>
    <p class={styles.commentText}>{text.replaceAll("OFFER_NAME", offer)}</p>
    <p class={styles.socialText}>Svar. {likes} . Liker . 
      <span class={styles.timeText}>{time}
        {#if timeFormat === "minutes"}
          minutter siden
        {:else}
          timer siden
        {/if}
      </span>
    </p>
  </div>
</div>
