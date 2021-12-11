/**
 * Represents a type which can either be set of null.
 */
export type Nullable<T> = T | null;

/**
 * Represents generically a constructor type.
 */
export type ConstructorType<T> = new() => T;
