<template>
    <div class="about__badge">
        <a target="_blank" href="https://www.codewars.com/users/Myroslav%20Tiukhtii">
        <img src="https://www.codewars.com/users/Myroslav%20Tiukhtii/badges/micro" alt="codewars badge small" /></a>
    </div>
</template>

<style lang="scss">

    .about__badge {
        position: absolute;
        bottom: 15px;
        right: 15px;
        opacity: 0.5;
        transition: .3s ease-in;

        @media (any-hover: hover) {
            &:hover {
                opacity: 1;
            }
        }
    }

</style>