import classes from "./AvailableMeals.module.css";
import DUMMY_MEALS from "./dummy-meals";

const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
