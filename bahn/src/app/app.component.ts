import { Component } from '@angular/core';
import { query, resolved } from '../gqty';
import { FormControl, FormControlName } from '@angular/forms';


export interface TrainStation {
  name: string,
  pictureURL: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = new FormControl('');
  trainStations: TrainStation[] = [];

  // search(searchTerm: "Karlsruhe") {
  //   stations {
  //     name
  //     picture {
  //       url
  //     }
  //   }
  // }

  onSubmit() {
    resolved(() => {
      return query.search({searchTerm: this.name.value})!.stations.map( station => {
          return {
            'name': station.name,
            'pictureURL': station.picture?.url
          } as TrainStation;
        }
      );
    }).then((data) => {
      this.trainStations = data;
    })
      .catch((err) => {
        console.log("error: ", err);
      });
  }
}
