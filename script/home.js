var how_is_active;
function changeToRed()
{
	how_is_active= "red";
	var contato= document.getElementById("contact_a");
	contato.src= "./img/contato_rosa.png";
}

function changeToOrange()
{
	how_is_active= "orange";
}

function changeToBlue()
{
	how_is_active= "blue";
}

function mouseon(x)
{
	if(how_is_active == "red")
	{
		x.src="./img/contato_rosa_mouse_on.png"
	}
	
}

function mouseout(x)
{
	x.src="./img/contato_rosa.png"
}


