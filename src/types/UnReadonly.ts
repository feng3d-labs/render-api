/**
 * 移除对象属性中的 readonly 关键字。
 */
export type UnReadonly<T> = {
    -readonly [P in keyof T]: T[P];
};
