import React, { Component } from 'react';
import Card from './atomic/Card';
import './css/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <Card
            title='ABOUT STAR WARS'
            content={(
              <div className='description'>
                <p>Star Wars is an American epic space opera franchise, created by George Lucas and centered around a film series that began with the eponymous 1977 movie. The saga quickly became a worldwide pop culture phenomenon.</p>
                <p>The first film was followed by two successful sequels, The Empire Strikes Back (1980) and Return of the Jedi (1983); these three films constitute the original Star Wars trilogy. A prequel trilogy was released between 1999 and 2005, albeit to mixed reactions from critics and fans. Finally, a sequel trilogy to conclude the nine-episode saga began in 2015 with The Force Awakens. The first eight films were nominated for Academy Awards (with wins going to the first two released) and were commercially successful, with a combined box office revenue of over US$8.5 billion. Together with the theatrical spin-off films The Clone Wars (2008), Rogue One (2016), and Solo: A Star Wars Story (2018), Star Wars is the second-highest-grossing film series of all time.</p>
                <p>The film series has spawned into other media, including books, television shows, computer and video games, theme park attractions and lands, and comic books, resulting in significant development of the series' fictional universe. Star Wars holds a Guinness World Records title for the "Most successful film merchandising franchise". In 2018, the total value of the Star Wars franchise was estimated at US$65 billion, and it is currently the fifth-highest-grossing media franchise.</p>
              </div>
            )}
            cardContentClasses='color-white'
            cardClasses='col-11 m-30-auto'
          />
        </div>
        <div className='row'>
          <Card
            title='ABOUT PROJECT'
            content={(<><br></br><p className='about-project'>This project is made using React. It was bootstrapped with Create React App. The source code of this could be found in this <a href='https://github.com/SupratikRulz/star-wars-gallaria'>github</a> repository. This also makes use of <a href='https://swapi.co/'>swapi.co</a> apis for fetching data related to <a href='https://www.starwars.com/'>Star Wars</a>. This project aims at providing information to user about the star war films. If user is much familiar wih star wars, then user can also search for his favorite hero and get to know more about hero.</p></>)}
            cardContentClasses='color-white'
            cardClasses='col-11 m-30-auto'
          />
        </div>
      </div>
    )
  }
}
