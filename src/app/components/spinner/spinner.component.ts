import { Component } from '@angular/core';

@Component({
   selector: 'app-spinner',
   templateUrl: './spinner.component.html',
   styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

   public showSpinner = false;
   public loadDataLabel = 'Load Data';

   public fLoadData() {
      this.showSpinner = true;
      this.loadDataLabel = 'Loading Data...';
      setTimeout(() => {
         this.showSpinner = false;
         this.loadDataLabel = 'Data Loaded!';
      }, 5000);
   }
}
