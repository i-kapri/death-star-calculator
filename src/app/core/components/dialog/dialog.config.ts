/**
 * Represents the format of data being returned by the dialog.
 */
export interface DialogConfig {
   /**
    * Contains the string representant of the joined array of people.
    */
   people: string;
   /**
    * Contains the total volume of the planets of the selected people.
    */
   volume: number;
}