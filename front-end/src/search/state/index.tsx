export const types = {
  REQUEST_LINK_PREVIEW: 'linkPreview/REQUEST_LINK_PREVIEW',
  SETLOADING: 'linkPreview/SET_LOADING',
};

export const actions = {
  requestLinkPreview: (url: string) => ({
    type: types.REQUEST_LINK_PREVIEW,
    url,
  }),
  setLoading: (isLoading: boolean) => ({
    type: types.SETLOADING,
    isLoading,
  }),
};
