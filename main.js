let shop=document.getElementById('shop');
let shopItemsData=[{
	id:"ata",name:"shirt",desc:"affordable price",
	img:"images/shirt2.jpeg"
},{id:"a",name:"computer",desc:"affordable price",
	img:"images/Computer.jpeg"},{id:"at",name:"SHIRT",desc:"affordable price",
	img:"images/shirt2.jpeg"},{id:"atan",name:"Computer",desc:"affordable price",
	img:"images/Computer.jpeg"}];
	let basket=JSON.parse(localstorage.getItem("data"))||[];

	console.log(shop);
	let generateShop=()=>{let{id,name,price,desc,img}=x;return  (shop.innerHTML=shopItemsData.map((x)=>{
		let search=basket.find((x)=>x.id===id)||[];
		return 
		`<div class="item">
  			<img width="220" src="${img}" alt="ata">
  			<div class="details">
  				<h3>${name}</h3>
  				<p>COMPUTER1 AFFORDABLE</p>
  				<div class="price-quantity">
  					<h2>${price}</h2>
  					<div class="buttons">
  						<i  onclick="decrement (${id})" class="bi bi-dash-lg"></i>
  						<div class=" quantity">0</div>
  						<i  onclick="increment (${id})" class="bi bi-plus-lg"></i>
</div></div>
  			</div></div>
  		
  		<div id=product-id-${id} class="item">	<img width="200" src="images/Computer.jpeg">
  			<div class="details">
  				<h3>computer</h3>
  				<p>COMPUTER1 AFFORDABLE</p>
  				<div class="price-quantity">
  					<h2>Tsh 20000</h2>
  					<div class="buttons">
  						<i onclick="decrement (${id})" class="bi bi-dash-lg"></i>
  						<div class=" quantity">0</div>
  						<i  onclick="increment (${id})"class="bi bi-plus-lg"></i>
</div></div>
</div></div>
  			
  		
  		<div id=product-id-${id}class="item">	<img width="220" src="images/shirt2.jpeg">
  			<div class="details">
  				<h3>Shirt</h3>
  				<p>COMPUTER1 AFFORDABLE</p>
  				<div class="price-quantity">
  					<h2>Tsh 20000</h2>
  					<div class="buttons">
  						<i  onclick="decrement (${id})" class="bi bi-dash-lg"></i>
  						<div class=" quantity">0</div>
  						<i onclick="increment (${id})" class="bi bi-plus-lg"></i>
</div></div></div></div>
<div id=product-id-${id} class="item">
	<img width="220" src="images/Computer.jpeg">
  			<div class="details">
  				<h3>computer</h3>
  				<p>COMPUTER1 AFFORDABLE</p>
  				<div class="price-quantity">
  					<h2>Tsh 20000</h2>
  					<div class="buttons">
  						<i  onclick="decrement (${id})"class="bi bi-dash-lg"></i>
  						<div class=" quantity">0</div>
  						<i  onclick="increment (${id})"class="bi bi-plus-lg"></i>
</div></div>
</div>
  	</div>`;}).join=(""));};
  	let increment=(id)=>{let selectedItems=id;
  		let search=basket.find((x)=>x.id===selectedItems.id);
  		if(search.item===0){
  			
  			return;
  		}
  		else{search.item +=1;}
  		basket.push({id:selectedItems.id,
  			item:1;})
  		localstorage.setItem("data",JSON.stringify(basket));
  		console.log(basket);
  		update(selectedItems.id);

  		console.log("selectedItems.id");};
  	let decrement=(id)=>{let selectedItems=id;
  		let search=basket.find((x)=>x.id===selectedItems.id);
  		if(search===undefined)return;

  		else if(search.item===0){
  			
  			return;
  		}
  		else{search.item -=1;}
  		localstorage.setItem("data",JSON.stringify(basket));
  		basket=basket.filter((x)=>x.item!==0)
  		console.log(basket);
  		update(selectedItems.id);
  		basket.push({id:selectedItems.id,
  			item:1;})
  		console.log("selectedItems.id");};
  	let update=(id)=>{
  		let search=basket.find((x)=>x.id===id)
  		console.log(search.item);
  		document.getElementById(id).innerHTML=search.item;
  	
  	calculation()};
  	let calculation=()=>{
  		let cartIcon=document.getElementById("cartAmount");
  		cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
  		
  	}
  	calculation();

