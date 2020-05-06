/* eslint-disable no-unused-vars */
import React, { Component as C } from 'react';
import { render as r } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import Counter from './Counter';

const f = 'DD.MM.YYYY HH:mm:ss';

class App extends C {
  constructor(props) {
    super();
    this.state = {
      date: 0,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(n = null, value) {
    alert(moment(value).format(f));
    const date = value.getDate();
    this.setState({ date });
  }

  render() {
    return (
      <div><Counter stars={this.state.date} />
        <DatePicker
          onChange={this.onDateChange}
          floatingLabelText="Выберите дату!"
        />
      </div>);
  }
}

r(
  <MuiThemeProvider><App /></MuiThemeProvider>,
  document.querySelector('.cont'),
);

