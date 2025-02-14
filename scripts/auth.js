const ACCESS_TOKEN_KEY = "google-api-access-token";

window.addEventListener("load", () => {
  const urlHash = window.location.hash.substring(1);
  const urlParams = new URLSearchParams(urlHash);
  const accessTokenFromUrl = urlParams.get("access_token");

  if (!accessTokenFromUrl && !sessionStorage.getItem(ACCESS_TOKEN_KEY)) {
    const clientId =
      "1052099757196-3001d3kp6uljo616vag80a4qi59cupg1.apps.googleusercontent.com";
    const redirectUri = 'https://andrewandzz.github.io/voir';
    const scope = "https://www.googleapis.com/auth/spreadsheets";
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
      scope
    )}&prompt=consent`;
    window.location = authUrl;
  } else {
    if (accessTokenFromUrl) {
      sessionStorage.setItem(ACCESS_TOKEN_KEY, accessTokenFromUrl);
      window.location = window.location.origin; // cleaning up the URL in browser
    }
  }
});
