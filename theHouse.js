var BtnsContainer;
var container;
var btnsContainer;
var body;
var item;
var escape;
var door;
var walk;
var smash;
var info;
var entered=false;

var loc="Downstairs Center Room";
var inventory="";
var message="";

$(document).ready(function()
{
  body = $("body");
  container = $("#container");
  btnsContainer = $("#btnsContainer");
  item = $("#item")[0];
  // item = document.getElementById("item");
  escape = $("#escape")[0];
  door = $("#door")[0];
  walk = $("#walk")[0];
  smash = $("#smash")[0];
  info = $("#info")[0];
  createDownCenter();
  $("#locationBtn").click(function()
  {
    $("#locationBtn").css("color", "black");
    $("#locationBtn").css("background-color", "white");
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
    $("#inventoryBtn").css("background-color", "white");
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
    messageColorReset();
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
    door.play();
    messageCheck();
    $("#current").remove();
    createDownNorth();
  });
  $(".right").click(function()
  {
    messageCheck();
    if (inventory.indexOf("door key") != -1)
    {
      door.play();
      $("#current").remove();
      createDownEast();
    }
    else
    {
      info.play();
      messageColor();
      message="This door is locked, a door key is needed.";
    }
  });
  $(".down").click(function()
  {
    door.play();
    messageCheck();
    $("#current").remove();
    createDownSouth();
  });
  $(".left").click(function()
  {
    door.play();
    messageCheck();
    $("#current").remove();
    createDownWest();
  });
  $(".center").click(function()
  {
    walk.play();
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
      item.play();
      messageCheck();
      inventory+="saw, ";
      $(".obj").remove();
      inventoryColor();
    });
  }
  $(".down").click(function()
  {
    door.play();
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
    door.play();
    messageCheck();
    $("#current").remove();
    createDownCenter();
  });
  $(".center").click(function()
  {
    messageCheck();
    if (inventory.indexOf("big key") != -1 && inventory.indexOf("flashlight") != -1 && inventory.indexOf("batteries") != -1)
    {
      door.play();
      $("#current").remove();
      createBasement();
    }
    else if (inventory.indexOf("big key") === -1)
    {
      info.play();
      message="This door is locked, a big key is needed.";
      messageColor();
    }
    else if (inventory.indexOf("flashlight") === -1 && inventory.indexOf("batteries") === -1)
    {
      info.play();
      message="I already unlocked the door, but it is too dark to see down there.";
      messageColor();
    }
    else if (inventory.indexOf("flashlight") != -1 && inventory.indexOf("batteries") === -1)
    {
      info.play();
      message="I already unlocked the door, but I don't have batteries for my flashlight and it is too dark to see down there.";
      messageColor();
    }
    else if (inventory.indexOf("flashlight") === -1 && inventory.indexOf("batteries") != -1)
    {
      info.play();
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
      item.play();
      messageCheck();
      inventory+="hammer, ";
      $(".obj").remove();
      inventoryColor();
    });
  }
  $(".up").click(function()
  {
    door.play();
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
      item.play();
      messageCheck();
      inventory+="door key, ";
      $(".obj").remove();
      inventoryColor();
    });
  }
  $(".right").click(function()
  {
    door.play();
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
      door.play();
      $("#current").remove();
      createUpNorth();
    }
    else
    {
      info.play();
      messageColor();
      message="This door is locked, a door key is needed.";
    }
  });
  $(".right").click(function()
  {
    door.play();
    messageCheck();
    $("#current").remove();
    createUpEast();
  });
  $(".down").click(function()
  {
    door.play();
    messageCheck();
    $("#current").remove();
    createUpSouth();
  });
  $(".left").click(function()
  {
    if (inventory.indexOf("hammer") != -1)
    {
      if (entered)
      {
        door.play()
        $("#current").remove();
        createUpWest();
      }
      else
      {
        entered=true;
        smash.play()
        $("#current").remove();
        createUpWest();
      }
    }
    else
    {
      info.play();
      messageColor();
      message="This door is locked from the inside, something is needed to smash off the door handle.";
    }
  });
  $(".center").click(function()
  {
    walk.play();
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
      item.play();
      messageCheck();
      inventory+="gloves, ";
      $(".obj").remove();
      inventoryColor();
    });
  }
  $(".down").click(function()
  {
    door.play();
    messageCheck();
    $("#current").remove();
    createUpCenter();
  });
}
function createUpEast()
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
      item.play();
      messageCheck();
      inventory+="batteries, ";
      $(".obj").remove();
      inventoryColor();
    });
  }
  $(".left").click(function()
  {
    door.play();
    messageCheck();
    $("#current").remove();
    createUpCenter();
  });
}
function createUpSouth()
{
  locationColor();
  loc="Upstairs South Room";
  container.append("<div id='current'></div>")
  $("#current").append("<button class='up buttons'>Up Center</button>");
  if (inventory.indexOf("big key") === -1)
  {
    $("#current").append("<button class='obj'>big key</button")
    $(".obj").click(function()
    {
      item.play();
      messageCheck();
      inventory+="big key, ";
      $(".obj").remove();
      inventoryColor();
    });
  }
  $(".up").click(function()
  {
    door.play();
    messageCheck();
    $("#current").remove();
    createUpCenter();
  });
}
function createUpWest()
{
  locationColor();
  loc="Upstairs West Room";
  container.append("<div id='current'></div>")
  $("#current").append("<button class='right buttons'>Up Center</button>");
  if (inventory.indexOf("flashlight") === -1)
  {
    $("#current").append("<button class='obj'>flashlight</button")
    $(".obj").click(function()
    {
      item.play();
      messageCheck();
      inventory+="flashlight, ";
      $(".obj").remove();
      inventoryColor();
    });
  }
  $(".right").click(function()
  {
    door.play();
    messageCheck();
    $("#current").remove();
    createUpCenter();
  });
}
function createBasement()
{
  locationColor();
  loc="Basement";
  container.append("<div id='current'></div>")
  $("#current").append("<button class='center buttons'>Down East</button>");
  $("#current").append("<button class='right buttons'>Tunnel</button>");
  $(".center").click(function()
  {
    door.play();
    messageCheck();
    $("#current").remove();
    createDownCenter();
  });
  $(".right").click(function()
  {
    if (inventory.indexOf("saw") != -1 && inventory.indexOf("gloves") != -1)
    {
      $("#current").remove();
      message="You escaped!";
      container.append("<div class='escape'>Escape!</div>")
      messageColor();
      escape.play();
    }
    else if (inventory.indexOf("saw") === -1)
    {
      info.play();
      messageColor();
      message="The tunnel is boarded shut, a saw is needed.";
    }
    else if (inventory.indexOf("gloves") === -1)
    {
      info.play();
      messageColor();
      message="The entrance to the tunnel is covered with spider webs and black widows, some gloves are needed.";
    }
  });
}
function locationColor()
{
  $("#locationBtn").css("color", "white");
  $("#locationBtn").css("background-color", "blue");
}
function inventoryColor()
{
  $("#inventoryBtn").css("color", "white");
  $("#inventoryBtn").css("background-color", "red");
}
function messageColor()
{
  $("#messageBtn").css("color", "white");
  $("#messageBtn").css("background-color", "green");
}
function messageColorReset()
{
  $("#messageBtn").css("color", "black");
  $("#messageBtn").css("background-color", "white");
}
function messageCheck()
{
  if (message)
  {
    message="";
    messageColorReset();
  }
}
