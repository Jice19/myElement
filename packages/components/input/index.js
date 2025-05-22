import Input from "./src/input.vue";

Input.install = (app) => {
  app.component(Input.name, Input);
};
export const TInput = Input;

export default TInput;
