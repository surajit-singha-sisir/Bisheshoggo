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
        <main class="main">
            <!-- TOP BANNER -->
            <section class="main-banner">
                <div class="inner-main-banner border-bottom">
                    <aside class="props banner-circle">
                        <img src="/images/w-banner-circle.svg" alt="">
                    </aside>
                    <aside class="props model-1">
                        <img src="/images/Layer 3.png" alt="">
                    </aside>
                    <aside class="props model-2">
                        <img src="/images/Layer 5.png" alt="">
                    </aside>
                    <aside class="props plus-1">
                        <img src="/images/w-plus-1.svg" alt="">
                    </aside>

                    <aside class="props plus-2">
                        <img src="/images/w-plus-2.svg" alt="">
                    </aside>

                    <aside class="props plus-3">
                        <img src="/images/w-plus-3.svg" alt="">
                    </aside>

                    <div class="banner-text">
                        <h1>বিশেষজ্ঞ</h1>
                        <h2>আপনার সমস্যার জন্য একজন বিশেষজ্ঞ খুজুন</h2>
                        <h3>" আপনি সুস্থ বলেই পৃথিবীটা সুন্দর "</h3>
                    </div>
                </div>
            </section>

            <!-- SEARCH BAR -->
            <section class="search-main">
                <div class="inner-search-main">
                    <div class="relative-container">
                        <!-- TOGGLE SEARCH -->
                        <div class="toggle-search all-border" @click="searchToggle">
                            <p class="search-doctor" :class="{ 'active': !isSearchToggle }">ডাক্তার খুজুন
                            </p>
                            <p class="search-place" :class="{ 'active': isSearchToggle }">স্থান খুজুন</p>
                        </div>
                        <!-- INPUT SECTION -->
                        <div class="search-section" :class="{ 'hidei': isSearchToggle }">
                            <input v-model="doctorSearch" class="main-inputbox" type="text" name="search-input"
                                id="search-input" placeholder="ডাক্তারের নাম অথবা পদবি লিখে সার্চ করুন...">

                            <button @click="doctorSearchClicked" type="submit"
                                class="btn btn-primary-new">খুজুন</button>

                            <!-- DOCTOR SEARCH RESULT -->
                            <div class="doctor-search-result all-border">
                                <section class="inner-doctor-result">
                                    <div class="search-filter-section theme-bg all-border">
                                        <!-- TEXT FILTER -->
                                        <div class="search-filter">
                                            <input type="text" class="search-filter-inputbox"
                                                name="filter-search" id="filter-search" placeholder="খুজুন...">
                                            <button @click="searchSearched" type="submit" class="btn btn-primary search-filter-submit"><i
                                                    class="m-search6"></i></button>
                                        </div>

                                        <!-- FILTER SPECIALITIES -->
                                        <div class="specialities">
                                            <button @click="speciality" class="btn btn-primary f-centered"
                                                type="button"><i class="m-filter1"></i> Specialities</button>
                                            <ul class="specialities-list mastors-scrollbar theme-bg">
                                                <li class="checkbox">
                                                    <input type="checkbox" id="checkbox-0" name="specialities-1">
                                                    <label for="checkbox-0">নাক, কান ও গলা</label>
                                                </li>
                                                <li class="checkbox">
                                                    <input type="checkbox" id="checkbox-1" name="specialities-1">
                                                    <label for="checkbox-1">অশ্ব ও পাইলস</label>
                                                </li>
                                                <li class="checkbox">
                                                    <input type="checkbox" id="checkbox-2" name="specialities-1">
                                                    <label for="checkbox-2">অশ্ব ও পাইলস</label>
                                                </li>
                                                <li class="checkbox">
                                                    <input type="checkbox" id="checkbox-3" name="specialities-1">
                                                    <label for="checkbox-3">অশ্ব ও পাইলস</label>
                                                </li>
                                                <li class="checkbox">
                                                    <input type="checkbox" id="checkbox-4" name="specialities-1">
                                                    <label for="checkbox-4">অশ্ব ও পাইলস</label>
                                                </li>
                                                <li class="checkbox">
                                                    <input type="checkbox" id="checkbox-5" name="specialities-1">
                                                    <label for="checkbox-5">অশ্ব ও পাইলস</label>
                                                </li>
                                                <li class="checkbox">
                                                    <input type="checkbox" id="checkbox-6" name="specialities-1">
                                                    <label for="checkbox-6">অশ্ব ও পাইলস</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <br><br>
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

// SEARCH BOX
const isSearchToggle = ref(false);
const searchToggle = () => {
    isSearchToggle.value = !isSearchToggle.value;
}


const doctorSearch = ref(null);

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