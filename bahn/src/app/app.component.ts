import { Component } from '@angular/core';
import { query, resolved } from '../gqty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bahn';

  constructor() {

    resolved(() => {
      // return query.search({searchTerm: "Karlsruhe"})!.stations;
      return query.stationWithEvaId({evaId: 8000105})!.name;
    })
      .then((data) => {
        console.log("data: ", data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });

    // const possibleData = inlineResolved(() => {
    //   return query.helloWorld!;
    // });
    //
    // if (possibleData instanceof Promise) {
    //   // data == Promise<string>
    //
    //   // Waiting for data from API
    //   const data = await possibleData;
    //
    //   // data == string
    // } else {
    //   // possibleData == string
    // }
  }

}