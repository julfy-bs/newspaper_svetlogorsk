import headerTopMenu from "./headerTopMenu.vue";
import "../../../default.pcss";

export default {
  title: "headerTopMenu"
}

export const defaultView = () => ({
  components: {headerTopMenu},
  template: `
    <headerTopMenu 
      versionpic="./src/images/icons/version.svg"
    />
  `,
});