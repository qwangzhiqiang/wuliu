//把原始数据做个变形,为了给页面提供合适的数据
let f = arr =>{
	let o = {}
	arr.forEach(v =>{
		let key = v.city;
		let value = v.county;
		if(!o[key]){
			o[key] = []
		}
		if(!o[key][value]){
			o[key].push(value)
			o[key][value] =" ";
		}
	})
	return o;
}
//调用这个函数，对数据做变形 得到合适的数据
let t = f(date);
//遍历得到的合适的数据，创建元素放到页面上
for (let city in t){
	magic('dt', 'dt', city, '.box');
	t[city].forEach(county=>{
		magic('dd', 'dd', county, '.box')
	})
}

