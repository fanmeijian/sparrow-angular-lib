export interface Page<T>{
    content: T[],
    total: number,
    page:number,
    size: number
}