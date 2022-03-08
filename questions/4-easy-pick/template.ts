type MyPick<T, K extends keyof T> = { [TK in K]: T[TK] }
