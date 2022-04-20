function makeResponse({
  data,
  resultCode = 0,
  resultMessage = '',
}: {
  data?: unknown;
  resultCode?: number;
  resultMessage?: string;
}) {
  return {
    data,
    resultCode,
    resultMessage,
  };
}

export default makeResponse;
