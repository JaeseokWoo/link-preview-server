export interface GetMetadataDto {
  url: string;
}

export type GetMetadataResponse = {
  title: string | null | undefined;
  description: string | null | undefined;
  img: string | null | undefined;
  domain: string | undefined;
};
