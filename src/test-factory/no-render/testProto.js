function SuperType() {
  this.property = true;
}

// if Arrow function undifined
SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function Subtype() {
  this.subproperty = false;
}

// extend SuperType
// SubType通过创建SuperType的实例并将其赋值给自己的原型SubTtype.prototype实现了对SuperType的继承
// 这个赋值重写了SubType最初的原型，将其替换为SuperType的实例。
// 这意味着SuperType实例可以访问的所有属性和方法也会存在于SubType.prototype。
Subtype.prototype = new SuperType();
Subtype.prototype.getSubValue = function () {
  return this.subproperty;
};

console.log(new Subtype().getSuperValue());
console.log(new Subtype().getSubValue());
