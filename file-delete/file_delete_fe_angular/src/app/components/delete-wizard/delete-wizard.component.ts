import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FileService } from '../../services/file.service';
import { HttpClient } from '@angular/common/http';

interface DisposalMethod {
  name: string;
  image: string;
}
@Component({
  selector: 'app-delete-wizard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './delete-wizard.component.html',
  styleUrl: './delete-wizard.component.css'
})
export class DeleteWizardComponent {
  loading: boolean = false;
  disposalMethods: DisposalMethod[] = [];

  constructor(private fileService:FileService, private http: HttpClient) {}
  step = 0;
  selectedFile = '/Users/Shantanug/Documents/testdelete.txt';
  disposalMethod: string = '';

  next() {
    if (this.step === 1) {
     this.loadDisposalMethods();
    }
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

  loadDisposalMethods() {
    this.disposalMethods = this.fileService.getDisposalMethods();
    }
      isSanataniOpen = false;
      isOtherOpen = false;

      toggleSanatani() {
        this.isSanataniOpen = !this.isSanataniOpen;
        if (this.isSanataniOpen) {
          this.isOtherOpen = false;  // optional: close other when this opens
        }
      }

      toggleOther() {
        this.isOtherOpen = !this.isOtherOpen;
        if (this.isOtherOpen) {
          this.isSanataniOpen = false; // optional: close other when this opens
        }
      }

}