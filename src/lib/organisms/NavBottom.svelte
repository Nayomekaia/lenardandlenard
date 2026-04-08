<script>
  import { page } from "$app/stores";
</script>

<nav class="nav-bottom">
<ul class="desktop-nav">
  <li><a class={$page.url.pathname === "/method" ? "menu-button active" : "menu-button"} href="/method">Method</a></li>
  <li><a class={$page.url.pathname === "/partners" ? "menu-button active" : "menu-button"} href="/partners">Partners</a></li>
  <li><a class={$page.url.pathname === "/about-us" ? "menu-button active" : "menu-button"} href="/about-us">About us</a></li>
  <li><a class={$page.url.pathname === "/contact" ? "menu-button active" : "menu-button"} href="/contact">Contact</a></li>
</ul>
</nav>