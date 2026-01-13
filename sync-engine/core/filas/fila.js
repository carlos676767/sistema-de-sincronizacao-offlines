import PQueue from "p-queue";

export default class Fila {
  static qg = new PQueue({ concurrency: 1 });
  static fila(value) {
    this.qg.add(() => value);
  }
}
