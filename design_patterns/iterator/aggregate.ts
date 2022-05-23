import { Iterator } from "./iterator";

export interface Aggregate<E> {
  iterator: () => Iterator<E>;
}
