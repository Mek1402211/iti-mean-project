import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CatgoriesComponent } from './pages/admin/catgories/catgories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CatgoryproductsComponent } from './pages/website/catgoryproducts/catgoryproducts.component';
import { Products2Component } from './pages/website/products2/products2.component';
import { CheckoutComponent } from './pages/website/checkout/checkout.component';
import { CartComponent } from './pages/admin/cart/cart.component';

export const routes: Routes = [
    { path: "", redirectTo: "shop", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    {
        path: "", component: LandingComponent, children: [
            { path: "shop", component: Products2Component },
            { path: "products/:id", component: CatgoryproductsComponent },
            {path:"checkout",component:CheckoutComponent},
            {path:"viewcart",component:CartComponent}
        ]
    },
    {
        path: "main", component: LayoutComponent,
        children: [
            {
                path: 'products',
                component: ProductsComponent
            },
            { path: 'catgoreys', component: CatgoriesComponent }
        ]
    },
    



];
