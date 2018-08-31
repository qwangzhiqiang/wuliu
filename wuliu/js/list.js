let arr = date.map(v =>{
   if(v.city && v.city.indexOf('市') ==-1){
    v.city = v.city.concat('市')
   }
   if(v.county){
    v.county=v.county.replace(/外营业部|营业部|网点|一部|二部|省|省际|际|、长北/g,'')
   }
   if(v.address){v.address = v.address.replace('地址：','')}

    // if(v.phone){
    //   v.phone =String(v.phone);
    //   v.phone = v.phone.replace('电话：','')}
  if(v.phone){
    v.phone = String(v.phone)
   v.phone = v.phone.replace(/\/|，|、|电话：/g,'').trim().replace(/\s+/g,' ').split(' ')
 }
console.log(v);
    return v;
})
