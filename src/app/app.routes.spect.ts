import { Component } from '@angular/core';
import { routes } from './app.routes';
import { UsersComponent } from 'app/users/users.component';

describe('routes', () => {
    it('should contain a route for /users', () => {
       expect(routes).toContain({path: 'users', Component: UsersComponent});
    });
})