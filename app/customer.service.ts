import { Injectable } from '@angular/core';
import { CustomerModel, RegionModel } from './customer.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

export const CUSTOMERS: CustomerModel[] = [
  { customerId: 11, name: 'Mr. Nice', currentPeriod: 10, previousPeriod: 81 },
  { customerId: 12, name: 'Narco', currentPeriod: 11, previousPeriod: 82 },
  { customerId: 13, name: 'Bombasto', currentPeriod: 12, previousPeriod: 83 },
  { customerId: 14, name: 'Celeritas', currentPeriod: 13, previousPeriod: 84 },
  { customerId: 15, name: 'Magneta', currentPeriod: 14, previousPeriod: 85 },
  { customerId: 16, name: 'RubberMan', currentPeriod: 15, previousPeriod: 86 },
  { customerId: 17, name: 'Dynama', currentPeriod: 16, previousPeriod: 87 },
  { customerId: 18, name: 'Dr IQ', currentPeriod: 7, previousPeriod: 88 },
  { customerId: 19, name: 'Magma', currentPeriod: 8, previousPeriod: 89 },
  { customerId: 20, name: 'Tornado', currentPeriod: 9, previousPeriod: 90 }
];


@Injectable()
export class CustomerService {
  getCustomerByRegion(): Observable<CustomerModel[]> {
    return Observable.of(CUSTOMERS);
  }
}