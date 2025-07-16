import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { loginResponse } from "../types/login-response.type";
import { tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private httpCliente: HttpClient) {}

  Login(name: String, password: string) {
    return this.httpCliente
      .post<loginResponse>("/login", { name, password })
      .pipe(
        tap((value) => {
          sessionStorage.setItem("auth-token", value.token);
          sessionStorage.setItem("username", value.name);
        })
      );
  }
}
