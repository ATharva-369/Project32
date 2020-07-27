class rope {
	constructor(body1, point2) {
		var options = {
			bodyA: body1,
			pointB: point2,
			stiffness: 0.05,
			length:10

		}
		//console.log(options);
		this.pointB=point2;
		this.rope = Constraint.create(options)
		World.add(world, this.rope)
	}

	display(){
        
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(3);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
                
            }
            else{
                strokeWeight(1);
                line(pointA.x , pointA.y, pointB.x, pointB.y);
			}
           
            
            pop();
        }
	}
	fly(){
		this.rope.bodyA=null
	}
   attach(body){
	   this.rope.bodyA=body;
   }
}
