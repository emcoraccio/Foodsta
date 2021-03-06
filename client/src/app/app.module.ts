import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule, MatFormFieldModule, MatInputModule, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowseComponent } from './components/browse/browse.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AddPostComponent } from './components/add-post/add-post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhotoContainerComponent } from './components/photo-container/photo-container.component';
import { BottomNavModule } from 'ngx-bottom-nav';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { PostService } from './services/posts/post.service';
import { CommonModule } from '@angular/common';
import { SearchService } from './services/searches/search.service';
import { ListComponent } from './components/list/list.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ModalComponent } from './components/modal/modal.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProfileResolver } from './services/profile-resolver/profile-resolver.service';
import { NotFoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    BrowseComponent,
    AddPostComponent,
    PhotoContainerComponent,
    ListComponent,
    RestaurantComponent,
    ModalComponent,
    ToolbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    BottomNavModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    SlimLoadingBarModule,
    CommonModule,
    MatDialogModule,
    LazyLoadImageModule
  ],
  providers: [
    PostService,
    SearchService,
    ProfileResolver,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})

export class AppModule { }
