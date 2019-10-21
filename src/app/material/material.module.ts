import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatBadgeModule,
   MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule, MatMenuModule,
   MatListModule, MatGridListModule, MatCardModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
// import { MatBadgeModule } from '@angular/material/badge';

const material = [
   LayoutModule,
   MatButtonModule,
   MatButtonToggleModule,
   MatIconModule,
   MatBadgeModule,
   MatProgressSpinnerModule,
   MatToolbarModule,
   MatSidenavModule,
   MatMenuModule,
   MatListModule,
   MatGridListModule,
   MatCardModule
];

@NgModule({
   imports: [material],
   exports: [material]
})
export class MaterialModule { }
