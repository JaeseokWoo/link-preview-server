export interface GetMetadataDto {
  url: string;
}

export type GetMetadataResponse = {
  title: string;
  description: string;
  img: string | null;
  domain: string;
};
