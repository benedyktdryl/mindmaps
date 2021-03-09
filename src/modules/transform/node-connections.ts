export const NODE_CONNECTIONS: any = {
  openLink: (l: String, r: String): string => `${l} --- ${r}`,
  arrowLink: (l: String, r: String): string => `${l}-->${r}`,
  thickLink: (l: String, r: String): string => `${l} ==> ${r}`,
  dottedLink: (l: String, r: String): string => `${l}-.->${r}`,
};
