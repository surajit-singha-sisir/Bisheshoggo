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
        <main class="main" @click="toggleOff">
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
                        <!-- DOCTOR INPUT SECTION -->
                        <section class="search-section" :class="{ 'hidei': isSearchToggle }">
                            <input v-model="doctorSearchInput" class="main-inputbox" type="text" name="search-input"
                                id="search-input" placeholder="ডাক্তারের নাম অথবা পদবি লিখে সার্চ করুন...">

                            <button @click="doctorSearchClicked" type="submit"
                                class="btn btn-primary-new">খুজুন</button>

                            <!-- DOCTOR SEARCH RESULT -->
                            <div class="doctor-search-result all-border" :class="{ 'hidei': !isHidden }">
                                <div class="cross-btn" @click="doctorSearchClicked"><i class="m-m-cross"></i></div>
                                <!-- SEARCH BY DOCTOR -->
                                <section class="inner-doctor-result">
                                    <div class="search-filter-section all-border">
                                        <!-- TEXT FILTER -->
                                        <div class="search-filter">
                                            <!-- <input type="text" class="search-filter-inputbox" name="filter-search"
                                                id="filter-search" placeholder="খুজুন..."
                                                v-model="searchSearchedInput" />
                                            <button @click="searchSearched" type="submit"
                                                class="btn btn-primary search-filter-submit">
                                                <i class="m-search6"></i>
                                            </button> -->
                                            <input type="text" class="search-filter-inputbox" name="filter-search"
                                                id="filter-search" placeholder="খুজুন...">
                                            <button id="search-btn" type="button"
                                                class="btn btn-primary search-filter-submit">
                                                <i class="m-search6"></i>
                                            </button>
                                        </div>
                                        <!-- FILTER SPECIALITIES -->
                                        <div class="specialities">
                                            <button @click="docSpeciality" ref="filterBtn"
                                                class="btn btn-primary f-centered" type="button"><i
                                                    class="m-filter1"></i> বিশেষজ্ঞ</button>
                                            <ul ref="uls"
                                                class="clickedOutside specialities-list mastors-scrollbar theme-bg"
                                                :class="{ 'hidei': !isdocSpeciality }">
                                                <li class="checkbox">
                                                    <input type="checkbox" id="docBisheshoggo-0" name="specialities-1">
                                                    <label for="docBisheshoggo-0">নাক, কান ও গলা</label>
                                                </li>
                                                <li class="checkbox">
                                                    <input type="checkbox" id="docBisheshoggo-1" name="specialities-1">
                                                    <label for="docBisheshoggo-1">অশ্ব ও পাইলস</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- FILTER WORK -->
                                        <div class="specialities">
                                            <button @click="docWork" class="btn btn-primary f-centered" type="button"><i
                                                    class="m-filter1"></i> কর্মক্ষেত্র</button>
                                            <ul ref="uls"
                                                class="clickedOutside specialities-list mastors-scrollbar theme-bg"
                                                :class="{ 'hidei': !isdocWork }">
                                                <li class="checkbox">
                                                    <input type="checkbox" id="docKormokhetro-0" name="specialities-1">
                                                    <label for="docKormokhetro-0">নাক, কান ও গলা</label>
                                                </li>
                                                <li class="checkbox">
                                                    <input type="checkbox" id="docCheckbox-1" name="specialities-1">
                                                    <label for="docCheckbox-1">অশ্ব ও পাইলস</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- FILTER WORKING AREA -->
                                        <div class="specialities">
                                            <button @click="docWorkingArea" class="btn btn-primary f-centered"
                                                type="button"><i class="m-filter1"></i> কর্মস্থল</button>
                                            <ul ref="uls"
                                                class="clickedOutside specialities-list mastors-scrollbar theme-bg"
                                                :class="{ 'hidei': !isdocWorkingArea }">
                                                <li class="checkbox">
                                                    <input type="checkbox" id="docKormosthol-0" name="specialities-1">
                                                    <label for="docKormosthol-0">নাক, কান ও গলা</label>
                                                </li>
                                                <li class="checkbox">
                                                    <input type="checkbox" id="docKormosthol-1" name="specialities-1">
                                                    <label for="docKormosthol-1">অশ্ব ও পাইলস</label>
                                                </li>
                                                <li class="checkbox">
                                                    <input type="checkbox" id="docKormosthol-2" name="specialities-1">
                                                    <label for="docKormosthol-2">অশ্ব ও পাইলস</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- LIST VIEW -->
                                    <ul class="search-list mastors-scrollbar all-border" id="searchList"
                                        ref="searchList">
                                        <!-- DOCTOR -->
                                        <li class="doctor-container">
                                            <a href="#" class="inner-doctor-container all-border">
                                                <!-- PROFILE -->
                                                <div class="profile all-border">
                                                    <img src="/public/images/boy-placeholer.png" alt="">
                                                </div>
                                                <!-- DETAILS -->
                                                <div class="details">
                                                    <h3>ডা. মো. আনিসুর রহমান</h3>
                                                    <h4>এমবিবিএস, <strong>ডেম(DEM)</strong></h4>
                                                    <!-- SPECIALITY -->
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>বিশেষজ্ঞ</p>
                                                        <p>:</p>
                                                        <strong>শিশু</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মস্থল</p>
                                                        <p>&nbsp;&nbsp;:</p>
                                                        <strong>সিলেট এমএজি ওসমানী মেডিকেল কলেজ</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মক্ষেত্র</p>
                                                        <p>:</p>
                                                        <strong>সিলেট, আখালিয়া, মেজরটিলা</strong>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <!-- DOCTOR -->
                                        <li class="doctor-container">
                                            <a href="#" class="inner-doctor-container all-border">
                                                <!-- PROFILE -->
                                                <div class="profile all-border">
                                                    <img src="/public/images/girl-placeholer.png" alt="">
                                                </div>
                                                <!-- DETAILS -->
                                                <div class="details">
                                                    <h3>ডা. জান্নাতুল ফেরদৌস</h3>
                                                    <h4>এমবিবিএস, <strong>ডেম(DEM)</strong></h4>
                                                    <!-- SPECIALITY -->
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>বিশেষজ্ঞ</p>
                                                        <p>:</p>
                                                        <strong>শিশু</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মস্থল</p>
                                                        <p>&nbsp;&nbsp;:</p>
                                                        <strong>সিলেট এমএজি ওসমানী মেডিকেল কলেজ</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মক্ষেত্র</p>
                                                        <p>:</p>
                                                        <strong>সিলেট, আখালিয়া, মেজরটিলা</strong>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <!-- DOCTOR -->
                                        <li class="doctor-container">
                                            <a href="#" class="inner-doctor-container all-border">
                                                <!-- PROFILE -->
                                                <div class="profile all-border">
                                                    <img src="/public/images/boy-placeholer.png" alt="">
                                                </div>
                                                <!-- DETAILS -->
                                                <div class="details">
                                                    <h3>ডা. মো. আনিসুর রহমান</h3>
                                                    <h4>এমবিবিএস, <strong>ডেম(DEM)</strong></h4>
                                                    <!-- SPECIALITY -->
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>বিশেষজ্ঞ</p>
                                                        <p>:</p>
                                                        <strong>শিশু</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মস্থল</p>
                                                        <p>&nbsp;&nbsp;:</p>
                                                        <strong>সিলেট এমএজি ওসমানী মেডিকেল কলেজ</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মক্ষেত্র</p>
                                                        <p>:</p>
                                                        <strong>সিলেট, আখালিয়া, মেজরটিলা</strong>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <!-- DOCTOR -->
                                        <li class="doctor-container">
                                            <a href="#" class="inner-doctor-container all-border">
                                                <!-- PROFILE -->
                                                <div class="profile all-border">
                                                    <img src="/public/images/boy-placeholer.png" alt="">
                                                </div>
                                                <!-- DETAILS -->
                                                <div class="details">
                                                    <h3>ডা. মো. আনিসুর রহমান</h3>
                                                    <h4>এমবিবিএস, <strong>ডেম(DEM)</strong></h4>
                                                    <!-- SPECIALITY -->
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>বিশেষজ্ঞ</p>
                                                        <p>:</p>
                                                        <strong>শিশু</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মস্থল</p>
                                                        <p>&nbsp;&nbsp;:</p>
                                                        <strong>সিলেট এমএজি ওসমানী মেডিকেল কলেজ</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মক্ষেত্র</p>
                                                        <p>:</p>
                                                        <strong>সিলেট, আখালিয়া, মেজরটিলা</strong>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </section>


                        <!-- LOCATION INPUT SECTION -->
                        <section class="search-section" :class="{ 'hidei': !isSearchToggle }">
                            <aside class="location-Section">
                                <!-- বিভাগ -->
                                <div class="option">
                                    <select name="bivag" id="bivag" v-model="selectedBivag">
                                        <option value="choice" disabled>-- বিভাগ --</option>
                                        <option value="সিলেট">সিলেট</option>
                                        <option value="ঢাকা">ঢাকা</option>
                                        <option value="বরিশাল">বরিশাল</option>
                                        <option value="সিলেট">সিলেট</option>
                                    </select>
                                </div>
                                <!-- জেলা -->
                                <div class="option">
                                    <select name="jela" id="jela" v-model="selectedJela">
                                        <option value="choice" disabled>-- জেলা --</option>
                                        <option value="সিলেট">সিলেট</option>
                                        <option value="ঢাকা">ঢাকা</option>
                                        <option value="বরিশাল">বরিশাল</option>
                                        <option value="সিলেট">সিলেট</option>
                                    </select>
                                </div>
                                <!-- উপজেলা -->
                                <div class="option">
                                    <select name="upojela" id="upojela" v-model="selectedUpojela">
                                        <option value="choice" disabled>-- উপজেলা --</option>
                                        <option value="সিলেট">সিলেট</option>
                                        <option value="ঢাকা">ঢাকা</option>
                                        <option value="বরিশাল">বরিশাল</option>
                                        <option value="সিলেট">সিলেট</option>
                                    </select>
                                </div>
                            </aside>

                            <button @click="locationSearchClicked" type="submit"
                                class="btn btn-primary-new">খুজুন</button>
                            <!-- DOCTOR SEARCH RESULT -->
                            <div class="doctor-search-result all-border" :class="{ 'hidei': !islocationSearchClicked }">
                                <!-- ❌ CROSS -->
                                <div class="cross-btn" @click="locationSearchClicked"><i class="m-m-cross"></i></div>

                                <!-- SEARCH BY DOCTOR -->
                                <section class="inner-doctor-result">
                                    <div class="search-filter-section all-border">

                                        <!-- TEXT FILTER -->
                                        <div class="search-filter">
                                            <input type="text" class="search-filter-inputbox" name="filter-search"
                                                id="locfilter-search" placeholder="খুজুন...">
                                            <button @click="searchSearched" type="submit"
                                                class="btn btn-primary search-filter-submit"><i
                                                    class="m-search6"></i></button>
                                        </div>
                                        <!-- FILTER SPECIALITIES -->
                                        <div class="specialities">
                                            <button @click="locSpeciality" class="btn btn-primary f-centered"
                                                type="button"><i class="m-filter1"></i> বিশেষজ্ঞ</button>

                                            <ul ref="uls"
                                                class="clickedOutside specialities-list mastors-scrollbar theme-bg hidei"
                                                :class="{ 'hidei': !islocSpeciality }">
                                                <li class="checkbox">
                                                    <input type="checkbox" id="locBisheshoggo-0" name="specialities-1">
                                                    <label for="locBisheshoggo-0">নাক, কান ও গলা</label>
                                                </li>
                                                <li class="checkbox">
                                                    <input type="checkbox" id="locBisheshoggo-1" name="specialities-1">
                                                    <label for="locBisheshoggo-1">অশ্ব ও পাইলস</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- FILTER WORK -->
                                        <div class="specialities">
                                            <button @click="locWork" class="btn btn-primary f-centered" type="button"><i
                                                    class="m-filter1"></i> কর্মক্ষেত্র</button>
                                            <ul ref="uls"
                                                class="clickedOutside specialities-list mastors-scrollbar theme-bg"
                                                :class="{ 'hidei': !islocWork }">
                                                <li class="checkbox">
                                                    <input type="checkbox" id="locKormokhetro-0" name="specialities-1">
                                                    <label for="locKormokhetro-0">নাক, কান ও গলা</label>
                                                </li>
                                                <li class="checkbox">
                                                    <input type="checkbox" id="locCheckbox-1" name="specialities-1">
                                                    <label for="locCheckbox-1">অশ্ব ও পাইলস</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- FILTER WORKING AREA -->
                                        <div class="specialities">
                                            <button @click="locWorkingArea" class="btn btn-primary f-centered"
                                                type="button"><i class="m-filter1"></i> কর্মস্থল</button>
                                            <ul ref="uls"
                                                class="clickedOutside specialities-list mastors-scrollbar theme-bg"
                                                :class="{ 'hidei': !islocWorkingArea }">
                                                <li class="checkbox">
                                                    <input type="checkbox" id="locKormosthol-0" name="specialities-1">
                                                    <label for="locKormosthol-0">নাক, কান ও গলা</label>
                                                </li>
                                                <li class="checkbox">
                                                    <input type="checkbox" id="locKormosthol-1" name="specialities-1">
                                                    <label for="locKormosthol-1">অশ্ব ও পাইলস</label>
                                                </li>
                                                <li class="checkbox">
                                                    <input type="checkbox" id="locKormosthol-2" name="specialities-1">
                                                    <label for="locKormosthol-2">অশ্ব ও পাইলস</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!-- LIST VIEW -->
                                    <ul class="search-list mastors-scrollbar all-border">
                                        <!-- DOCTOR -->
                                        <li class="doctor-container">
                                            <a href="#" class="inner-doctor-container all-border">
                                                <!-- PROFILE -->
                                                <div class="profile all-border">
                                                    <img src="/public/images/boy-placeholer.png" alt="">
                                                </div>
                                                <!-- DETAILS -->
                                                <div class="details">
                                                    <h3>ডা. মো. আনিসুর রহমান</h3>
                                                    <h4>এমবিবিএস, <strong>ডেম(DEM)</strong></h4>
                                                    <!-- SPECIALITY -->
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>বিশেষজ্ঞ</p>
                                                        <p>:</p>
                                                        <strong>শিশু</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মস্থল</p>
                                                        <p>&nbsp;&nbsp;:</p>
                                                        <strong>সিলেট এমএজি ওসমানী মেডিকেল কলেজ</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মক্ষেত্র</p>
                                                        <p>:</p>
                                                        <strong>সিলেট, আখালিয়া, মেজরটিলা</strong>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <!-- DOCTOR -->
                                        <li class="doctor-container">
                                            <a href="#" class="inner-doctor-container all-border">
                                                <!-- PROFILE -->
                                                <div class="profile all-border">
                                                    <img src="/public/images/girl-placeholer.png" alt="">
                                                </div>
                                                <!-- DETAILS -->
                                                <div class="details">
                                                    <h3>ডা. জান্নাতুল ফেরদৌস</h3>
                                                    <h4>এমবিবিএস, <strong>ডেম(DEM)</strong></h4>
                                                    <!-- SPECIALITY -->
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>বিশেষজ্ঞ</p>
                                                        <p>:</p>
                                                        <strong>শিশু</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মস্থল</p>
                                                        <p>&nbsp;&nbsp;:</p>
                                                        <strong>সিলেট এমএজি ওসমানী মেডিকেল কলেজ</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মক্ষেত্র</p>
                                                        <p>:</p>
                                                        <strong>সিলেট, আখালিয়া, মেজরটিলা</strong>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <!-- DOCTOR -->
                                        <li class="doctor-container">
                                            <a href="#" class="inner-doctor-container all-border">
                                                <!-- PROFILE -->
                                                <div class="profile all-border">
                                                    <img src="/public/images/boy-placeholer.png" alt="">
                                                </div>
                                                <!-- DETAILS -->
                                                <div class="details">
                                                    <h3>ডা. মো. আনিসুর রহমান</h3>
                                                    <h4>এমবিবিএস, <strong>ডেম(DEM)</strong></h4>
                                                    <!-- SPECIALITY -->
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>বিশেষজ্ঞ</p>
                                                        <p>:</p>
                                                        <strong>শিশু</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মস্থল</p>
                                                        <p>&nbsp;&nbsp;:</p>
                                                        <strong>সিলেট এমএজি ওসমানী মেডিকেল কলেজ</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মক্ষেত্র</p>
                                                        <p>:</p>
                                                        <strong>সিলেট, আখালিয়া, মেজরটিলা</strong>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <!-- DOCTOR -->
                                        <li class="doctor-container">
                                            <a href="#" class="inner-doctor-container all-border">
                                                <!-- PROFILE -->
                                                <div class="profile all-border">
                                                    <img src="/public/images/boy-placeholer.png" alt="">
                                                </div>
                                                <!-- DETAILS -->
                                                <div class="details">
                                                    <h3>ডা. মো. আনিসুর রহমান</h3>
                                                    <h4>এমবিবিএস, <strong>ডেম(DEM)</strong></h4>
                                                    <!-- SPECIALITY -->
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>বিশেষজ্ঞ</p>
                                                        <p>:</p>
                                                        <strong>শিশু</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মস্থল</p>
                                                        <p>&nbsp;&nbsp;:</p>
                                                        <strong>সিলেট এমএজি ওসমানী মেডিকেল কলেজ</strong>
                                                    </span>
                                                    <span class="f-start-center gap-10 f-wrap">
                                                        <p>কর্মক্ষেত্র</p>
                                                        <p>:</p>
                                                        <strong>সিলেট, আখালিয়া, মেজরটিলা</strong>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <br><br>
            <!-- <img class="w-100" src="/public/UI/index.jpg" alt=""> -->
        </main>

    </section>
