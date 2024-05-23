document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cloneBtn1").addEventListener("click", () => cloneElement("horse1"));
    document.getElementById("cloneBtn2").addEventListener("click", () => cloneElement("horse2"));
    document.getElementById("cloneBtn3").addEventListener("click", () => cloneElement("horse3"));
});

function cloneElement(elementId) {
    const element = document.getElementById(elementId);
    const clone = element.cloneNode(true);
    element.parentNode.appendChild(clone);
}
