var arr=[0,6,7,1,5];
var n=arr.length;
for (var i=0; i<n-1; i++){
  var fleg=0;
    for (var j=0; (j<n-i-1); j++){
        if (arr[j]>arr[j+1]){
          fleg=fleg+1
          var tamp=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=tamp;
        }
    }if (fleg==0){
      break;
    }
}
console.log(arr);
