<template>
    <section>
        <!-- JOIN AS A DOCTOR -->
        <section class="join-as-a-doctor">
            <div class="res-container m-auto f f-just-end">
                <span class="w-100 f-end-center gap-10">
                    <a class="text-no-wrap text--s" href="#">Join as a Doctor !</a>
                    <!-- TOGGLE -->
                    <div class="dark-toggle-bar" id="dark-toggle-bar">
                        <div class="dark-toggle-div" @click="toggleDarkMode">
                            <span class="toggle-icon" :class="{ toggled: !isDarkMode }">
                                <span class="toggle-active"></span>
                                <i class="m-sun3"></i>
                            </span>
                            <span class="toggle-icon" :class="{ toggled: isDarkMode }">
                                <i class="m-moon1 text--12"></i>
                                <span class="toggle-active"></span>
                            </span>
                        </div>
                    </div>
                </span>
            </div>
        </section>

        <!-- NAVBAR -->
        <div class="bg-dark" :class="{ 'navToggleAnimStart': isToggledNav || isDarkBgClicked || isLinkClicked }"
            @click="darkBGClick"></div>

        <header class="header border-bottom">
            <nav class="nav res-container m-auto">
                <!-- HAMBURGER -->
                <div class="hamburger" @click="toggleNavbar">
                    <div class="inner-hamburger">
                        <div class="first-line line-rounded"
                            :class="{ 'first-lined': isToggledNav || isDarkBgClicked, 'bg-Whitei': isDarkMode }"></div>
                        <div class="second-line line-rounded"
                            :class="{ 'second-lined': isToggledNav || isDarkBgClicked, 'bg-Whitei': isDarkMode }"></div>
                        <div class="third-line line-rounded"
                            :class="{ 'third-lined': isToggledNav || isDarkBgClicked, 'bg-Whitei': isDarkMode }"></div>
                    </div>
                </div>

                <!-- LOGO -->
                <div class="logo-centered">
                    <a href="/" class="logo">
                        <img :src="isDarkMode ? '/icons/dark-logo.svg' : '/icons/white-logo.svg'" alt="Logo">
                    </a>
                </div>

                <!-- NAV ITEMS -->
                <div class="nav-items">
                    <div class="inner-nav-items">
                        <span class="gap-10 f-centered"><a href="#">বিশেষজ্ঞ</a></span>
                        <span class="gap-10 f-centered"><a href="#">এলাকা ভিত্তিক</a></span>
                        <span class="gap-10 f-centered"><a href="#">প্রশংসাপত্র</a></span>
                        <span class="gap-10 f-centered"><a href="#">যোগাযোগ</a></span>
                        <span class="gap-10 f-centered"><a href="#">আমাদের সম্পর্কে</a></span>
                    </div>
                </div>
            </nav>
        </header>

        <!-- NAV ITEMS RESPONSIVE -->
        <div class="nav-items-responsive"
            :class="{ 'navToggleAnimStart': isToggledNav || isDarkBgClicked || isLinkClicked }">
            <div class="inner-nav-items">
                <div class="border-bottom w-100" @click="LinkClicked">
                    <span class="gap-10 f-centered"><i><img class="w-100" src="/public/icons/bisheshoggo-icon.svg"
                                alt=""></i><a href="#">বিশেষজ্ঞ</a></span>
                </div>
                <div class="border-bottom w-100" @click="LinkClicked">
                    <span class="gap-10 f-centered"><i><img class="w-100" src="/public/icons/elaka-vittik-icon.svg"
                                alt=""></i><a href="#">এলাকা
                            ভিত্তিক</a></span>
                </div>
                <div class="border-bottom w-100" @click="LinkClicked">
                    <span class="gap-10 f-centered"><i><img class="w-100" src="/public/icons/prosongsa-icon.svg"
                                alt=""></i><a href="#">প্রশংসাপত্র</a></span>
                </div>
                <div class="border-bottom w-100" @click="LinkClicked">
                    <span class="gap-10 f-centered"><i><img class="w-100" src="/public/icons/jugajug-icon.svg"
                                alt=""></i><a href="#">যোগাযোগ</a></span>
                </div>
                <div class="border-bottom w-100" @click="LinkClicked">
                    <span class="gap-10 f-centered"><i><img class="w-100" src="/public/icons/amader-somporke-icon.svg"
                                alt=""></i><a href="#">আমাদের
                            সম্পর্কে</a></span>
                </div>
            </div>
        </div>
        <main class="res-container m-auto main">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dignissimos, velit possimus
            repudiandae quibusdam ipsa maxime labore numquam corporis provident aliquam laboriosam a iste dolores eius
            suscipit error temporibus rem.
            <img class="w-100" src="/public/UI/index.jpg" alt="">
        </main>
    </section>
</template>

<script setup>
// DARK THEME TOGGLE
const isDarkMode = ref(false);

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    if (isDarkMode.value) {
        document.body.classList.add('dark-mode')
        localStorage.setItem('dark-mode', 'true')
    } else {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('dark-mode', 'false')
    }
}

const isToggledNav = ref(false);
const toggleNavbar = () => {
    isToggledNav.value = !isToggledNav.value;
    isDarkBgClicked.value = !isDarkBgClicked.value;
    isLinkClicked.value = !isLinkClicked.value;
}
const isDarkBgClicked = ref(false);
const darkBGClick = () => {
    isToggledNav.value = false;
    isDarkBgClicked.value = false; 
    isLinkClicked.value = false;
}
const isLinkClicked = ref(false);
const LinkClicked = () => {
    isToggledNav.value = false;
    isDarkBgClicked.value = false; 
    isLinkClicked.value = false;
}


onMounted(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('dark-mode') === 'true') {
        isDarkMode.value = true
        document.body.classList.add('dark-mode')
    }
})
</script>

<style lang="scss">
@use '/public/CSS/bisheshoggo.scss';
</style>