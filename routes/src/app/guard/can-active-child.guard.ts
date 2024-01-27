import { CanActivateChildFn } from '@angular/router';

export const canActiveChildGuard: CanActivateChildFn = (childRoute, state) => {

  console.log(state);

  return true;
};
