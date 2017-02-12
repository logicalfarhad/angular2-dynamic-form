import { Component, OnInit } from '@angular/core'
import { CustomerModel, RegionModel } from './customer.model';
import { CustomerService } from './customer.service';
import { UsersService } from './users.service';
import { User } from './user';
import 'rxjs/Rx';

import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from "@angular/forms";
@Component({
  selector: 'my-app',
  templateUrl: `./app/table.html`,
})
export class AppComponent implements OnInit {
  customerList: CustomerModel[];
  userFormGroup: FormGroup;
  userControls: any;
  userList: User[];
  arr: FormArray;
  constructor(private userServie: UsersService, private customerService: CustomerService, private fb: FormBuilder) {
    this.userFormGroup = this.fb.group({
      userList: this.fb.array([])
    });
    this.arr = <FormArray>this.userFormGroup.controls["userList"];
    this.userServie.getUsers().subscribe((users: User[]) => {
      this.userList = users;
      this.buildForm();
    })
  }
  ngOnInit() { }
  private buildForm(): void {
    this.userList.forEach((user: User) => {
      this.arr.push(this.addUser(user));
    });
  }
  private addUser(user: User): FormGroup {
    return this.fb.group({
      name: user.name,
      username: user.username,
      email: user.email
    });
  }
  private add() {
    this.arr.push(this.addUser(new User()));
  }
}