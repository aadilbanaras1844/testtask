import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userPipe'
})
export class UserPipe implements PipeTransform {

  transform( user: any): string {
    if (user && user.username)
      return user.username;
    if (user && user.name)
        return user.name;
    else
      return ''
  }

}
