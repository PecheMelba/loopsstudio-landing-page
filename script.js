/*Media querry changed state*/
const mediaQuery = window.matchMedia('(min-width: 900px)');
let isDesktopMode = false;

function handleTabletChange(e) 
{
  // Check if the media query is true
  if (e.matches) //if viewports at least 950px wide
  { 
    isDesktopMode = true; 
  }
  else//if viewports less than 950px wide
  {     
    isDesktopMode = false;
  }
}
// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery)

document.getElementById('menu-btn').addEventListener("click", () => 
{
    if(!isDesktopMode)
    {
        document.getElementById("mobile-menu").style.display = "flex";
        document.getElementById("menu-btn").style.display = "none";
        document.getElementById("close-menu-btn").style.display = "inline";
        document.getElementById("menu-pannel").style.backgroundColor = "rgba(0, 0, 0, 1)";
    }
});

document.getElementById('close-menu-btn').addEventListener("click", () => 
{
    if(!isDesktopMode)
    {
        document.getElementById("mobile-menu").style.display = "none";
        document.getElementById("menu-btn").style.display = "inline";
        document.getElementById("close-menu-btn").style.display = "none";
        document.getElementById("menu-pannel").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
});