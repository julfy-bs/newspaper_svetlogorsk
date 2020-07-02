<template lang="pug">
  .headerTopMenu-component
    .header__menu
      ul.header__menu-list
        li.header__menu-item(
            v-for="item in items"
            :key="item.id"
          ) 
          a.header__menu-link {{item.title}}
      ul.header__menu-version.version
        li.version__item
          a(href="#").version__link
            img(src="versionpic").version__icon
            
      .header__menu-age +16
</template>
<script>
const items = [
  { id: 0, title: "Об издании" },
  { id: 1, title: "Рекламодателям" },
  { id: 2, title: "Контакты" }
];

export default {
  props: ["version"],
  
  data() {
    return {
      items
    };
  }
};
</script>

<style lang="postcss" scoped>
.header__menu {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.header__menu-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

}

.header__menu-item {
  color: $grey;
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  margin-right: 30px;

}

.header__menu-link {
  text-decoration: none;

  &:hover {
    color: $links-color;
  }
}

.version {
  width: 44px;
  height: 13px;
  padding-bottom: 20px;
  margin-right: 20px;
}

.version__icon {
  height: 100%;
  width: 100%;

  &:hover {
    /* fill: $links-color; */
  }
}

.header__menu-age {
  font-size: 20px;
  font-weight: 600;
  line-height: 18px;
}
</style>