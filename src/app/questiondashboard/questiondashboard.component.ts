import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnswerComponent } from '../answer/answer.component';
import { QuestionService } from '../service/question.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-questiondashboard',
  templateUrl: './questiondashboard.component.html',
  styleUrls: ['./questiondashboard.component.css']
})
export class QuestiondashboardComponent implements OnInit {

  data: any = [];
  topic: string = '';
  questionTopics: any = [];

  constructor(
    private service: UserService,
    private questionService: QuestionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getData();
    this.dialog.afterAllClosed.subscribe(() => {
      this.getData();
    });
  }

  getData(): void {
    this.questionService
      .getUniqueQuestions()
      .then((res) => (this.questionTopics = res));
    this.service.getApprovedQuestions().then((res) => (this.data = res));
  }

  answer(item: any): void {
    this.dialog.open(AnswerComponent, {
      width: '40vw',
      height: '50vh',
      data: item,
    });
  }

  changeData(): void {
    this.questionService
      .getQuestionsByTopic(this.topic)
      .then((res) => (this.data = res));
  }

}
