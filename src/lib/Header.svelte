<script>
    import { navigating, page } from '$app/stores';
    let menuVisible = false;
    let menuButtonClickHandler = () => {menuVisible = !menuVisible};
    let menuItemClickHandler = () => {menuVisible = false}
</script>
<header>
    <nav class:navigating={$navigating !== null}>
        <div class="progressBar"><div></div></div>
        <div class="logo">
            <a href="/">Tofu Apps</a>
        </div>
        <div class="menuButton" on:click={menuButtonClickHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
        <div class="menu" class:visible={menuVisible}>
            <li class:active={$page.url.pathname === '/'}><a href="/">Home</a></li>
            <li class:active={$page.url.pathname === '/products'}><a href="/products">Products</a></li>
            <li class:active={$page.url.pathname === '/blog'}><a href="/blog">Blog</a></li>
            <li class:active={$page.url.pathname === '/about'}><a href="/about">About</a></li>
        </div>
    </nav>
</header>
<div class="menuMobile" class:visible={menuVisible}>
    <!--replicated because chrome has a bug on the mobile ui where background blur doesn't apply on child elements if parent already has it-->
    <li class:active={$page.url.pathname === '/'}><a href="/"  on:click={menuItemClickHandler}>Home</a></li>
    <li class:active={$page.url.pathname === '/products'}><a href="/products" on:click={menuItemClickHandler}>Products</a></li>
    <li class:active={$page.url.pathname === '/blog'}><a href="/blog" on:click={menuItemClickHandler}>Blog</a></li>
    <li class:active={$page.url.pathname === '/about'}><a href="/about" on:click={menuItemClickHandler}>About</a></li>
</div>

<style lang="scss">
    header {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10000;
        @include background-blur;

    }
    nav {
        display: block;
        position: relative;
        max-width: 1024px;
        margin: 0 auto;

            .progressBar {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 5px;
                z-index: 10001;
                background-color: $color-primary;
                opacity: 0;
                transition: opacity 0.25s ease-in-out 0.1s;
                    div {
                        width: 150px;
                        height: 100%;
                        background-image: linear-gradient(to right, #fff0, #ffff, #fff0);
                        opacity: 0;
                        transition: opacity 0.1s ease-in-out;
                        animation: slide 0.5s linear infinite forwards;
                        @keyframes slide {
                            0% {margin-left: 0%; opacity: 0;}
                            20% {opacity: 1;}
                            80% {opacity: 1;}
                            100% {margin-left: 100%; opacity: 0;}
                        }
                    }
            }

            &.navigating > .progressBar {
                opacity: 1;
            }

            .logo {
                float: left;
                font-weight: bold;
                font-size: 24px;
                margin: 8px 32px;
                line-height: 40px;
                    a {
                        color: $color-header;
                    }
            }

            .menuButton {
                float: right;
                margin: 11px 32px;
                font-size: 24px;
                line-height: 40px;
                height: 24px;
                width: 24px;
                cursor: pointer;
                color: $color-header;

                @media (min-width: 600px) {
                    display: none;
                }

                &:hover {
                    opacity: 0.5;
                }

                &:active {
                    opacity: 0.1;
                }

                transition: opacity 0.2s ease-in-out;
            }

    }
    .menu, .menuMobile {
        float: right;
        position: relative;
        font-size: 18px;
        margin: 11px 32px;
        line-height: 40px;
        top: 0;
        right: 0;
        padding: 0;

            li {
                display: inline-block;
                margin: 0;
                padding: 0 16px;
                list-style: none;
                text-decoration: none;
                    &.active {
                        font-weight: bold;
                    }
                    a {
                        display: block;
                        color: $color-header;
                    }
            }
    }
    /*workaround for background blur bug*/
    .menuMobile {
        top: 40px;
        float: unset;
        display: none;
        position: fixed;
        border-radius: 8px;
        width: 150px;
        appearance: none;
        box-shadow: $popup-shadow;
        @include background-blur;
        z-index: 10001;
            &:not(.visible) {
                opacity: 0;
                user-select: none;
                pointer-events: none;
            }
            li {
                text-align: left;
                display: block;
            }
            transition: opacity 0.2s ease-in-out;
    }
    @media (max-width: 599px) {
        .menuMobile {
            display: unset;
        }
        .menu {
            display: none;
        }
    }


</style>
