import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css']
})
export class AskquestionComponent implements OnInit {

  constructor(private questionService:QuestionService,  private bar: MatSnackBar) { }

  question: string = '';
  topic: string = '';
  selectedFiles!: FileList;
  filetoupload!: File;
  userid = localStorage.getItem("userId")!;
  id:number = parseInt(this.userid);



  ngOnInit(): void {
  }

  saveQuestion(): void {
    this.questionService.saveQuestion({question: this.question,email: localStorage.getItem('email'),name: localStorage.getItem('name'),topic: this.topic,})
      .then((res) => {
        console.log(res);
        if (res === 'ok') {
          this.bar.open('Succesfully Posted Question', 'Close', {
            duration: 3000,
          });
          this.question = '';
          this.topic = '';
        }
      });
  }

  selectFile(event:any)
  {
  
     this.selectedFiles=event.target.files;
  }

  uploadFile(){

    const filedet:File | null=this.selectedFiles.item(0);
    this.filetoupload=filedet!;
    this.questionService.uploadFile( this.filetoupload,this.id).subscribe(
      (response)=>{
        console.log(response.json);

        if(response != null){
          
        this.bar.open('File Uploded Successfully', 'Close', {
          duration: 3000,
        });

        }

        else{
          this.bar.open('Unable to Upload', 'Close', {
            duration: 3000,
          });
        }
       

      })
    
  }

}
