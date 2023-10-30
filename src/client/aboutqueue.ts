
export {Aboutqueue}

class Aboutqueue{
    queue: (number | undefined)[] = [];
    constructor(){}
    clear(){
        this.queue = [];
    }
    unshift(num: number){
        this.queue.unshift(num);
    }
    popped(){
        return this.queue.pop();
    }
    getqueue(){
        return this.queue;
    }
}