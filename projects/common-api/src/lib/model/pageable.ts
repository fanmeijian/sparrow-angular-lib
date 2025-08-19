export interface Pageable{
  page: number,
  size: number,
  totalElements?: number,
  sort?: string[],
}

export const PAGE_DEFAULT: Pageable = {
  page: 0,
  size: 20
}
