import { Injectable } from '@angular/core';

@Injectable()

export class PapaService{

  loadSize(): string[]{
    return ["Personal", "Small", "Medium", "Large", "Extra Large", "Family Size"];
  }

  loadCrust(): string[]{
    return ["New York (Thin)", "Hand Tossed", "Deep Dish", "Stuffed Crust"];
  }

  loadToppings(): string[]{
    return ["Cheese", "Pepperoni", "Sausage", "Pineapple", "Bacon", "Chicken", "Canadian Bacon", "Bell Pepper", "BBQ Sauce",
      "BBQ Sauce", "Extra Marinara", "Extra Cheese"];
  }
}
