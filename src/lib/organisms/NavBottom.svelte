<script>
  import { page } from "$app/stores";
</script>

<nav class="nav-bottom">
  <ul class="desktop-nav" id="glass">
    
    <li>
      <a class={$page.url.pathname === "/" ? "menu-button active" : "menu-button"} href="/">
        Home
      </a>
    </li>

    <li>
      <details>
        <summary class="menu-button">Solution</summary>
        <ul class="dropdown" id="glass">
          <li><a class={$page.url.pathname === "/hbi" ? "menu-button active" : "menu-button"} href="/hbi">Hbi</a></li>
          <li><a class={$page.url.pathname === "/brieep" ? "menu-button active" : "menu-button"} href="/brieep">Brieep</a></li>
          <li><a class={$page.url.pathname === "/elizze" ? "menu-button active" : "menu-button"} href="/elizze">Elizze</a></li>
        </ul>
      </details>
    </li>

    <li>
      <a class={$page.url.pathname === "/method" ? "menu-button active" : "menu-button"} href="/method">
        Method
      </a>
    </li>

    <li>
      <a class={$page.url.pathname === "/partners" ? "menu-button active" : "menu-button"} href="/partners">
        Partners
      </a>
    </li>

    <li>
      <a class={$page.url.pathname === "/about-us" ? "menu-button active" : "menu-button"} href="/about-us">
        About us
      </a>
    </li>

    <li>
      <a class={$page.url.pathname === "/contact" ? "menu-button active" : "menu-button"} href="/contact">
        Contact
      </a>
    </li>

  </ul>
</nav>
