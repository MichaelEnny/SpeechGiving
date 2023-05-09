import { Component, OnInit } from '@angular/core';
import { Talk } from '../talk';
import { ActivatedRoute, Router } from '@angular/router';
import { TalkService } from '../talk.service';

@Component({
  selector: 'app-update-talk',
  templateUrl: './update-talk.component.html',
  styleUrls: ['./update-talk.component.css']
})
export class UpdateTalkComponent implements OnInit {

  id!: number;
  talk: Talk = new Talk();
  constructor(private talkService: TalkService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.talkService.getTalkById(this.id).subscribe( data =>{
      this.talk = data;
    }, error => console.log(error));
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
    this.talkService.updateTalk(this.id, this.talk).subscribe( data =>{
      this.goTotalkList();
    }, error => console.log(error) );
  }
}
