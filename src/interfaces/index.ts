export interface IItems {
    items: ITodo[]
}

export interface IBook {
    id: string,
    title: string,
    intro: string,
    author: string,
    ISBN: string,
    category: string,
}

export interface IAction<T = any> {
    type: string; // Loại hành động
    payload?: T;  // Dữ liệu đi kèm (có thể tùy chọn)
}
export interface IState {
    [key: string]: any; // Mỗi phần trạng thái có thể là bất kỳ kiểu dữ liệu nào
}

export interface ITodo {
    id: number,
    name: string,
    complete: boolean
}


export interface ITodoAction {
    id?: number;
    type: string;
    todo: ITodo
}
