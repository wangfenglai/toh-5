import { Component ,OnInit, Input,Output } from '@angular/core';
import { Person} from "./person";
import{ LoggerService } from "./logger.service";
@Component({
    selector:'lailai',
    templateUrl:'./lailai.component.html'
})
export class LaiLaiComponent implements OnInit{
    private greeting :string;
    private sel:boolean;

    constructor(private logger :LoggerService){}
    ngOnInit(){
        this.greeting="FENG WANG !";
        this.logger.debug("用户初始化数据");
        this.logger.sss("王凤来")
    }
    dd =false;
    showData(){
        this.dd=true;
    }
    hideData(){
        this.dd=false;
    }

powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

model = new Person(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }

newHero() {
  this.model = new Person(42, '', '');
}
}
