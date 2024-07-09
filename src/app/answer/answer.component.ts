import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Question } from '../service/question';
import { QuestionService } from '../service/question.service';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  selectedFiles!: FileList;
  filetoupload!: File;
  userid = localStorage.getItem("userId")!;
  id:number = parseInt(this.userid);
  constructor(
    public dialogRef: MatDialogRef<AnswerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Question,
    private service: QuestionService,
    private bar: MatSnackBar
  ) {}

  ngOnInit(): void {
  }

  sendAnswer(): void {
    this.service.update(this.data).then((res) => {
      if (res === 'ok') {
        this.dialogRef.close();
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
    this.service.uploadFileForAnswer( this.filetoupload,this.id).subscribe(
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
