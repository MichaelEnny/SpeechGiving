import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Talk } from '../talk';
import { TalkService } from '../talk.service';

@Component({
  selector: 'app-talk-details',
  templateUrl: './talk-details.component.html',
  styleUrls: ['./talk-details.component.css']
})
export class TalkDetailsComponent implements OnInit {

  id!: number;
  talk!: Talk;
  constructor(private route: ActivatedRoute, private talkService: TalkService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.talk = new Talk();
    this.talkService.getTalkById(this.id).subscribe(data => {
      this.talk = data;
    });
  }
}
