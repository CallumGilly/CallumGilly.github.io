/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  if (document.getElementById("mySidebar").style.width == "250px") {
    closeNav();
  } else {
    try {
      document.getElementById("spiroFrame").style.marginLeft = "250px";
    } catch (error) {
      
    }
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("hamburger-menu").style.marginLeft = "190px";
    $(".arrow").addClass("cross");
    $(".arrow").removeClass("arrow");
    $(".top-arrow").addClass("top-cross");
    $(".top-arrow").removeClass("top-arrow");
    $(".middle-arrow").addClass("middle-cross");
    $(".middle-arrow").removeClass("middle-arrow");
    $(".bottom-arrow").addClass("bottom-cross");
    $(".bottom-arrow").removeClass("bottom-arrow");
  }
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  try {
    document.getElementById("spiroFrame").style.marginLeft = "0px";
  } catch (error) {
    
  }
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("hamburger-menu").style.marginLeft = "0px";
  $(".cross").addClass("arrow");
  $(".cross").removeClass("cross");
  $(".top-cross").addClass("top-arrow");
  $(".top-cross").removeClass("top-cross");
  $(".middle-cross").addClass("middle-arrow");
  $(".middle-cross").removeClass("middle-cross");
  $(".bottom-cross").addClass("bottom-arrow");
  $(".bottom-cross").removeClass("bottom-cross");
}

$("#projectList").hide();
function showProjects() {
  $("#projectList").toggle(500);
}
