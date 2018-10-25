var how_is_active= "blue";
function changeToRed()
{
	how_is_active= "red";
	var contato= document.getElementById("contact_a");
	//contato.src= "./img/contato_rosa.png";
}

function changeToOrange()
{
	how_is_active= "orange";
}

function changeToBlue()
{
	how_is_active= "blue";
}

function mouseon(id)
{
	var x= document.getElementById(String(id));
	
	switch (id){

		case "contact_a":
			switch (how_is_active)
			{
				case "red":
					x.src="./img/contato_rosa_mouse_on.png";
					break;
				case "blue":
					x.src="./img/contato_roxo_mouse_on.png";
					break;
				case "orange":
					x.src="./img/contato_laranja_mouse_on.png"
					break;
				default:
					alert("Elemento não encontrado");
					break;
			}
			break;
		case "facebook_a":
			switch (how_is_active)
				{
					case "red":
						x.src="./img/facebook_rosa_mouse_on.png";
						break;
					case "blue":
						x.src="./img/facebook_roxo_mouse_on.png";
						break;
					case "orange":
						x.src="./img/facebook_laranja_mouse_on.png"
						break;
					default:
						alert("Elemento não encontrado");
						break;
				}
			break;

		case "instagram_a":
			switch (how_is_active)
			{
				case "red":
					x.src="./img/instagram_rosa_mouse_on.png";
					break;
				case "blue":
					x.src="./img/instagram_roxo_mouse_on.png";
					break;
				case "orange":
					x.src="./img/instagram_laranja_mouse_on.png"
					break;
				default:
					alert("Elemento não encontrado");
					break;
			}
			break;

		default:
			alert("Quem você mandou?");
			break;

	}
}

function mouseout(id)
{
	var x= document.getElementById(String(id));
	
	switch (id){

		case "contact_a":
			switch (how_is_active)
			{
				case "red":
					x.src="./img/contato_rosa.png";
					break;
				case "blue":
					x.src="./img/contato_roxo.png";
					break;
				case "orange":
					x.src="./img/contato_laranja.png"
					break;
				default:
					alert("Elemento não encontrado");
					break;
			}
			break;
		case "facebook_a":
			switch (how_is_active)
				{
					case "red":
						x.src="./img/facebook_rosa.png";
						break;
					case "blue":
						x.src="./img/facebook_roxo.png";
						break;
					case "orange":
						x.src="./img/facebook_laranja.png"
						break;
					default:
						alert("Elemento não encontrado");
						break;
				}
			break;

		case "instagram_a":
			switch (how_is_active)
			{
				case "red":
					x.src="./img/instagram_rosa.png";
					break;
				case "blue":
					x.src="./img/instagram_roxo.png";
					break;
				case "orange":
					x.src="./img/instagram_laranja.png"
					break;
				default:
					alert("Elemento não encontrado");
					break;
			}
			break;

		default:
			alert("Quem você mandou?");
			break;

	}
}


