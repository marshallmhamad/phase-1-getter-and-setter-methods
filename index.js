// Add your Circle class here
class Circle{
    constructor(radius){
this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return Math.PI * this.diameter
    }
    get area (){
       return Math.PI * (this.radius*this.radius)
    }

    set diameter(newdiameter){
            this.radius = newdiameter/2
    }

    set circumference(newcircumference){
      this.radius =  newcircumference/(Math.PI*2)

    }

    set area(newarea){
        this.radius =  Math.sqrt(newarea/Math.PI)
    }
}