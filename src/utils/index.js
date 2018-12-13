export const filterLocaleToLang = (locale) => {
  let lang = null;
  if (locale) {
    let arr = locale.toString().split("_");
    if (arr.length === 2) {
      lang = arr[0]
    }
  }
  return lang
};