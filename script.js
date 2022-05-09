class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    //This shows the name
    sayName(){
        console.log("My name is ${this.name}");
    }
    //This will show all the stats
    showStats(){
        console.log("Name = ${this.name}, health = ${this.health}, speed = ${this.speed}, strength = ${this.strength}");
    }
    //This add 10 health points to the ninja
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Naruto");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

//This is the  Sensei Class

//This class inherits from the ninja class
class Sensei extends Ninja{
    constructor(name, wisdom = 10){
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        super.drinkSake();
        console.log(`Leaves from the vine`)
    }
}
