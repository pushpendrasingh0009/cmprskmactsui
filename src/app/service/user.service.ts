import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { USER_TOKEN, API_URL, GET_LOCATION_URL } from '../app.constants';
import { Location } from '../model/location.response.model';
import { Observable } from 'rxjs';
import { SimplePartyFuse } from '../pre-conflict-chk/pre-conflict-chk.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
  username: string;
  role: string;
  tokenExpirationDate: Date;
  partyData: SimplePartyFuse[];

  constructor(private http: HttpClient, private router: Router) { }

  userAuthentication(username, password) {
    let data = { 'username': username, 'password': password };
    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json', 'No-Auth': 'True' });
    return this.http.post(environment.API_url, data, { headers: reqHeader });
  }

  isUserLoggedIn() {
    let user = localStorage.getItem(USER_TOKEN);
    return !(user === null);
  }

  logout() {
    localStorage.removeItem(USER_TOKEN);
    this.router.navigate(['/login']);
  }

  getClientIpDetails(): Observable<Location> {
    let reqHeader = new HttpHeaders({ 'Accept': 'application/json', 'No-Auth': 'True' });
    return this.http.get<Location>(GET_LOCATION_URL, { headers: reqHeader });
  }

  getPartyData() {
    this.partyData = [{
      name: 'RIO TINTO',
      data: {
        Isin: '562jsi2',
        SEDOL: 'teyyww',
        CUSIP: 'N/A',
        Ticker: 'YES',
        type: 'N/A'
      }
    },
    {
      name: 'TINPLATE INC',
      data: {
        Isin: '561234',
        SEDOL: 'YTER',
        CUSIP: 'TER',
        Ticker: 'NO',
        type: 'N/A'
      }
    },
    {
      name: 'TINSOFT LTD',
      data: {
        Isin: '561245',
        SEDOL: 'YTE1',
        CUSIP: 'T45',
        Ticker: 'YES',
        type: 'MANUAL COMPANY'
      }
    },
    {
      name: 'FOFTNI LTD',
      data: {
        Isin: '36445',
        SEDOL: 'EY1',
        CUSIP: 'S43',
        Ticker: 'NO',
        type: 'N/A'
      }
    },
    {
      name: 'ITERW PVT',
      data: {
        Isin: '38912',
        SEDOL: 'N/A',
        CUSIP: '651',
        Ticker: 'N/A',
        type: 'AUTOMATED'
      }
    },
    {
      name: 'SORCERT INT',
      data: {
        Isin: '98315',
        SEDOL: 'YUE',
        CUSIP: 'S193',
        Ticker: 'YES',
        type: 'MANUAL'
      }
    },
    {
      name: 'UTWQ LTD',
      data: {
        Isin: '65123',
        SEDOL: 'GT1',
        CUSIP: '8832',
        Ticker: 'YES',
        type: 'AUTOMATED'
      }
    },
    {
      name: 'ZERT LTD',
      data: {
        Isin: '65123',
        SEDOL: 'GE1',
        CUSIP: '6532',
        Ticker: 'NO',
        type: 'Manual'
      }
    },
    {
      name: 'XTD LTD',
      data: {
        Isin: '65123',
        SEDOL: 'GT1',
        CUSIP: '8832',
        Ticker: 'YES',
        type: 'AUTOMATED'
      }
    },
    {
      name: 'LYR CO',
      data: {
        Isin: '11123',
        SEDOL: 'TT6',
        CUSIP: '7611',
        Ticker: 'N/A',
        type: 'N/A'
      }
    },
    {
      name: 'LMR Co',
      data: {
        Isin: '1223',
        SEDOL: '87E1',
        CUSIP: '0932',
        Ticker: 'NO',
        type: 'MANUAL'
      }
    },
    {
      name: 'UCRT COM',
      data: {
        Isin: '6754',
        SEDOL: '981',
        CUSIP: '9865',
        Ticker: 'NA',
        type: 'N/A'
      }
    },
    {
      name: 'LQW LTD',
      data: {
        Isin: '45123',
        SEDOL: 'GQ1',
        CUSIP: '8542',
        Ticker: 'YES',
        type: 'AUTOMATED'
      }
    }

    ];
    return this.partyData;
  }
}
