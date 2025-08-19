export interface PageImpl {
  content: any[],
  totalElements: number, //兼容老版本的
  page: {
    size: number,
    number: number,
    totalElements: number,
    totalPages: number
  }
}
