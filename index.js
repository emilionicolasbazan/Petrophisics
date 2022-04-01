

const lithology = document.querySelector(".lito");

const GamaRay = document.querySelector(".gr");

const button = document.querySelectorAll('.button');



function addColor(c){
	let Color = c;
	if(Color=="SANDSTONE"){
			lithology.style.backgroundColor="blue";
		} 

		else if(Color=="LIMESTONE"){
			lithology.style.backgroundColor="green";
		}

		else if(Color=="SHALE"){
			lithology.style.backgroundColor="red";
		}

		else if(Color=="DOLOMITE"){
			lithology.style.backgroundColor="black";
		}

		else if(Color=="ANHIDRITE"){
			lithology.style.backgroundColor="purple";
		
		}  else {
			lithology.style.backgroundColor="pink";
		};
}

button.forEach(boton=>{
	boton.addEventListener('click', ()=>{
		addColor(boton.innerHTML);
	});

});


