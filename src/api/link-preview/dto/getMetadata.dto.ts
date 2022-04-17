export interface GetMetadataDto {
  url: string;
}

export type GetMetadataResponse = {
  title: string | null;
  description: string | null;
  img: string | null;
  domain: string | null;
};
