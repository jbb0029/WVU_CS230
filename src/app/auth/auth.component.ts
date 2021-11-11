import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse.model";

@Component({
    selector: 'battlenet-auth',
    templateUrl: 'auth.component.html'
})
export class AuthComponent {
    public buttonClicked!:string;
    private response!:Observable<AuthResponse>;

    constructor(private authService:AuthService){
    }

    public onSubmit(data:NgForm){
        console.log("Button clicked: " + this.buttonClicked)
        console.log(data.value);

        const email = data.value.email;
        const password = data.value.password;

        if (this.buttonClicked == 'Login'){
            this.response = this.authService.login(email, password);
        }

        if (this.buttonClicked == 'SignUp') {
            this.response = this.authService.signup(email, password);
        }
        

        this.authService.signup(email, password).subscribe(
            (data:AuthResponse) => {
                console.log(data);
            },
            error => {
                console.log(error.error)
            }
            
        )
        
        data.resetForm();
    }
}