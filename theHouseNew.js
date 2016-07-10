var BtnsContainer;
var container;
var btnsContainer;
var body;

// var locationBtn;
// var inventoryBtn;
// var messageBtn;

var loc="Downstairs Center Room";
var inventory;
var message;

$(document).ready(function()
{
  body = $("body");
  container = $("#container");
  btnsContainer = $("#btnsContainer");
  createDownCenter();
  $("#locationBtn").click(function()
  {
    $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
    $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readme").append("<div id='readmeTitle'>Location</div>");
    $("#readme").append("<div id='readmeText'>"+loc+"</div>");
    $("#readmeExit").click(function()
    {
      $("#readme").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
});
function createDownCenter()
{
  container.append("<button class='up buttons'>Down North</button>");
  container.append("<button class='right buttons'>Down East</button>");
  container.append("<button class='down buttons'>Down South</button>");
  container.append("<button class='left buttons'>Down West</button>");
  container.append("<button class='center buttons'>Upstairs</button>");
}
function locationColor()
{
  $("#locationBtn").css("color", "green");
}
function inventoryColor()
{
  $("#inventoryBtn").css("color", "green");
}
function messageColor()
{
  $("#messageBtn").css("color", "green");
}
function messageCheck()
{
  if (message)
  {
    message="";
  }
}
