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

        }
    }
</style>
