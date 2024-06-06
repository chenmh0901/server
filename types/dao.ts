export interface ResponseStandardObj {
  code: AmumuStatusCode;
  message: string;
  data: any;
}

export enum AmumuStatusCode {
  ARTICLE_HAS_BEEN_POSTED = 10001,
  SUCCESS = 200,
}
