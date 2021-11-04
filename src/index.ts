// interface
interface Hotel {
  distance: number;
  rate: number;
}

// globs
const hotel_list: Hotel[] = [];

// test data
const time: number = 1680; // in min
const hotel_count: number = 12; // hotels per file

// 1. Zeile die Anzahl der Hotels n,
// 2. Zeile Gesamtfahrzeit t in Minuten
// in den weiteren n Zeilen jeweils für jedes Hotel:
// die Entfernung t_i des Hotels vom Start, sowie
// die Bewertung b_i des Hotels.

/**
 * convert string to array
 * @param text
 */
const convert_to_array = (text: string): string[] => {
  return text.split(/\r?\n/);
};

/**
 *
 * @param {*} distance
 * @param {*} range
 */
const get_hotel_in_range: any = (distance: number, range: number) => {
  const is_in_range: boolean = false;

  // if(get_distance_for_next_day()) {}
};

const store_hotel = (hotel: Hotel): void => {
  // TODO: check if hotel is valid

  hotel_list.push(hotel);
};

/**
  * method to get the full distance for the next day based on the km 
driven the days before (in km)
  *
  * @param distance_from_day_before
  */
const get_distance_of_day = (hotel: string) => {
  const hotel_km = hotel.split("")[0];
  let day_range: number = 0;

  return day_range;
};

const main = (text) => {
  let list: string[] = convert_to_array(text);

  const hotel_count = (list[0] as unknown) as number;
  const full_distance = (list[1] as unknown) as number;
  const hotels = list.slice(2, hotel_count + 1) as string[];

  for (let [_, hotel] of Object.entries(hotels)) {
    const range = get_distance_of_day(hotel);

    // find hotel in the range
    const fonudHotel = get_hotel_in_range(hotel, range);

    store_hotel(fonudHotel);
  }
};

// read file from input and return the hotels as JSON
document.querySelector("#read-button").addEventListener("click", function () {
  let file = (document.querySelector("#file-input") as HTMLInputElement)
    .files[0];
  let reader = new FileReader();

  reader.addEventListener("load", function (e) {
    let text: string | ArrayBuffer = e.target.result;
    main(text);
  });
  reader.readAsText(file);
});
