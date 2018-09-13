import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-enter-username',
  templateUrl: './enter-username.component.html',
  styleUrls: ['./enter-username.component.css']
})
export class EnterUsernameComponent implements OnInit {

  private chatUsernameFormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.chatUsernameFormGroup = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  private onSubmitChatUsername(): void {
    if (this.chatUsernameFormGroup.controls.username.errors) {
      return;
    }
    const username = this.chatUsernameFormGroup.controls.username.value;
    console.log(`entered username ${username}`);
    this.userService.connect(username);
  }
}
