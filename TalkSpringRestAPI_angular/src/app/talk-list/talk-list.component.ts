import { Component, OnInit } from '@angular/core';
import { Talk } from '../talk';
import { TalkService } from '../talk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talk-list',
  templateUrl: './talk-list.component.html',
  styleUrls: ['./talk-list.component.css']
})
export class TalkListComponent implements OnInit {

  talks: Talk[]=[];

  constructor(private talkService: TalkService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTalks();
  }

  private getTalks(){
    this.talkService.getTalksList().subscribe(data => {
      this.talks = data;
    });
  }

  talkDetails(id: number){
    this.router.navigate(['/talk-details', id]);
  }

  updateTalk(id: number){
    this.router.navigate(['/update-talk', id]);
  }

  deleteTalk(id: number){
    this.talkService.deleteTalk(id).subscribe(data => {
      console.log(data);
      this.getTalks();
  })
}

}
