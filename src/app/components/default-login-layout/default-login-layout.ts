import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-default-login-layout",
  imports: [],
  templateUrl: "./default-login-layout.html",
  styleUrl: "./default-login-layout.scss",
})
export class DefaultLoginLayout {
  @Input() title = "Bem-vindo!";
  @Input() primaryBtnText = "Entrar";
  @Input() secondaryBtnText = "Criar conta";
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
  navigate() {
    this.onNavigate.emit();
  }
}
