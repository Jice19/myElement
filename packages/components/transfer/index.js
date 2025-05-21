import Transfer from "./src/transfer.vue";

Transfer.install = (app) => {
  app.component(Transfer.name, Transfer);
};
export const TTransfer = Transfer;

export default TTransfer;
