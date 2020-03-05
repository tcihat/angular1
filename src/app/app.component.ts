import { Component, TemplateRef } from '@angular/core';
import { ClassService } from 'src/core/services/class.service';
import { IClass } from 'src/core/interfaces/class.interface';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  classes: IClass[];
  modalRef: BsModalRef;
  currentParticipant: IClass;

  constructor(
    private classService: ClassService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.classService.getClasses().subscribe(classes => {
      this.classes = classes;
    });
  }

  openModal(template: TemplateRef<any>, participant: IClass) {
    this.currentParticipant = participant;
    this.modalRef = this.modalService.show(template);
  }

  save() {
    this.modalRef.hide();
    const index = this.classes.findIndex(participant => participant.businessId == this.currentParticipant.businessId);
    this.classes[index] = this.currentParticipant;
  }
}
