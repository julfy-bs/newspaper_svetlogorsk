import headerTopMenu from "./headerTopMenu.vue";
import "../../../default.pcss";

export default {
  title: "headerTopMenu"
}

export const defaultView = () => ({
  components: {headerTopMenu},
  template: `
    <headerTopMenu 
      versionpic="./images/icons/version.svg"
    />
  `,
});