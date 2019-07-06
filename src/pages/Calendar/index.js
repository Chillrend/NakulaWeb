import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import PropTypes from 'prop-types';

var allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k]);

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

export default class Calendar extends React.Component {



  constructor(props){
    super(props);

    this.state = {
      data_liburan: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    let year = new Date().getFullYear();

    axios.get('https://holidayapi.pl/v1/holidays?country=id&year=' + year)
        .then(response => {
          this.handleResponse(response)
        })
  }

  handleResponse(res){
    let _self = this;
    let array = res.data.holidays;
    let real_array = [];
    Object.keys(array).map(function(key,index) {
      let push_array = [];
      let git_array = array[key];
      push_array['title'] = git_array[0].name;
      push_array['allDay'] = true;

      let moment_date = moment(git_array[0].date);
      let date = Date.parse(git_array[0].date);

      push_array['start'] = date;
      push_array['end'] = date;
      push_array['desc'] = git_array[0].name;

      real_array.push(push_array)
    });

    var data_liburan = _self.state.data_liburan.concat(real_array);
    _self.setState({data_liburan});
  }

  render() {
    const {isLoaded, data_liburan} = this.state;
    return (
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                {console.log(data_liburan)}
                <BigCalendar
                    events={data_liburan}
                    views={allViews}
                    defaultDate={new Date()} />
              </div>
            </div>
          </div>
        </div>
    );
  }
}


Calendar.propTypes = {
  data_liburan: PropTypes.array
};