</template>

<script setup>
import { showToast } from "/public/JS/showToast.js";



const filterBtn = ref(null);

const isdocSpeciality = ref(false);
const docSpeciality = () => {
    isdocSpeciality.value = !isdocSpeciality.value;
}




const locWorkingArea = (event) => {
    islocWorkingArea.value = !islocWorkingArea.value;
}

const uls = ref([]);






const selectedBivag = ref("choice");
const selectedJela = ref("choice");
const selectedUpojela = ref("choice");
const islocationSearchClicked = ref(false);

// LOCATION SEARCH 
const locationSearchClicked = () => {
    if (selectedBivag.value != 'choice' || selectedJela.value != 'choice' || selectedUpojela.value != 'choice') {
        islocationSearchClicked.value = !islocationSearchClicked.value;


        if (islocationSearchClicked.value === false) {
            doctorSearchInput.value = '';
            selectedBivag.value = 'choice';
            selectedJela.value = 'choice';
            selectedUpojela.value = 'choice';
        }
    } else {
        showToast("error", "অনুগ্রহ করে যে কোন একটি সিলেক্ট করুন", "bottom-right")
    }
}
const doctorSearchInput = ref('');
const isHidden = ref(false);

const doctorSearchClicked = () => {
    if (doctorSearchInput.value) {
        isHidden.value = !isHidden.value;

        if (isHidden.value === false) {
            doctorSearchInput.value = '';
        }
    } else {
        showToast('error', 'অনুগ্রহ করে কিছু লিখুন...', 'bottom-right');
    }
}


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

