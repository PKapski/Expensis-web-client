import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppViewComponent } from './app-view/app-view.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { TokenInterceptor } from './token.interceptor';
import { ExpensesComponent } from './app-view/expenses/expenses.component';
import { MyProfileComponent } from './app-view/my-profile/my-profile.component';
import { StatisticsComponent } from './app-view/statistics/statistics.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DeleteExpenseDialogComponent } from './app-view/expenses/dialogs/delete-expense-dialog/delete-expense-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { AddEditExpenseDialogComponent } from './app-view/expenses/dialogs/add-edit-expense-dialog/add-edit-expense-dialog.component';
import { TwoDigitDecimalNumberDirective } from './two-digit-decimal-number.directive';

import { StatisticsHeaderComponent } from './app-view/statistics/statistics-header/statistics-header.component';
import { StatisticsChartsComponent } from './app-view/statistics/statistics-charts/statistics-charts.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    AppViewComponent,
    LoginComponent,
    ExpensesComponent,
    MyProfileComponent,
    StatisticsComponent,
    StatisticsHeaderComponent,
    StatisticsChartsComponent,
    DeleteExpenseDialogComponent,
    AddEditExpenseDialogComponent,
    TwoDigitDecimalNumberDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatMomentDateModule,
    MatDialogModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCheckboxModule,
    NgxChartsModule,
    MatRadioModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    { provide: MAT_DATE_LOCALE, useValue: 'pl-PL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
