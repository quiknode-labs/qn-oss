export type SimplifyType<T> = T extends object
  ? { [K in keyof T]: SimplifyType<T[K]> }
  : T;
