function getAPI({ req }) {
  const apiKey = "93f8780438b44379bd04827ffc96fc1f";
  const API = `https://newsapi.org/v2/${req}&apiKey=${apiKey}`;
  return API;
}

export default getAPI;
