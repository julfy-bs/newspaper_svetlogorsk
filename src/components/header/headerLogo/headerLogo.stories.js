import headerLogo from "./headerLogo.vue";
import "../../../default.pcss";

export default {
  title: "headerLogo"
}

export const defaultView = () => ({
  components: {headerLogo},
  template: `
    <headerLogo />
  `,
});