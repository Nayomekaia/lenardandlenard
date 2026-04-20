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

<style>

/* Algemene navigatie styles */
.desktop-nav{
  display:flex;
  justify-content: center;
  margin: 0 auto;
  border-radius: 5px;
  background-color: black;
  padding: 1rem;
  width: 1000px;
  gap: 5rem;
  margin-top: 2rem;
}

li {
  display: flex;
  flex-direction: row;
  list-style: none;
  text-transform: uppercase;
}

details {
  position: relative;
  font-family: var(--font-body);
  color: white;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 2rem;
  list-style: none;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

details:not([open]) .dropdown {
  display: none;
}

summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  list-style: none; 
  gap: 1rem;
}

summary::-webkit-details-marker {
  display: none;
}

summary::after {
  content: "▾";
  transition: transform 0.2s ease;
}

details[open] summary::after {
  transform: rotate(180deg);
}

</style>