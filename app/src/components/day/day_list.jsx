import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Day from './day';

require('./day_list.css');

@observer 
export default class DayList extends Component {

  constructor() {
    super();
  }

  render() {

    const days = this.props.days ? this.props.days.slice(0,5) : [];
    let dayComponents = [];

    days.forEach((day, index, array) => {
      dayComponents.push(<Day key={day.time} day={day}></Day>);
    });

    return (
      <div className='day-list'>
        {dayComponents}
      </div>
    );
  }
}