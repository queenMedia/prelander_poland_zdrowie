<script lang="ts">
  import * as styles from "./Header.styles";
  import { HeaderLogo } from "@home/atoms";
  import { A, Icons } from "@sharing/atoms"
  import arrowIcon from "@icons/arrow_down_2.svg";
  import hamburger from "@icons/hamburger.svg";

  let progressBarWidth = 0;

  function updateProgressBar() {
    const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    progressBarWidth = (scrollTop / totalScrollableHeight) * 100;
  }
  updateProgressBar();
  window.addEventListener('scroll', updateProgressBar);

</script>

<header class={styles.container}>
    <div class={styles.top_section}>
      <div class={styles.content}>
        <div class={styles.top_left}>
          <A section="header">
            <HeaderLogo />
          </A>
          <ul class={styles.top_left_menu}>
            <li class={styles.top_left_item}><A section="header">WIADOMOŚCI</A></li>
            <li class={styles.top_left_item}><A section="header">Next</A></li>
            <li class={styles.top_left_item}><A section="header">Sport</A></li>
            <li class={styles.top_left_item}><A section="header">plotek</A></li>
            <li class={styles.top_left_item}><A section="header">dziecko</A></li>
          </ul>
          
        </div>
        <div class={styles.top_right}>
          <ul class={styles.top_right_menu}>
            <li class={styles.top_right_item}><A section="header"><Icons type="card"/></A></li>
            <li class={styles.top_right_item}><A section="header"><Icons type="message"/></A></li>
            <li class={styles.top_right_item}><A section="header"><Icons type="person"/></A></li>
            <li class={styles.top_right_item}><A section="header"><Icons type="loupe"/></A></li>
            <li class={styles.top_right_item}><A section="header"><Icons type="plant"/></A></li>

            <li class={styles.top_right_item}>
              <A section="header">
                <img src={arrowIcon} alt="arrow icon">
              </A>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class={styles.bottom_section(progressBarWidth)}>
      <div class={styles.bottom_content}>
        <h2 class={styles.zdrowie_text}>
          <A section="header">
            Zdrowie
          </A>
        </h2>
        <div class={styles.bottom_menu_container}>
          <ul class={styles.bottom_menu}>
            <li class={styles.bottom_item}><A section="header">KORONAWIRUS</A></li>
            <li class={styles.bottom_item}><A section="header">CHOROBY</A></li>
            <li class={styles.bottom_item}><A section="header">Odżywianie</A></li>
            <li class={styles.bottom_item}><A section="header">Psychologia</A></li>
            <li class={styles.bottom_item}><A section="header">Seks</A></li>
            <li class={styles.bottom_item}><A section="header">Sport I uroda</A></li>
            <li class={styles.bottom_item}><A section="header">Forum</A></li>
            <li class={styles.bottom_item}><A section="header">Quizy</A></li>
          </ul>
          <span class={styles.arrow_icon(arrowIcon)}></span>
        </div>
        <A section="header">
          <img src={hamburger}  class={styles.iconBurger} alt="arrow icon">
        </A>
      </div>
    </div>
 
</header>
