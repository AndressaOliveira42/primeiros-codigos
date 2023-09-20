/*function dump_props(obj_name){
    var result = "";
    for (var i in obj){
        result+= obj_name +"." + i "="+obj[i]+<
    }
}*/

var notas =[7,8,6,4,2,9];

for(let i=0;i<6;i++){
    document.write(notas[i] + ",");
}
for (let j=5;j>=0;j--){
    document.write(notas[j]+",");
}
document.write("<hr>");
for (let k=0;k<6;k++){
    document.write(notas[5-k]+",");
}
for (let l in notas){
    document.write(notas+",");
}
for (let l in notas){
    document.write(l+",");
}
document.write ("<hr>");
for (let m of notas){
 document.write(m+",");
}
notas.forEach()
