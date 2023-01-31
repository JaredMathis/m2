export function element(parent, tag_name) {
    let e = document.createElement(tag_name);
    parent.appendChild(e);
}