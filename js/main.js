const playlistDiv = document.getElementById("playlists")
const PLAYLISTS = [
    "https://open.spotify.com/embed/playlist/75hfNm4WjseJfCExsbt7YF?utm_source=generator",
    "https://open.spotify.com/embed/playlist/6YlWaudJGIYJYPOzZ0CWD0?utm_source=generator",
    "https://open.spotify.com/embed/playlist/2rzHy0HQbjFK5NJ3ZUuAsE?utm_source=generator",
    "https://open.spotify.com/embed/playlist/1RBOEq5UAma1XbRGguiOQA?utm_source=generator",
    "https://open.spotify.com/embed/playlist/0rOzCfXzfJDvprQEh0kopr?utm_source=generator",
    "https://open.spotify.com/embed/playlist/2nkkY9ECCEY8JfZlcVRSoy?utm_source=generator",
    "https://open.spotify.com/embed/playlist/1trlEGqRL93l2s8ERS1Ni4?utm_source=generator",
    "https://open.spotify.com/embed/playlist/3rEvBUTt93sYyKO6X39d6h?utm_source=generator",
    "https://open.spotify.com/embed/playlist/4VLXhCxlSkryqY8hEsZRbx?utm_source=generator",
    "https://open.spotify.com/embed/playlist/2vatrc8aeDhdx5zcGP2eci?utm_source=generator",
    "https://open.spotify.com/embed/playlist/50RZL1xpLvjHa5kcV79ZoQ?utm_source=generator",
    "https://open.spotify.com/embed/playlist/2I1ho0dZuwPqYFPwrmuOsZ?utm_source=generator",
    "https://open.spotify.com/embed/playlist/2LojuHgA4UhareIlGBwOQH?utm_source=generator",
    "https://open.spotify.com/embed/playlist/0CqqOUSrdOn8zq0vFichGm?utm_source=generator",
    "https://open.spotify.com/embed/playlist/36p20L5SD8HODrLChlOhlD?utm_source=generator",
]

PLAYLISTS.forEach(p => {
    let iframe = document.createElement("iframe");
    iframe.setAttribute("data-testid", "embed-iframe");
    iframe.setAttribute("src", p);
    iframe.setAttribute("frameBorder", 0);
    iframe.setAttribute("allow", "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture");
    iframe.setAttribute("loading", "lazy");
    playlistDiv.appendChild(iframe);
});