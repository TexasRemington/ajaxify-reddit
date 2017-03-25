
function One(){
  this.page = [];
  this.data = [];
}

One.prototype.contentCount = function() {
  return this.data.length;
}

// One.prototype.addPage = function(page) {
//   this.pages.push(data);
// }
//
// One.prototype.addId = function(incomingData) {
//   this.data.push(incomingData);
// }

One.prototype.deploy = function() {
  for(var i=0,x=this.data.length;i<x;i++){
    this.data[i];
    console.log(One());
  }
}
