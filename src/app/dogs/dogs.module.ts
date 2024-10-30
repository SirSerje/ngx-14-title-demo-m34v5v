import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DogListComponent } from './dogs-list/dog-list.component';
import { DogComponent } from './dog/dog.component';
import { DogService } from './shared/dog.service';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Tasks:
 * 1. Create a route that directs users to the DogsListComponent.
 * 2. Create a route that, when contains :dogId, directs users to the DogComponent.
 */
const routes: Routes = [
  {
    path: '**',
    redirectTo: '??',
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [DogListComponent, DogComponent],
  providers: [DogService],
})
export class DogsModule {}
