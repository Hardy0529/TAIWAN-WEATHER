import { linkCss } from "./tool.js"

linkCss("weatherLoadingEffect.css");

export function startDataLoading(content) {
    const container = document.createElement("div");
    container.classList.add("weather__loading");
    container.innerHTML = `<div class="weather__loading-bg">
        <div class="weather__loading-bg-circle"></div>
        <div class="weather__loading-bg-rect"></div>
    </div>
    <div class="weather__loading-content">
        <p>${content}<p>
        <div class="weather__loading-dot">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>`;
    document.body.appendChild(container);
}

export function stopDataLoading() {
    const container = document.querySelector(".weather__loading");
    document.body.removeChild(container);
}