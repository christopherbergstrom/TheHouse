var BtnsContainer;
var container;

var downCenter;
var downNorth;
var downEast;
var downSouth;
var downWest;
var upCenter;
var upNorth;
var upEast;
var upSouth;
var upWest;
var upStairs;
var downStairs;
var basement;
var tunnel;
var div;
var body;

var locationBtn;
var inventoryBtn;
var messageBtn;

var location;
var inventory;
var message;

var smallKey;
var bigKey;
var doorKey;
var hammer;
var gloves;
var flashlight;
var batteries;
var saw;

window.onload = function()
{
  body = document.querySelector("body");
  container = document.getElementById("container");
  btnsContainer = document.getElementById("btnsContainer");

  // locationBtn = document.createElement("span");
  // locationBtn.setAttribute("id", "locationBtn");
  // locationBtn.setAttribute("class", "topBtns");
  // locationBtn.innerHTML="Location";
  // btnsContainer.appendChild(locationBtn);
  //
  // inventoryBtn = document.createElement("span");
  // inventoryBtn.setAttribute("id", "inventoryBtn");
  // inventoryBtn.setAttribute("class", "topBtns");
  // inventoryBtn.innerHTML="Inventory";
  // btnsContainer.appendChild(inventoryBtn);
  //
  // messageBtn = document.createElement("span");
  // messageBtn.setAttribute("id", "messageBtn");
  // messageBtn.setAttribute("class", "topBtns");
  // messageBtn.innerHTML="Message";
  // btnsContainer.appendChild(messageBtn);

  createDownCenter();
};

