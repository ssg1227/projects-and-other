import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FileService {
  private files = ['a.txt', 'b.docx', 'sample.pdf'];

  getMockFiles(): string[] {
    return [...this.files]; // return a copy
  }
  browseFile(): Promise<string> {
    // Simulate a backend call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('/Users/Shantanug/Documents/testdelete.txt');
      }, 300); // Simulate network latency
    });
  }
  deleteMockFile(fileName: string): string {
    const index = this.files.indexOf(fileName);
    if (index !== -1) {
      this.files.splice(index, 1);
      return `Mock deleted: ${fileName}`;
    }
    return `File not found: ${fileName}`;
  }
}