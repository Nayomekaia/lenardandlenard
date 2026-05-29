<script>
  import { page } from "$app/stores";
</script>

<nav class="nav-bottom">
  <ul class="desktop-nav" id="glass">
    <li>
      <a
        class={$page.url.pathname === "/"
          ? "menu-button active"
          : "menu-button"}
        href="/"
      >
        Home
      </a>
    </li>

    <li>
      <details>
        <summary class="menu-button">Solution</summary>
        <ul class="dropdown" id="glass">
          <li>
            <a
              class={$page.url.pathname === "/hbi"
                ? "menu-button active"
                : "menu-button"}
              href="/hbi">Hbi</a
            >
          </li>
          <li>
            <a
              class={$page.url.pathname === "/brieep"
                ? "menu-button active"
                : "menu-button"}
              href="/brieep">Brieep</a
            >
          </li>
          <li>
            <a
              class={$page.url.pathname === "/elizze"
                ? "menu-button active"
                : "menu-button"}
              href="/elizze">Elizze</a
            >
          </li>
        </ul>
      </details>
    </li>

    <li>
      <a
        class={$page.url.pathname === "/method"
          ? "menu-button active"
          : "menu-button"}
        href="/method"
      >
        Method
      </a>
    </li>

    <li>
      <a
        class={$page.url.pathname === "/partners"
          ? "menu-button active"
          : "menu-button"}
        href="/partners"
      >
        Partners
      </a>
    </li>

    <li>
      <a
        class={$page.url.pathname === "/about-us"
          ? "menu-button active"
          : "menu-button"}
        href="/about-us"
      >
        About us
      </a>
    </li>

    <li>
      <a
        class={$page.url.pathname === "/contact"
          ? "menu-button active"
          : "menu-button"}
        href="/contact"
      >
        Contact
      </a>
    </li>
  </ul>
</nav>

<style>
  /* Algemene navigatie styles */
  .desktop-nav {
    display: flex;
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

  .menu-button {
    text-decoration: none;
    position: relative;
    transition: all 0.5s;
    color: var(--primary-white);
  }

  /* hover effect */
  .menu-button:hover {
    color: var(--primary-white);
    text-shadow:
      0 0 10px var(--brown-300),
      0 0 20px var(--blue-100),
      0 0 40px var(--primary-blue);
  }

  /* active state effect */
  .menu-button.active {
    text-shadow:
      0 0 10px var(--brown-300),
      0 0 20px var(--blue-100),
      0 0 40px var(--primary-blue);
  }

  .menu-button.active:hover {
    text-shadow:
      0 0 10px var(--brown-300),
      0 0 20px var(--blue-100),
      0 0 40px var(--primary-blue);
  }

  details {
    position: relative;
    font-family: var(--font-body);
    color: var(--primary-white);
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
