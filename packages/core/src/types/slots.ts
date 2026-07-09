/**
 * A map of slot names to their base classes.
 *
 * `root` is required (every component has a root slot); any other slots are
 * declared by the consumer. The string-index signature lets variant values
 * target arbitrary slots without having to enumerate them.
 */
export type Slots = {
  [slot: string]: string | string[];
  root: string | string[];
};
