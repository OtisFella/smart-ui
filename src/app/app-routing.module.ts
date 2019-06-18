import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: 'login' },
  { path: 'home', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './layouts/pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './layouts/pages/register/register.module#RegisterPageModule' },
  { path: 'contact-us', loadChildren: './layouts/pages/contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'about-us', loadChildren: './layouts/pages/about-us/about-us.module#AboutUsPageModule' },
  { path: 'account-details', loadChildren: './layouts/pages/account-details/account-details.module#AccountDetailsPageModule' },
  { path: 'retailer-products', loadChildren: './layouts/pages/retailer-products/retailer-products.module#RetailerProductsPageModule' },
  { path: 'make-order', loadChildren: './layouts/pages/make-order/make-order.module#MakeOrderPageModule' },
  { path: 'view-cart', loadChildren: './layouts/pages/view-cart/view-cart.module#ViewCartPageModule' },
  { path: 'forgot-password', loadChildren: './layouts/pages/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'input-otp', loadChildren: './layouts/pages/input-otp/input-otp.module#InputOtpPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