function createDownCenter()
{
  div = document.createElement("div");
  container.appendChild(div);
  // span = document.createElement("span");
  // span.setAttribute("class", "location");
  // span.innerHTML="Downstairs Center Room";
  downNorth = document.createElement("button");
  downNorth.setAttribute("class", "up buttons");
  downNorth.innerHTML="Down North";
  downEast = document.createElement("button");
  downEast.setAttribute("class", "right buttons");
  downEast.innerHTML="Down East";
  downSouth = document.createElement("button");
  downSouth.setAttribute("class", "down buttons");
  downSouth.innerHTML="Down South";
  downWest = document.createElement("button");
  downWest.setAttribute("class", "left buttons");
  downWest.innerHTML="Down West";
  upStairs = document.createElement("button");
  upStairs.setAttribute("class", "center buttons");
  upStairs.innerHTML="Up Stairs";
  div.appendChild(downNorth);
  div.appendChild(downEast);
  div.appendChild(downSouth);
  div.appendChild(downWest);
  div.appendChild(upStairs);
  // div.appendChild(span);
  downNorth.addEventListener("click", function()
  {
    messageCheck();
    div.parentNode.removeChild(div);
    createDownNorth();
  });
  downEast.addEventListener("click", function()
  {
    messageCheck();
    if (inventory.innerHTML.indexOf("door key") != -1)
    {
      div.parentNode.removeChild(div);
      createDownEast();
    }
    else
    {
      message.innerHTML="This door is locked, a door key is needed.";
    }
  });
  downSouth.addEventListener("click", function()
  {
    messageCheck();
    div.parentNode.removeChild(div);
    createDownSouth();
  });
  downWest.addEventListener("click", function()
  {
    messageCheck();
    div.parentNode.removeChild(div);
    createDownWest();
  });
  upStairs.addEventListener("click", function()
  {
    messageCheck();
    div.parentNode.removeChild(div);
    createUpCenter();
  });
}
function createDownNorth()
{
  div = document.createElement("div");
  container.appendChild(div);
  // span = document.createElement("span");
  // span.setAttribute("class", "location");
  // span.innerHTML="Downstairs North Room";
  downCenter = document.createElement("button");
  downCenter.setAttribute("class", "down buttons");
  downCenter.innerHTML="Down Center";
  if (inventory.innerHTML.indexOf("saw") === -1)
  {
    saw = document.createElement("button");
    saw.setAttribute("class", "obj");
    saw.innerHTML="saw";
    div.appendChild(saw);
    saw.addEventListener("click", function()
    {
      messageCheck();
      inventory.innerHTML+=saw.innerHTML+", ";
      saw.parentNode.removeChild(saw);
    });
  }
  div.appendChild(downCenter);
  // div.appendChild(span);
  downCenter.addEventListener("click", function()
  {
    div.parentNode.removeChild(div);
    createDownCenter();
  });
}
function createDownEast()
{
  div = document.createElement("div");
  container.appendChild(div);
  // span = document.createElement("span");
  // span.setAttribute("class", "location");
  // span.innerHTML="Downstairs East Room";
  downCenter = document.createElement("button");
  downCenter.setAttribute("class", "left buttons");
  downCenter.innerHTML="Down Center";
  basement = document.createElement("button");
  basement.setAttribute("class", "center buttons");
  basement.innerHTML="Basement";
  div.appendChild(downCenter);
  div.appendChild(basement);
  // div.appendChild(span);
  downCenter.addEventListener("click", function()
  {
    messageCheck();
    div.parentNode.removeChild(div);
    createDownCenter();
  });
  basement.addEventListener("click", function()
  {
    messageCheck();
    if (inventory.innerHTML.indexOf("big key") != -1 && inventory.innerHTML.indexOf("flashlight") != -1 && inventory.innerHTML.indexOf("batteries") != -1)
    {
      div.parentNode.removeChild(div);
      createBasement();
    }
    else if (inventory.innerHTML.indexOf("big key") === -1)
    {
      message.innerHTML="This door is locked, a big key is needed.";
    }
    else if (inventory.innerHTML.indexOf("flashlight") === -1 && inventory.innerHTML.indexOf("batteries") === -1)
    {
      message.innerHTML="I already unlocked the door, but it is too dark to see down there.";
    }
    else if (inventory.innerHTML.indexOf("flashlight") != -1 && inventory.innerHTML.indexOf("batteries") === -1)
    {
      message.innerHTML="I already unlocked the door, but I don't have batteries for my flashlight and it is too dark to see down there.";
    }
    else if (inventory.innerHTML.indexOf("flashlight") === -1 && inventory.innerHTML.indexOf("batteries") != -1)
    {
      message.innerHTML="I already unlocked the door, but I don't have a flashlight for my batteries and it is too dark to see down there.";
    }
  });
}
function createDownSouth()
{
  div = document.createElement("div");
  container.appendChild(div);
  // span = document.createElement("span");
  // span.setAttribute("class", "location");
  // span.innerHTML="Downstairs South Room";
  downCenter = document.createElement("button");
  downCenter.setAttribute("class", "up buttons");
  downCenter.innerHTML="Down Center";
  if (inventory.innerHTML.indexOf("hammer") === -1)
  {
    hammer = document.createElement("button");
    hammer.setAttribute("class", "obj");
    hammer.innerHTML="hammer";
    div.appendChild(hammer);
    hammer.addEventListener("click", function()
    {
      messageCheck();
      inventory.innerHTML+=hammer.innerHTML+", ";
      hammer.parentNode.removeChild(hammer);
    });
  }
  div.appendChild(downCenter);
  // div.appendChild(span);
  downCenter.addEventListener("click", function()
  {
    messageCheck();
    div.parentNode.removeChild(div);
    createDownCenter();
  });
}
function createDownWest()
{
  div = document.createElement("div");
  container.appendChild(div);
  // span = document.createElement("span");
  // span.setAttribute("class", "location");
  // span.innerHTML="Downstairs West Room";
  downCenter = document.createElement("button");
  downCenter.setAttribute("class", "right buttons");
  downCenter.innerHTML="Down Center";
  if (inventory.innerHTML.indexOf("door key") === -1)
  {
    doorKey = document.createElement("button");
    doorKey.setAttribute("class", "obj");
    doorKey.innerHTML="door key";
    div.appendChild(doorKey);
    doorKey.addEventListener("click", function()
    {
      messageCheck();
      inventory.innerHTML+=doorKey.innerHTML+", ";
      doorKey.parentNode.removeChild(doorKey);
    });
  }
  div.appendChild(downCenter);
  // div.appendChild(span);
  downCenter.addEventListener("click", function()
  {
    messageCheck();
    div.parentNode.removeChild(div);
    createDownCenter();
  });
}
function createUpCenter()
{
  div = document.createElement("div");
  container.appendChild(div);
  // span = document.createElement("span");
  // span.setAttribute("class", "location");
  // span.innerHTML="Upstairs Center Room";
  upNorth = document.createElement("button");
  upNorth.setAttribute("class", "up buttons");
  upNorth.innerHTML="Up North";
  upEast = document.createElement("button");
  upEast.setAttribute("class", "right buttons");
  upEast.innerHTML="Up East";
  upSouth = document.createElement("button");
  upSouth.setAttribute("class", "down buttons");
  upSouth.innerHTML="Up South";
  upWest = document.createElement("button");
  upWest.setAttribute("class", "left buttons");
  upWest.innerHTML="Up West";
  downStairs = document.createElement("button");
  downStairs.setAttribute("class", "center buttons");
  downStairs.innerHTML="Down Stairs";
  div.appendChild(upNorth);
  div.appendChild(upEast);
  div.appendChild(upSouth);
  div.appendChild(upWest);
  div.appendChild(downStairs);
  // div.appendChild(span);
  upNorth.addEventListener("click", function()
  {
    if (inventory.innerHTML.indexOf("door key") != -1)
    {
      div.parentNode.removeChild(div);
      createUpNorth();
    }
    else
    {
      message.innerHTML="This door is locked, a door key is needed.";
    }
  });
  upEast.addEventListener("click", function()
  {
    div.parentNode.removeChild(div);
    createUpEast();
  });
  upSouth.addEventListener("click", function()
  {
    div.parentNode.removeChild(div);
    createUpSouth();
  });
  upWest.addEventListener("click", function()
  {
    if (inventory.innerHTML.indexOf("hammer") != -1)
    {
      div.parentNode.removeChild(div);
      createUpWest();
    }
    else
    {
      message.innerHTML="This door is locked from the inside, something is needed to smash off the door handle.";
    }
  });
  downStairs.addEventListener("click", function()
  {
    div.parentNode.removeChild(div);
    createDownCenter();
  });
}
function createUpNorth()
{
  div = document.createElement("div");
  container.appendChild(div);
  // span = document.createElement("span");
  // span.setAttribute("class", "location");
  // span.innerHTML="Upstairs North Room";
  upCenter = document.createElement("button");
  upCenter.setAttribute("class", "down buttons");
  upCenter.innerHTML="Up Center";
  if (inventory.innerHTML.indexOf("gloves") === -1)
  {
    gloves = document.createElement("button");
    gloves.setAttribute("class", "obj");
    gloves.innerHTML="gloves";
    div.appendChild(gloves);
    gloves.addEventListener("click", function()
    {
      messageCheck();
      inventory.innerHTML+=gloves.innerHTML+", ";
      gloves.parentNode.removeChild(gloves);
    });
  }
  div.appendChild(upCenter);
  // div.appendChild(span);
  upCenter.addEventListener("click", function()
  {
    div.parentNode.removeChild(div);
    createUpCenter();
  });
}
function createUpEast()
{
  div = document.createElement("div");
  container.appendChild(div);
  // span = document.createElement("span");
  // span.setAttribute("class", "location");
  // span.innerHTML="Upstairs East Room";
  upCenter = document.createElement("button");
  upCenter.setAttribute("class", "left buttons");
  upCenter.innerHTML="Up Center";
  if (inventory.innerHTML.indexOf("batteries") === -1)
  {
    batteries = document.createElement("button");
    batteries.setAttribute("class", "obj");
    batteries.innerHTML="batteries";
    div.appendChild(batteries);
    batteries.addEventListener("click", function()
    {
      messageCheck();
      inventory.innerHTML+=batteries.innerHTML+", ";
      batteries.parentNode.removeChild(batteries);
    });
  }
  div.appendChild(upCenter);
  // div.appendChild(span);
  upCenter.addEventListener("click", function()
  {
    div.parentNode.removeChild(div);
    createUpCenter();
  });
}
function createUpSouth()
{
  div = document.createElement("div");
  container.appendChild(div);
  // span = document.createElement("span");
  // span.setAttribute("class", "location");
  // span.innerHTML="Upstairs South Room";
  upCenter = document.createElement("button");
  upCenter.setAttribute("class", "up buttons");
  upCenter.innerHTML="Up Center";
  if (inventory.innerHTML.indexOf("big key") === -1)
  {
    bigKey = document.createElement("button");
    bigKey.setAttribute("class", "obj");
    bigKey.innerHTML="big key";
    div.appendChild(bigKey);
    bigKey.addEventListener("click", function()
    {
      messageCheck();
      inventory.innerHTML+=bigKey.innerHTML+", ";
      bigKey.parentNode.removeChild(bigKey);
    });
  }
  div.appendChild(upCenter);
  // div.appendChild(span);
  upCenter.addEventListener("click", function()
  {
    div.parentNode.removeChild(div);
    createUpCenter();
  });
}
function createUpWest()
{
  div = document.createElement("div");
  container.appendChild(div);
  // span = document.createElement("span");
  // span.setAttribute("class", "location");
  // span.innerHTML="Upstairs West Room";
  upCenter = document.createElement("button");
  upCenter.setAttribute("class", "right buttons");
  upCenter.innerHTML="Up Center";
  if (inventory.innerHTML.indexOf("flashlight") === -1)
  {
    flashlight = document.createElement("button");
    flashlight.setAttribute("class", "obj");
    flashlight.innerHTML="flashlight";
    div.appendChild(flashlight);
    flashlight.addEventListener("click", function()
    {
      messageCheck();
      inventory.innerHTML+=flashlight.innerHTML+", ";
      flashlight.parentNode.removeChild(flashlight);
    });
  }
  div.appendChild(upCenter);
  // div.appendChild(span);
  upCenter.addEventListener("click", function()
  {
    div.parentNode.removeChild(div);
    createUpCenter();
  });
}
function createBasement()
{
  div = document.createElement("div");
  container.appendChild(div);
  // span = document.createElement("span");
  // span.setAttribute("class", "location");
  // span.innerHTML="Basement";
  downEast = document.createElement("button");
  downEast.setAttribute("class", "center buttons");
  downEast.innerHTML="Down East";
  tunnel = document.createElement("button");
  tunnel.setAttribute("class", "right buttons");
  tunnel.innerHTML="Tunnel";
  div.appendChild(downEast);
  div.appendChild(tunnel);
  // div.appendChild(span);
  downEast.addEventListener("click", function()
  {
    div.parentNode.removeChild(div);
    createDownEast();
  });
  tunnel.addEventListener("click", function()
  {
    if (inventory.innerHTML.indexOf("saw") != -1 && inventory.innerHTML.indexOf("gloves") != -1)
    {
      div.parentNode.removeChild(div);
      inventory.parentNode.removeChild(inventory);
      var success = document.createElement("span");
      success.setAttribute("class", "center escape");
      success.innerHTML="Escape!";
      container.appendChild(success);
    }
    else if (inventory.innerHTML.indexOf("saw") === -1)
    {
      message.innerHTML="The tunnel is boarded shut, a saw is needed.";
    }
    else if (inventory.innerHTML.indexOf("gloves") === -1)
    {
      message.innerHTML="The entrance to the tunnel is covered with spider webs and black widows, some gloves are needed.";
    }
  });
}
function messageCheck()
{
  if (message.innerHTML)
  {
    message.innerHTML="";
  }
}
