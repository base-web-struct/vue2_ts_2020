export type PaginatorRequest = {
  page_num: number;
  page_size: number;
};

export type Response<T = any> = {
  code: number;
  data?: T;
  message?: string;
};

export type PaginatorResponse<T = any> = Response<{
  page_num: number;
  page_size: number;
  total: number;
  resultList: T[];
}>;

export type NullResp = Response<null>;
