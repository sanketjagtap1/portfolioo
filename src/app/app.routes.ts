import { Routes } from '@angular/router';
import { HomeComponent } from './fetures/home/home.component';
import { ProjectDetailsComponent } from './fetures/projects/project-details/project-details.component';
import { AllProjectsComponent } from './fetures/projects/all-projects/all-projects.component';
import { ContactComponent } from './fetures/contact/contact.component';
import { AboutComponent } from './fetures/about/about.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projectDetails/:id', component: ProjectDetailsComponent },
    { path: 'allProjects', component: AllProjectsComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
