negativButton.addEventListener('click', () => {
    let naturalWidth = parseInt(getComputedStyle(cssDiv).width);
    cssDiv.style.width = naturalWidth - 5 + "px";
});
