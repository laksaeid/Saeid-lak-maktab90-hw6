"use strict";
const body = document.querySelector("body");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  function ShowNotification(input) {
    const deleteLastMsg = document.querySelector("div");
    deleteLastMsg && deleteLastMsg.remove();
    const div = document.createElement("div");
    div.className = input.className;
    div.innerHTML = input.html;
    div.style = `
position:absolute;
top:${input.top}px;
right:${input.right}px;
transition: all 2s;`;
    body.append(div);
  }
  ShowNotification({
    top: +prompt("inter top space"),
    right: +prompt("inter right space"),
    html: prompt("inter msg"),
    className: "welcome",
  });
});
