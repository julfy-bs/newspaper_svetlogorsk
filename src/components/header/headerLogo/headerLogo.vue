<template lang="pug">
  .header__logo
    img(src="./../../../images/icons/logo.svg").header__logo-img
</template>
<script>
export default {
  
}
</script>
<style lang="postcss" scoped>
.header__logo {
  width: 50%;
  min-width: 450px;
}

.header__logo-img {
  fill: $links-color;
}
</style>