// FILTERS
const isdocWork = ref(false);
const isdocWorkingArea = ref(false);

const docWork = () => {
    isdocWork.value = !isdocWork.value;
}
const docWorkingArea = () => {
    isdocWorkingArea.value = !isdocWorkingArea.value;
}





// LOCATION SEARCH
// FILTERS
const islocSpeciality = ref(false);
const islocWork = ref(false);
const islocWorkingArea = ref(false);
const locSpeciality = () => {
    islocSpeciality.value = !islocSpeciality.value;
}
const locWork = () => {
    islocWork.value = !islocWork.value;
}

onMounted(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('dark-mode') === 'true') {
        isDarkMode.value = true;
        document.body.classList.add('dark-mode');
    }











    document.getElementById('filter-search').addEventListener('input', function () {
        const searchQuery = document.getElementById('filter-search').value.trim();
        const searchList = document.getElementById('searchList');
        const doctors = searchList.getElementsByClassName('doctor-container');
        let matchFound = false;

        // If there's a search query, build a regex to match each character in the query (case-insensitive)
        const regex = new RegExp(searchQuery.split('').join('.*?'), 'gi');

        Array.from(doctors).forEach(function (doctor) {
            const allTextElements = doctor.querySelectorAll('h3, h4, p, strong');
            let doctorMatchFound = false;

            allTextElements.forEach(function (element) {
                const textContent = element.textContent;

                if (searchQuery !== '' && regex.test(textContent)) {
                    doctorMatchFound = true;
                    matchFound = true;
                    // Highlight the characters that match the search query
                    element.innerHTML = textContent.replace(
                        regex,
                        (match) => `<mark>${match}</mark>`
                    );
                }
            });

            if (doctorMatchFound || searchQuery === '') {
                doctor.style.display = '';
            } else {
                doctor.style.display = 'none';
            }
        });

        const noDataMessage = document.getElementById('no-data-message');

        if (!matchFound && searchQuery !== '') {
            if (!noDataMessage) {
                searchList.classList.add("loader");
                setTimeout(() => {
                    const h2 = document.createElement('h2');
                    h2.id = 'no-data-message';
                    h2.textContent = 'কোন ডাটা পাওয়া যায়নি';
                    h2.style.color = 'red';
                    h2.style.padding = '2rem';
                    h2.style.textAlign = 'center';
                    searchList.appendChild(h2);

                    searchList.classList.remove("loader");
                }, 1000);
            }
        } else if (matchFound || searchQuery === '') {
            if (noDataMessage) {
                noDataMessage.remove();
                searchList.classList.remove("loader");
            }

            if (searchQuery === '') {
                Array.from(doctors).forEach(function (doctor) {
                    const allTextElements = doctor.querySelectorAll('h3, h4, p, strong');
                    allTextElements.forEach(function (element) {
                        element.innerHTML = element.textContent;
                    });
                });
            }
        }
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('filter-search').value = '';
            document.getElementById('filter-search').dispatchEvent(new Event('input'));
        }
    });




});

</script>

<style lang="scss">
@use '/public/CSS/bisheshoggo.scss';
@use '/public/CSS/showToast.css';

/* HTML: <div class="loader"></div> */
.loader {
    width: fit-content;
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    background: linear-gradient(90deg, #000 50%, #0000 0) right/200% 100%;
    animation: l21 2s infinite linear;
}

.loader::before {
    content: "Loading...";
    color: #0000;
    padding: 0 5px;
    background: inherit;
    background-image: linear-gradient(90deg, #fff 50%, #000 0);
    -webkit-background-clip: text;
    background-clip: text;
}

@keyframes l21 {
    100% {
        background-position: left
    }
}
</style>