export interface apiResponse<T> {
  data: T;
  message: string;
  status: string;
}
