import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.css']
})
export class LandpageComponent implements OnInit{
  private user: User = {
    'name': 'Aziz Mohamed Ktata',
    'username': 'Noice',
    'email': 'Sincere@april.biz',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 556',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Romaguera-Crona',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    },
    
  }

constructor(private userService: UserService, private zone:NgZone, private router:Router){ }

goNextPage(){
  this.router.navigate(["home/table2"]);
}

onGetUsers(): void { // this function is not called
  this.userService.getUsers().subscribe(
    (response) => console.log(response)
  )
}

onCreateUser(user:User): void {
  this.userService.addUser(user).subscribe(
    (response) => console.log(response)
  );
}

onUpdateUser(user:User, id:number): void {
  this.userService.putUser(user, id).subscribe(
    (response) => console.log(response)
  )
}
onDeleteUser(id:number): void {
  this.userService.deleteUser(id).subscribe(
    (response) => console.log(response),
    (error: any) => console.log(error)
  );
}

  ngOnInit(): void {
    // this.onCreateUser(this.user);
    this.onUpdateUser(this.user,8);
    this.onGetUsers(); // now this function is called
    this.onDeleteUser(6);
  }

}
