const albumart = document.getElementById("albumart");
const trackContainer = document.getElementById("track-container");
const headerTitle = document.getElementById("track-title");
const headerArtist = document.getElementById("track-artist");
const defaultAlbumArt = "media/background.jpg"; // fallback image

// Updates displayed track info when a new song plays
function livelyCurrentTrack(data) {
  let obj = JSON.parse(data);

  if (obj != null) {
    headerTitle.innerText = obj.Title || "Unknown Title";
    headerArtist.innerText = obj.Artist || "Unknown Artist";

    // Show album art (no background)
    if (obj.Thumbnail != null) {
      const imageSrc = !obj.Thumbnail.startsWith("data:image/")
        ? "data:image/png;base64," + obj.Thumbnail
        : obj.Thumbnail;

      albumart.src = imageSrc;
    } else {
      albumart.src = defaultAlbumArt;
    }

    trackContainer.style.opacity = 1;
  } else {
    // When no track is playing
    headerTitle.innerText = "";
    headerArtist.innerText = "";
    albumart.src = defaultAlbumArt;
    trackContainer.style.opacity = 0;
  }
}
