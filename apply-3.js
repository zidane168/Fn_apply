// inherit

function Game(name, type) {
    this.name = name;
    this.type = type;
}

function ConquerorBlade(name, type) {

    //Game.apply(this, arguments)
    Game.apply(this, [name, type])
    this.require = function() {
        console.log('This is required play on Window, RAM 8MB, Card 4MB+');
    }
}

const cb = new ConquerorBlade('Conqueror\'s Blade', 'Massive Total War');
console.log(cb);