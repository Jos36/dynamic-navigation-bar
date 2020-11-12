const menu = document.querySelector(`#menu`);
const sections = document.querySelector("#sections");
const children = sections.children;
const fragment = document.createDocumentFragment();

//looping through the sections's html collection and creating dynamic nav items and adding eventlistener (click) to each of them for the scrolling process

for (const child of children) {
  const newSection = document.createElement("li");
  newSection.textContent = `${child.id}`;
  newSection.classList.add("navitems");
  newSection.classList.add(`${child.id}`);
  newSection.addEventListener("click", function onclick(e) {
    document
      .querySelector(`#${this.textContent}`)
      .scrollIntoView({ block: `start`, behavior: `smooth` });
    this.classList.toggle("active");
  });
  fragment.appendChild(newSection);
}
menu.appendChild(fragment);

// speacial active class for the active section

const navItems = document.querySelectorAll(`.navitems`);
const navItemsArray = Array.from(navItems);
const secs = document.querySelectorAll(".sec");
const options = { threshold: [0.375] };
let observer = new IntersectionObserver(checking, options);
function checking(entries) {
  entries.forEach((entry) => {
    const activeSection = entry.target.id;
    const activeNavItem = document.querySelector(`.${activeSection}`);
    if (entry.isIntersecting) {
      activeNavItem.classList.add(`active`);
      entry.target.classList.remove(`nonactivesection`);
      entry.target.classList.add(`activesection`);
    } else {
      activeNavItem.classList.remove(`active`);
      entry.target.classList.add(`nonactivesection`);
    }
  });
}
// what do we check/observe
secs.forEach((section) => {
  observer.observe(section);
});
