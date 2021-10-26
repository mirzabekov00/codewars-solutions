/**
 * Description:
 *
 */
export const domainName = (url: string): string => {
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .split(".")[0];
};
