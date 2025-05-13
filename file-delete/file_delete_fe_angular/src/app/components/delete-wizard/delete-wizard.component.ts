import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FileService } from '../../services/file.service';
@Component({
  selector: 'app-delete-wizard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './delete-wizard.component.html',
  styleUrl: './delete-wizard.component.css'
})
export class DeleteWizardComponent {
  loading: boolean = false;

  constructor(private fileService:FileService) {}
  step = 1;
  selectedFile = '/Users/Shantanug/Documents/testdelete.txt';
  disposalMethod: string = '';

  next() {
    if (this.step < 3) this.step++;
  }

  prev() {
    if (this.step > 1) this.step--;
  }

  goToLanding() {
    window.location.href = '/'; // or use router.navigate if routing injected
  }

  setDisposal(method: string) {
    this.disposalMethod = method;
  }
  browseFile() {
    this.loading = true;
    this.selectedFile = '';

    this.fileService.browseFile()
      .then((filePath) => {
        this.selectedFile = filePath;
        this.loading = false;
      })
      .catch((error) => {
        console.error('Failed to browse file:', error);
        this.selectedFile = 'Error fetching file';
        this.loading = false;
      });
  }

}
/*
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
})
export class WizardComponent {
  step = 1;
  selectedFile: string = '';
  disposalMethod: string = '';
  
  constructor(private fileService: FileService) {}

  next() {
    if (this.step < 3) this.step++;
  }

  prev() {
    if (this.step > 1) this.step--;
  }

  goToLanding() {
    window.location.href = '/';
  }

  setDisposal(method: string) {
    this.disposalMethod = method;
  }

  
}

*/