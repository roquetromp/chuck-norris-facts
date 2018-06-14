import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { UserAuthenticationService } from "../user/user-authentication.service";
import { Injectable } from "@angular/core";

@Injectable()
export class FavoritesListActivator implements CanActivate{
    constructor(private userAuthentication:UserAuthenticationService, private router:Router){}
    canActivate(route:ActivatedRouteSnapshot):boolean{
        if(!this.userAuthentication.userIsLoggedIn()){
            this.router.navigate(['/login']);
        }

        return this.userAuthentication.userIsLoggedIn();

    }
}
