import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntityService } from './../../core/data/entity.service';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from './../../model/person.model';
import { Planet } from './../../model/planet.model';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  let peopleService: EntityService<Person>;
  let planetsService: EntityService<Planet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide:MatDialogRef , useValue:{} }
      ]
    })
    .compileComponents();

    peopleService = TestBed.inject(EntityService);
    planetsService = TestBed.inject(EntityService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Contains the mocked people array.
   */
  const mockedPeople: Person[] = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ],
      species: [],
      vehicles: [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/"
      ],
      starships: [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/"
      ],
      created: new Date("2014-12-09T13:50:51.644000Z"),
      edited: new Date("2014-12-20T21:17:56.891000Z"),
      url: "https://swapi.dev/api/people/1/"
    },
    {
      name: "C-3PO",
      height: "167",
      mass: "75",
      hair_color: "n/a",
      skin_color: "gold",
      eye_color: "yellow",
      birth_year: "112BBY",
      gender: "n/a",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      species: [
        "https://swapi.dev/api/species/2/"
      ],
      vehicles: [],
      starships: [],
      created: new Date("2014-12-10T15:10:51.357000Z"),
      edited: new Date("2014-12-20T21:17:50.309000Z"),
      url: "https://swapi.dev/api/people/2/"
    },
    {
      name: "R2-D2",
      height: "96",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, blue",
      eye_color: "red",
      birth_year: "33BBY",
      gender: "n/a",
      homeworld: "https://swapi.dev/api/planets/8/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      species: [
        "https://swapi.dev/api/species/2/"
      ],
      vehicles: [],
      starships: [],
      created: new Date("2014-12-10T15:11:50.376000Z"),
      edited: new Date("2014-12-20T21:17:50.311000Z"),
      url: "https://swapi.dev/api/people/3/"
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      hair_color: "none",
      skin_color: "white",
      eye_color: "yellow",
      birth_year: "41.9BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ],
      species: [],
      vehicles: [],
      starships: [
        "https://swapi.dev/api/starships/13/"
      ],
      created: new Date("2014-12-10T15:18:20.704000Z"),
      edited: new Date("2014-12-20T21:17:50.313000Z"),
      url: "https://swapi.dev/api/people/4/"
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "19BBY",
      gender: "female",
      homeworld: "https://swapi.dev/api/planets/2/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ],
      species: [],
      vehicles: [
        "https://swapi.dev/api/vehicles/30/"
      ],
      starships: [],
      created: new Date("2014-12-10T15:20:09.791000Z"),
      edited: new Date("2014-12-20T21:17:50.315000Z"),
      url: "https://swapi.dev/api/people/5/"
    },
    {
      name: "Owen Lars",
      height: "178",
      mass: "120",
      hair_color: "brown, grey",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "52BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      species: [],
      vehicles: [],
      starships: [],
      created: new Date("2014-12-10T15:52:14.024000Z"),
      edited: new Date("2014-12-20T21:17:50.317000Z"),
      url: "https://swapi.dev/api/people/6/"
    },
    {
      name: "Beru Whitesun lars",
      height: "165",
      mass: "75",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "47BBY",
      gender: "female",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      species: [],
      vehicles: [],
      starships: [],
      created: new Date("2014-12-10T15:53:41.121000Z"),
      edited: new Date("2014-12-20T21:17:50.319000Z"),
      url: "https://swapi.dev/api/people/7/"
    }
  ];

  const mockedPlanets: Planet[] = [
    {
      name: "Tatooine",
      rotation_period: "23",
      orbital_period: "304",
      diameter: "10465",
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: "1",
      population: "200000",
      residents: [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
        "https://swapi.dev/api/people/4/",
        "https://swapi.dev/api/people/6/",
        "https://swapi.dev/api/people/7/",
        "https://swapi.dev/api/people/8/",
        "https://swapi.dev/api/people/9/",
        "https://swapi.dev/api/people/11/",
        "https://swapi.dev/api/people/43/",
        "https://swapi.dev/api/people/62/"
      ],
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      created: new Date("2014-12-09T13:50:49.641000Z"),
      edited: new Date("2014-12-20T20:58:18.411000Z"),
      url: "https://swapi.dev/api/planets/1/"
    },
    {
      name: "Alderaan",
      rotation_period: "24",
      orbital_period: "364",
      diameter: "12500",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grasslands, mountains",
      surface_water: "40",
      population: "2000000000",
      residents: [
        "https://swapi.dev/api/people/5/",
        "https://swapi.dev/api/people/68/",
        "https://swapi.dev/api/people/81/"
      ],
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/6/"
      ],
      created: new Date("2014-12-10T11:35:48.479000Z"),
      edited: new Date("2014-12-20T20:58:18.420000Z"),
      url: "https://swapi.dev/api/planets/2/"
    },
    {
      name: "Yavin IV",
      rotation_period: "24",
      orbital_period: "4818",
      diameter: "10200",
      climate: "temperate, tropical",
      gravity: "1 standard",
      terrain: "jungle, rainforests",
      surface_water: "8",
      population: "1000",
      residents: [],
      films: [
        "https://swapi.dev/api/films/1/"
      ],
      created: new Date("2014-12-10T11:37:19.144000Z"),
      edited: new Date("2014-12-20T20:58:18.421000Z"),
      url: "https://swapi.dev/api/planets/3/"
    },
    {
      name: "Hoth",
      rotation_period: "23",
      orbital_period: "549",
      diameter: "7200",
      climate: "frozen",
      gravity: "1.1 standard",
      terrain: "tundra, ice caves, mountain ranges",
      surface_water: "100",
      population: "unknown",
      residents: [],
      films: [
        "https://swapi.dev/api/films/2/"
      ],
      created: new Date("2014-12-10T11:39:13.934000Z"),
      edited: new Date("2014-12-20T20:58:18.423000Z"),
      url: "https://swapi.dev/api/planets/4/"
    },
    {
      name: "Dagobah",
      rotation_period: "23",
      orbital_period: "341",
      diameter: "8900",
      climate: "murky",
      gravity: "N/A",
      terrain: "swamp, jungles",
      surface_water: "8",
      population: "unknown",
      residents: [],
      films: [
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ],
      created: new Date("2014-12-10T11:42:22.590000Z"),
      edited: new Date("2014-12-20T20:58:18.425000Z"),
      url: "https://swapi.dev/api/planets/5/"
    },
    {
      name: "Bespin",
      rotation_period: "12",
      orbital_period: "5110",
      diameter: "118000",
      climate: "temperate",
      gravity: "1.5 (surface), 1 standard (Cloud City)",
      terrain: "gas giant",
      surface_water: "0",
      population: "6000000",
      residents: [
        "https://swapi.dev/api/people/26/"
      ],
      films: [
        "https://swapi.dev/api/films/2/"
      ],
      created: new Date("2014-12-10T11:43:55.240000Z"),
      edited: new Date("2014-12-20T20:58:18.427000Z"),
      url: "https://swapi.dev/api/planets/6/"
    },
    {
      name: "Endor",
      rotation_period: "18",
      orbital_period: "402",
      diameter: "4900",
      climate: "temperate",
      gravity: "0.85 standard",
      terrain: "forests, mountains, lakes",
      surface_water: "8",
      population: "30000000",
      residents: [
        "https://swapi.dev/api/people/30/"
      ],
      films: [
        "https://swapi.dev/api/films/3/"
      ],
      created: new Date("2014-12-10T11:50:29.349000Z"),
      edited: new Date("2014-12-20T20:58:18.429000Z"),
      url: "https://swapi.dev/api/planets/7/"
    },
    {
      name: "Naboo",
      rotation_period: "26",
      orbital_period: "312",
      diameter: "12120",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grassy hills, swamps, forests, mountains",
      surface_water: "12",
      population: "4500000000",
      residents: [
        "https://swapi.dev/api/people/3/",
        "https://swapi.dev/api/people/21/",
        "https://swapi.dev/api/people/35/",
        "https://swapi.dev/api/people/36/",
        "https://swapi.dev/api/people/37/",
        "https://swapi.dev/api/people/38/",
        "https://swapi.dev/api/people/39/",
        "https://swapi.dev/api/people/42/",
        "https://swapi.dev/api/people/60/",
        "https://swapi.dev/api/people/61/",
        "https://swapi.dev/api/people/66/"
      ],
      films: [
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      created: new Date("2014-12-10T11:52:31.066000Z"),
      edited: new Date("2014-12-20T20:58:18.430000Z"),
      url: "https://swapi.dev/api/planets/8/"
    },
    {
      name: "Coruscant",
      rotation_period: "24",
      orbital_period: "368",
      diameter: "12240",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "cityscape, mountains",
      surface_water: "unknown",
      population: "1000000000000",
      residents: [
        "https://swapi.dev/api/people/34/",
        "https://swapi.dev/api/people/55/",
        "https://swapi.dev/api/people/74/"
      ],
      films: [
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      created: new Date("2014-12-10T11:54:13.921000Z"),
      edited: new Date("2014-12-20T20:58:18.432000Z"),
      url: "https://swapi.dev/api/planets/9/"
    },
    {
      name: "Kamino",
      rotation_period: "27",
      orbital_period: "463",
      diameter: "19720",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "ocean",
      surface_water: "100",
      population: "1000000000",
      residents: [
        "https://swapi.dev/api/people/22/",
        "https://swapi.dev/api/people/72/",
        "https://swapi.dev/api/people/73/"
      ],
      films: [
        "https://swapi.dev/api/films/5/"
      ],
      created: new Date("2014-12-10T12:45:06.577000Z"),
      edited: new Date("2014-12-20T20:58:18.434000Z"),
      url: "https://swapi.dev/api/planets/10/"
    }
  ];

  const selectedPeople: Person[] = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ],
      species: [],
      vehicles: [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/"
      ],
      starships: [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/"
      ],
      created: new Date("2014-12-09T13:50:51.644000Z"),
      edited: new Date("2014-12-20T21:17:56.891000Z"),
      url: "https://swapi.dev/api/people/1/"
    },
    {
      name: "C-3PO",
      height: "167",
      mass: "75",
      hair_color: "n/a",
      skin_color: "gold",
      eye_color: "yellow",
      birth_year: "112BBY",
      gender: "n/a",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      species: [
        "https://swapi.dev/api/species/2/"
      ],
      vehicles: [],
      starships: [],
      created: new Date("2014-12-10T15:10:51.357000Z"),
      edited: new Date("2014-12-20T21:17:50.309000Z"),
      url: "https://swapi.dev/api/people/2/"
    }
  ];

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * This is just to give a first impression about how testing works in angular with jasmine/karma..
   */
  it('should make sure that the volume is calculated well', async () => {
    for (let i = 0; i < mockedPeople.length; i++) {
      const person = mockedPeople[i];
      const planet = mockedPlanets.find(planet => planet.url === person.homeworld);
      expect(planet?.diameter).toBeDefined();
      const radius = Number(planet?.diameter) / 2;
      expect(planet).toBeDefined();
      // @ts-ignore
      expect(await component.getVolume(person.homeworld)).toEqual((4 / 3) * Math.PI * (radius * radius * radius));
    }
  });
});
