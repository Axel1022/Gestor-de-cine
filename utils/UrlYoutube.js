exports.convertToEmbedUrl =  function convertToEmbedUrl(url) {
  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get("v");
  return `https://www.youtube.com/embed/${videoId}`;
}
