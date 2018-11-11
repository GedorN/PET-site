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

function change_contact_a()
{
	var c= document.getElementById("contact_a");
	switch(how_is_active)
	{
		case "red":
			c.src="./img/contato_rosa.png";
			break;
		case "orange":
			c.src="./img/contato_laranja.png";
			break;

		case "blue":
			c.src="./img/contato_roxo.png";
			break;

		default:
			c.src="./img/contato_roxo.png";
			break;
	}
}
function change_instagram_a()
{
	var c= document.getElementById("instagram_a");
	switch(how_is_active)
	{
		case "red":
			c.src="./img/instagram_rosa.png";
			break;
		case "orange":
			c.src="./img/instagram_laranja.png";
			break;

		case "blue":
			c.src="./img/instagram_roxo.png";
			break;

		default:
			c.src="./img/instagram_roxo.png";
			break;
	}
}
function change_facebook_a()
{
	var c= document.getElementById("facebook_a");
	switch(how_is_active)
	{
		case "red":
			c.src="./img/facebook_rosa.png";
			break;
		case "orange":
			c.src="./img/facebook_laranja.png";
			break;

		case "blue":
			c.src="./img/facebook_roxo.png";
			break;

		default:
			c.src="./img/facebook_roxo.png";
			break;
	}
}
function chage_menu()
{
	var c= document.getElementById("menu_a");
	switch(how_is_active)
	{
		case "red":
			c.src="./img/menu_rosa.png";
			break;
		case "orange":
			c.src="./img/menu_laranja.png";
			break;

		case "blue":
			c.src="./img/menu_roxo.png";
			break;

		default:
			c.src="./img/menu_roxo.png";
			break;
	}
}

function change_text_box()
{
	var c= document.getElementById("text-box");
	switch(how_is_active)
	{
		case "red":
			c.style.backgroundColor= "#e53648";
			break;
		case "orange":
			c.style.backgroundColor= "#f86624";
			break;

		case "blue":
			c.style.backgroundColor= "#662e9b";
			break;

		default:
			c.style.backgroundColor= "#662e9b";
			break;
	}
}
function change_home_photo()
{
	var c= document.getElementById("home_photo");
	switch(how_is_active)
	{
		case "red":
			c.src="./img/img_home_vermelho.png";
			break;
		case "orange":
			c.src="./img/img_home_laranja.png";
			break;

		case "blue":
			c.src="./img/img_home_roxo.png";
			break;

		default:
			c.src="./img/img_home_roxo.png";
			break;
	}
}

function changeColors()
{
	console.log("Function changeColors()");	
	
	change_contact_a();
	change_instagram_a();
	change_facebook_a();
	chage_menu();
	change_home_photo();
	change_text_box();

}

