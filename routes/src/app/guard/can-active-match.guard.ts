import { CanActivateFn } from '@angular/router';

export const canActiveMatchGuard: CanActivateFn = (route, state) => {

  console.log('Someone got into the route!');

  return true;
};
