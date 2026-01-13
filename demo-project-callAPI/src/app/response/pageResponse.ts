export interface pageResponse<T> {
  pageNo: number;
  pageSize: number;
  totalElement: number;
  totalPage: number;
  content: T[];
}
