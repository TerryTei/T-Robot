
export default class loop_queue {
    orginal_queue: any[] = []
    new_queue: any[] = []
    startstack: any[] = []
    constructor(){}
    split(queue: any[]) {
        this.orginal_queue = [...queue]
        for (let i = 0; i < this.orginal_queue.length; i++) {
            let next = queue.pop()
            //console.log(i+" "+next)
            if (next == 3211 || next == 3212 || next == 3213){
                var opposite = this.get_opposite(next)
                this.startstack = []
                while(true){
                    var paragraph = this.new_queue.shift()
                    if (paragraph == opposite)
                        break
                    else
                        this.startstack.unshift(paragraph)
                }
                if(next%10 == 1)
                    this.combine(this.startstack)
                else if(next%10 == 2){
                    this.combine(this.startstack)
                    this.combine(this.startstack)
                }
                else if(next%10 == 3){
                    this.combine(this.startstack)
                    this.combine(this.startstack)
                    this.combine(this.startstack)
                }
            }
            else{
                this.new_queue.unshift(next)
            }
        }
        return this.new_queue
    }
    get_opposite(num: number){
        switch(num){
            case 3211:
                return 1231
            case 3212:
                return 1232
            case 3213:
                return 1233
        }
    }
    combine(item: any[]){
        item.forEach(element => { this.new_queue.unshift(element) });
    }
}