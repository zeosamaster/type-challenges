type MyReadonly<T> = { readonly [TK in keyof T]: T[TK]}
