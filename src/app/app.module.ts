import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AddRoleComponent } from './admin_/add-role/add-role.component';
import { AdminHeaderComponent } from './admin_/admin-header/admin-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListRoleComponent } from './admin_/list-role/list-role.component';
import { EditRoleComponent } from './admin_/edit-role/edit-role.component';
import { AddUserComponent } from './admin_add-user.component';
import { ListUserComponent } from './admin_/list-user/list-user.component';
import { AdminDashboardComponent } from './admin_/admin-dashboard/admin-dashboard.component';
import { AddProjectComponent } from './admin_/add-project/add-project.component';
import { ListProjectComponent } from './admin_/list-project/list-project.component';
import { EditProjectComponent } from './admin_/edit-project/edit-project.component';
import { AdminSlidebarComponent } from './admin_/admin-slidebar/admin-slidebar.component';
import { AdminComponent } from './admin_/admin/admin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { LogoutComponent } from './logout/logout.component';
import { AddModuleComponent } from './admin_/add-module/add-module.component';
import { ListModuleComponent } from './admin_/list-module/list-module.component';
import { EditModuleComponent } from './admin_/edit-module/edit-module.component';
import { AddTaskComponent } from './admin_/add-task/add-task.component';
import { ListTaskComponent } from './admin_/list-task/list-task.component';
import { EditTaskComponent } from './admin_/edit-task/edit-task.component';
import { ProjectManagerDashboardComponent } from './projectManager/project-manager-dashboard/project-manager-dashboard.component';
import { ProjectManagerComponent } from './projectManager/project-manager/project-manager.component';
import { ProjectManagerHeaderComponent } from './projectManager/project-manager-header/project-manager-header.component';
import { ProjectManagerSlidebarComponent } from './projectManager/project-manager-slidebar/project-manager-slidebar.component';
import { PendingApprovalComponent } from './admin/pending-approval/pending-approval.component';
import { AddUsersComponent } from './projectManager/add-users/add-users.component';
import { ListUsersComponent } from './projectManager/list-users/list-users.component';
import { ListProjectsComponent } from './projectManager/list-projects/list-projects.component';
import { PendingProjectsComponent } from './projectManager/pending-projects/pending-projects.component';
import { CompletedProjectsComponent } from './projectManager/completed-projects/completed-projects.component';
import { ListModulesComponent } from './projectManager/list-modules/list-modules.component';
import { EditModulesComponent } from './projectManager/edit-modules/edit-modules.component';
import { AddModulesComponent } from './projectManager/add-modules/add-modules.component';
import { ListProjectTeamComponent } from './admin_/list-project-team/list-project-team.component';
import { PendingProjectComponent } from './admin_/pending-project/pending-project.component';
import { CompletedProjectComponent } from './admin_/completed-project/completed-project.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './admin_/forgot-password/forgot-password.component';
import { AddProjectTeamComponent } from './admin_/add-project-team/add-project-team.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddRoleComponent,
    AdminHeaderComponent,
    ListRoleComponent,
    EditRoleComponent,
    AddUserComponent,
    ListUserComponent,
    AdminDashboardComponent,
    AddProjectComponent,
    ListProjectComponent,
    EditProjectComponent,
    AdminSlidebarComponent,
    AdminComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    LogoutComponent,
    AddModuleComponent,
    ListModuleComponent,
    EditModuleComponent,
    AddTaskComponent,
    ListTaskComponent,
    EditTaskComponent,
    ProjectManagerDashboardComponent,
    ProjectManagerComponent,
    ProjectManagerHeaderComponent,
    ProjectManagerSlidebarComponent,
    PendingApprovalComponent,
    AddUsersComponent,
    ListUsersComponent,
    ListProjectsComponent,
    PendingProjectsComponent,
    CompletedProjectsComponent,
    ListModulesComponent,
    EditModulesComponent,
    AddModulesComponent,
    ListProjectTeamComponent,
    PendingProjectComponent,
    CompletedProjectComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    AddProjectTeamComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }