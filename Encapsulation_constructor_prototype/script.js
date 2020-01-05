
// 1 

function CountModel() {
  this._count = 0;
  
};

CountModel.prototype.count = function() {
  return this._count;
};

CountModel.prototype.set = function(count) {
  this._count = count;
};

var countModel = new CountModel();
countModel.set(5);
console.log("count is ", countModel.count());








// 2

