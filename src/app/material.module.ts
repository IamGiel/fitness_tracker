import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';




@NgModule({
  imports: [MatButtonModule, MatIconModule, MatInputModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule],
  exports: [MatButtonModule, MatIconModule, MatInputModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule]
})
export class MaterialModule {}
