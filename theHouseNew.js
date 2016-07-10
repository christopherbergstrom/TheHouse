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
    $("#locationBtn").css("color", "black");
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
    $("#inventoryBtn").css("color", "black");
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
    $("#messageBtn").css("color", "black");
    $("body").append("<div id='readme'></div>").hide().fadeIn("slow");
    $("#readme").append("<div id='readmeExit' class='fa fa-times'></div>");
    $("#readme").append("<div id='readmeTitle'>Message</div>");
    $("#readme").append("<div id='readmeText'>"+message+"</div>");
    $("#readmeExit").click(function()
    {
      $("#readme").fadeOut(300, function()
      {
        $(this).remove();
        messageCheck();
      });
    });
  });
});
function createDownCenter()
{
  loc="Downstairs Center Room";
  locationColor();
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
      messageColor();
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
  locationColor();
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
      inventoryColor();
    });
  }
  $(".down").click(function()
  {
    messageCheck();
    $("#current").remove();
    createDownCenter();
  });
}
function createDownEast()
{
  locationColor();
  loc="Downstairs East Room";
  container.append("<div id='current'></div>")
  $("#current").append("<button class='left buttons'>Down Center</button>");
  $("#current").append("<button class='center buttons'>Basement</button>");
  $(".left").click(function()
  {
    messageCheck();
    $("#current").remove();
    createDownCenter();
  });
  $(".center").click(function()
  {
    messageCheck();
    if (inventory.indexOf("big key") != -1 && inventory.indexOf("flashlight") != -1 && inventory.indexOf("batteries") != -1)
    {
      $("#current").remove();
      createBasement();
    }
    else if (inventory.indexOf("big key") === -1)
    {
      message="This door is locked, a big key is needed.";
      messageColor();
    }
    else if (inventory.indexOf("flashlight") === -1 && inventory.indexOf("batteries") === -1)
    {
      message="I already unlocked the door, but it is too dark to see down there.";
      messageColor();
    }
    else if (inventory.indexOf("flashlight") != -1 && inventory.indexOf("batteries") === -1)
    {
      message="I already unlocked the door, but I don't have batteries for my flashlight and it is too dark to see down there.";
      messageColor();
    }
    else if (inventory.indexOf("flashlight") === -1 && inventory.indexOf("batteries") != -1)
    {
      message="I already unlocked the door, but I don't have a flashlight for my batteries and it is too dark to see down there.";
      messageColor();
    }
  });
}
function createDownSouth()
{
  locationColor();
  loc="Downstairs South Room";
  container.append("<div id='current'></div>")
  $("#current").append("<button class='up buttons'>Down Center</button>");
  if (inventory.indexOf("hammer") === -1)
  {
    $("#current").append("<button class='obj'>hammer</button")
    $(".obj").click(function()
    {
      messageCheck();
      inventory+="hammer, ";
      $(".obj").remove();
      inventoryColor();
    });
  }
  $(".up").click(function()
  {
    messageCheck();
    $("#current").remove();
    createDownCenter();
  });
}
function createDownWest()
{
  locationColor();
  loc="Downstairs West Room";
  container.append("<div id='current'></div>")
  $("#current").append("<button class='right buttons'>Down Center</button>");
  if (inventory.indexOf("door key") === -1)
  {
    $("#current").append("<button class='obj'>door key</button")
    $(".obj").click(function()
    {
      messageCheck();
      inventory+="door key, ";
      $(".obj").remove();
      inventoryColor();
    });
  }
  $(".right").click(function()
  {
    messageCheck();
    $("#current").remove();
    createDownCenter();
  });
}
function createUpCenter()
{
  loc="Upstairs Center Room";
  locationColor();
  container.append("<div id='current'></div>")
  $("#current").append("<button class='up buttons'>Up North</button>");
  $("#current").append("<button class='right buttons'>Up East</button>");
  $("#current").append("<button class='down buttons'>Up South</button>");
  $("#current").append("<button class='left buttons'>Up West</button>");
  $("#current").append("<button class='center buttons'>Downstairs</button>");
  $(".up").click(function()
  {
    if (inventory.indexOf("door key") != -1)
    {
      $("#current").remove();
      createUpNorth();
    }
    else
    {
      messageColor();
      message="This door is locked, a door key is needed.";
    }
  });
  $(".right").click(function()
  {
    messageCheck();
    $("#current").remove();
    createUpEast();
  });
  $(".down").click(function()
  {
    messageCheck();
    $("#current").remove();
    createUpSouth();
  });
  $(".left").click(function()
  {
    if (inventory.indexOf("hammer") != -1)
    {
      $("#current").remove();
      createUpWest();
    }
    else
    {
      messageColor();
      message="TThis door is locked from the inside, something is needed to smash off the door handle.";
    }
  });
  $(".center").click(function()
  {
    messageCheck();
    $("#current").remove();
    createDownCenter();
  });
}
function createUpNorth()
{
  locationColor();
  loc="Upstairs North Room";
  container.append("<div id='current'></div>")
  $("#current").append("<button class='down buttons'>Up Center</button>");
  if (inventory.indexOf("gloves") === -1)
  {
    $("#current").append("<button class='obj'>gloves</button")
    $(".obj").click(function()
    {
      messageCheck();
      inventory+="gloves, ";
      $(".obj").remove();
      inventoryColor();
    });
  }
  $(".down").click(function()
  {
    messageCheck();
    $("#current").remove();
    createUpCenter();
  });
}
function createUpSouth()
{
  locationColor();
  loc="Upstairs East Room";
  container.append("<div id='current'></div>")
  $("#current").append("<button class='left buttons'>Up Center</button>");
  if (inventory.indexOf("batteries") === -1)
  {
    $("#current").append("<button class='obj'>batteries</button")
    $(".obj").click(function()
    {
      messageCheck();
      inventory+="batteries, ";
      $(".obj").remove();
      inventoryColor();
    });
  }
  $(".left").click(function()
  {
    messageCheck();
    $("#current").remove();
    createUpCenter();
  });
}
Upstairs Center Room
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
