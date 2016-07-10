var BtnsContainer;
var container;
var btnsContainer;
var body;

// var locationBtn;
// var inventoryBtn;
// var messageBtn;

var loc="Downstairs Center Room";
var inventory="";
var message="";

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
  $("#inventoryBtn").click(function()
  {
    $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
    $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readme").append("<div id='readmeTitle'>Inventory</div>");
    $("#readme").append("<div id='readmeText'>"+inventory+"</div>");
    $("#readmeExit").click(function()
    {
      $("#readme").fadeOut(300, function()
      {
        $(this).remove();
      });
    });
  });
  $("#messageBtn").click(function()
  {
    $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
    $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readme").append("<div id='readmeTitle'>Message</div>");
    $("#readme").append("<div id='readmeText'>"+message+"</div>");
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
  loc="Downstairs Center Room";
  container.append("<div id='current'></div>")
  $("#current").append("<button class='up buttons'>Down North</button>");
  $("#current").append("<button class='right buttons'>Down East</button>");
  $("#current").append("<button class='down buttons'>Down South</button>");
  $("#current").append("<button class='left buttons'>Down West</button>");
  $("#current").append("<button class='center buttons'>Upstairs</button>");
  $(".up").click(function()
  {
    messageCheck();
    $("#current").remove();
    createDownNorth();
  });
  $(".right").click(function()
  {
    messageCheck();
    if (inventory.indexOf("door key") != -1)
    {
      $("#current").remove();
      createDownEast();
    }
    else
    {
      message="This door is locked, a door key is needed.";
    }
  });
  $(".down").click(function()
  {
    messageCheck();
    $("#current").remove();
    createDownSouth();
  });
  $(".left").click(function()
  {
    messageCheck();
    $("#current").remove();
    createDownWest();
  });
  $(".center").click(function()
  {
    messageCheck();
    $("#current").remove();
    createUpCenter();
  });
}
function createDownNorth()
{
  loc="Downstairs North Room";
  container.append("<div id='current'></div>")
  $("#current").append("<button class='down buttons'>Down Center</button>");
  if (inventory.indexOf("saw") === -1)
  {
    $("#current").append("<button class='obj'>saw</button")
    $(".obj").click(function()
    {
      messageCheck();
      inventory+="saw, ";
      $(".obj").remove();
    });
  }
  $(".down").click(function()
  {
    messageCheck();
    $("#current").remove();
    createDownCenter();
  });
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
