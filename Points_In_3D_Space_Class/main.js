// this script creates and does stuff to 3D points in space.



class Point{
  constructor(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  static getOrigin(){
    return new Point(0,0,0);
  }  
  
  getDistanceFromOrigin(){
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z); 
  }
  
  getDistanceFromPoint(obj){
    let dx = this.x - obj.x;
    let dy = this.y - obj.y;
    let dz = this.z - obj.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz); 
  }
}

let pA = new Point(4,5,6);

console.log(pA.getDistanceFromOrigin());
console.log(pA.getDistanceFromPoint(new Point(6,6,6)));