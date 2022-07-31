var makeNewElement = function (elements) {
    var tag = elements.tag, text = elements.text, className = elements.className, _a = elements.styles, color = _a[0], padding = _a[1];
    var hotels = document.querySelector(".hotels");
    if (typeof text === "string" && typeof className === "string") {
        hotels.className = className;
        hotels.textContent = text;
    }
    console.log(hotels.classList);
};
makeNewElement({ tag: 'div', text: "Hello Typescript", className: "hotel-detail", styles: ['black', "20px"] });
