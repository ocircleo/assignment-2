let fs1, fs2, fs3, navBase, navLinkList,subLinkList;
navBase = document.getElementsByClassName("link-container-base")[0];
navLinkList = document.getElementsByClassName("link-list");
fs1 = document.getElementsByClassName("fs")[0];
fs2 = document.getElementsByClassName("fs")[1];
fs3 = document.getElementsByClassName("fs")[2];
function navFunctioin() {
  navBase.classList.add("link-container-base-reapper-animation");
  navBase.classList.toggle("link-container-base-reapper");
  fs1.classList.toggle("fs-1");
  fs2.classList.toggle("fs-2");
  fs3.classList.toggle("fs-3");
}

function navCloseFunction() {
  for (i = 0; i < navLinkList.length; i++) {
    navBase.classList.remove("link-container-base-reapper");
    fs1.classList.remove("fs-1");
    fs2.classList.remove("fs-2");
    fs3.classList.remove("fs-3");
    if (navLinkList.classList.contains("nav-active")) {
      

    }
  }
}
