import Switch from "./src/switch.vue";

Switch.install = (app) => {
  app.component(Switch.name, Switch);
};
export const TSwitch = Switch;

export default TSwitch;
