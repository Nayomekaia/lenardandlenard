<script>
    import { page } from "$app/stores";
    import Divider from "$lib/molecules/Divider.svelte";
    import logo from "$lib/assets/logo.png";
</script>

<footer>
    <Divider />

    <section class="container">
        <section class="intro">
            <img src={logo} alt="Logo" class="logo" />

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
            </p>
        </section>

        <menu>
            <h4>Menu</h4>

            <ul>
                <details open>
                    <summary>Solution</summary>

                    <li>
                        <a
                            class={$page.url.pathname === "/brieep"
                                ? "menu-button active"
                                : "menu-button"}
                            href="/brieep"
                        >
                            Brieep
                        </a>
                    </li>

                    <li>
                        <a
                            class={$page.url.pathname === "/elizze"
                                ? "menu-button active"
                                : "menu-button"}
                            href="/elizze"
                        >
                            Elizze
                        </a>
                    </li>

                    <li>
                        <a
                            class={$page.url.pathname === "/hbi"
                                ? "menu-button active"
                                : "menu-button"}
                            href="/hbi"
                        >
                            Hbi
                        </a>
                    </li>
                </details>
            </ul>

            <ul>
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
        </menu>

        <section class="contact">
            <h4>Contact</h4>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem
            </p>

            <ul class="socials">
                <li>icon</li>
                <li>icon</li>
                <li>icon</li>
                <li>icon</li>
                <li>icon</li>
            </ul>
        </section>
    </section>

    <Divider />

    <a href="here comes a link" class="credits">@Made by CRE8 STUDIOS</a>
</footer>

<style>
    /* MOBILE */

    footer {
        padding: 2rem 1.25rem;
    }

    li,
    p,
    a,
    h4,
    summary,
    details {
        font-family: var(--font-body);
        color: var(--primary-white);
    }

    p,
    h4,
    ul,
    menu {
        margin: 0;
        padding: 0;
    }

    p {
        margin-top: 1.5rem;
        max-width: 100%;
        line-height: 1.5;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }

    .intro,
    .contact,
    menu {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .logo {
        width: 120px;
        height: auto;
    }

    .contact p {
        max-width: 100%;
    }

    .socials {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 1.5rem;
        gap: 1.25rem;
        list-style: none;
    }

    .credits {
        display: flex;
        justify-content: flex-start;
        margin-top: 2rem;
        text-decoration: none;
        font-size: 14px;
    }

    menu {
        list-style: none;
        gap: 1.5rem;
    }

    menu ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    menu details {
        cursor: pointer;
        text-transform: uppercase;
    }

    menu details li {
        margin-top: 0.4rem;
    }

    menu details li::before {
        content: ">";
        margin-right: 0.5rem;
    }

    menu a {
        text-decoration: none;
        text-transform: uppercase;
    }

    menu summary {
        list-style: none;
        cursor: pointer;
    }

    menu summary::-webkit-details-marker {
        display: none;
    }

    menu li {
        list-style: none;
        transition: transform 0.2s ease;
    }
    menu li:hover {
        transform: translateX(6px);
    }

    .menu-button.active {
        text-decoration: underline;
    }

    .logo {
            width:180px;
        }

        }
    }
</style>
