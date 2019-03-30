import React from 'react';
import DrinkCard from './DrinkCard.jsx';

const drinks = [
  ["bijou", "https://raw.githubusercontent.com/daftcode/daftacademy-frontend_levelup-spring2019/master/prace_domowe/lekcja_2/projekt_graficzny/assets/bijou.jpg"],
  ["egg nog", "https://raw.githubusercontent.com/daftcode/daftacademy-frontend_levelup-spring2019/master/prace_domowe/lekcja_2/projekt_graficzny/assets/eggnogg.jpg"],
  ["mojito", "https://raw.githubusercontent.com/daftcode/daftacademy-frontend_levelup-spring2019/master/prace_domowe/lekcja_2/projekt_graficzny/assets/mojito.jpg"],
  ["negroni", "https://raw.githubusercontent.com/daftcode/daftacademy-frontend_levelup-spring2019/master/prace_domowe/lekcja_2/projekt_graficzny/assets/negroni.jpg"],
  ["rattlesnake", "https://raw.githubusercontent.com/daftcode/daftacademy-frontend_levelup-spring2019/master/prace_domowe/lekcja_2/projekt_graficzny/assets/rattlesnake.jpg"],
  ["zinger", "https://raw.githubusercontent.com/daftcode/daftacademy-frontend_levelup-spring2019/master/prace_domowe/lekcja_2/projekt_graficzny/assets/zinger.jpg"]
]

export default class DrinksView extends React.Component {
  render() {
    return (
      <div className="drinks_view-container">
        {
          drinks.map(drink =>
            (<DrinkCard key={drink[0]} name={drink[0]} img={drink[1]} />)
          )
        }
      </div>
    );
  }
}
