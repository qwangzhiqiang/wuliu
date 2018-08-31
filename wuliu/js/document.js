// let dl = document.querySelector('.concat');
// for(let city in o){
// 	let countyAray = o[city];
// 	let dt = document.createElement('dt');
// 	dt.classList.add('item');
// 	dt.innerHTML = city;
// 	dl.appendChild(dt);
// }
function magic(tag, className, content, target){
	let x = document.createElement(tag);
	x.classList.add(className);
	x.innerHTML = content;
	let y = document.querySelector(target);
	y.appendChild(x);
	return null;
}
for (let city in o){
	magic('dt', 'dt', city, '.box');
	o[city].forEach(county=>{
		magic('dd', 'dd', county, '.box')
	})
}

