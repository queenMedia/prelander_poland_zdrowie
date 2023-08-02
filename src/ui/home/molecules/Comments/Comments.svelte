<script lang="ts">
  import type { CommentsProps } from "./Comments.proptypes";

  import * as styles from "./Comments.styles";
  import { Comment } from "@home/atoms";
  import { commentsData } from "@data"
  import { A } from "@sharing/atoms"

  export let type: CommentsProps["type"];
  export let offer: CommentsProps["offer"];

</script>

{#if type == "old"}
  <div class={styles.container}>
    <div class={styles.topText}>
      <span>
        <A section="comments">
          Nylige # kommentarer
        </A>
      </span>
      <span>
        <A section="comments">
          Legg til en kommentar
        </A>
      </span>
    </div>
    <div class={styles.commentsContainer}>
      {#each commentsData as comment}
        <Comment 
            name={comment.name}
            text={comment.text}
            img={comment.img}
            time={comment.time}
            timeFormat={comment.timeFormat}
            likes={comment.likes}
            {offer}
          />
          
      {/each}
    </div>
  </div>
{:else if type==="new"}
  <div >
  </div>
{/if}
