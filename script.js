"use strict";


//modal open er jonne

for (let i = 0; i < 3; i++) {
  document.querySelectorAll(".button")[i].addEventListener("click", function ()
  {
    document.querySelector(".modal").classList.remove("none");
    document.querySelector(".blur").classList.remove("none");
  });
}


//modal close er jonne

document.querySelector(".close-modal").addEventListener("click", function ()
{
  document.querySelector(".modal").classList.add("none");
  document.querySelector(".blur").classList.add("none");
});


//hover a box colour change korar jonno

document.querySelector(".close-modal").addEventListener("mouseover", function ()
{
  document.querySelector(".modal").classList.add("hover");
});
document.querySelector(".close-modal").addEventListener("mouseout", function ()
{
  document.querySelector(".modal").classList.remove("hover");
});
