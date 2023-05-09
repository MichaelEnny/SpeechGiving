import { Component, OnInit } from '@angular/core';
import { Talk } from '../talk';
import { TalkService } from '../talk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-talk',
  templateUrl: './create-talk.component.html',
  styleUrls: ['./create-talk.component.css']
})
export class CreateTalkComponent implements OnInit {

  talk: Talk = new Talk();
  constructor(private talkService: TalkService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveTalk(){
    this.talkService.createTalk(this.talk).subscribe( data=>{
      console.log(data);
      this.goTotalkList();
    },
    error => console.log(error) );
  }

  goTotalkList(){
    this.router.navigate(['/talks']);
  }

  onSubmit(){
    console.log(this.talk);
    this.saveTalk();
  }

}
