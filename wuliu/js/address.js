//把元素数据放到界面上
// date.forEach( v =>{
// 	let content =  `<div class="kuai">
// 						<a herf=tel:${v.phone?v.phone[0]:'114'}></a>
//     					<img src="img/定位.png" alt="" class="dw">
//     					<h3 class="shang">${v.name}</h3>
//     					<div class="dianhua">
//                         <img src="img/电话.png" alt="">               
//                         </div>
//     					<h3 class="xia">${v.address}</h3>
//     				</div>`;
//     magic('div', 'kuai', content, '.di');
// })
// let c = prompt()
// let arr = date.filter( k =>{
// 	return ()
// })













document.querySelector('.search').oninput = function(e){
	create(search(e.target.value));
}
//搜索
let search = function(k){
	return date.filter( v =>{
		let total = v.name + v.city + v.county + v.adderss + (
			v.phone&& v.phone.join());
		return total.indexOf(k) !=-1;
	})
}
// let g = prompt();
// console.log(search(g));
//创建
let create = arr =>{
	document.querySelector('.neirong').innerHTML ='';
	arr.forEach( v =>{
		if(v.county){
		let content =  `<div class="kuai">
						<a herf=tel:${v.phone?v.phone[0]:'114'}></a>
    					<img src="img/定位.png" alt="" class="dw">
    					<h3 class="shang">${v.name}</h3>
    					<div class="dianhua">
                        <img src="img/电话.png" alt="">               
                        </div>
    					<h3 class="xia">${v.address}</h3>
    				</div>`;
    magic('div', '.box', content, '.neirong');
}})
}
create(date);