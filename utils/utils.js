export const sortDocument = (document, type) => {
  document.sort((a, b) => b[type] - a[type])
  return document;
}