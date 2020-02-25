import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  DateNavigator,
  TodayButton,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DragDropProvider,
  Toolbar,
  ViewSwitcher,
  MonthView,
  DayView,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Import test data
import appointments from '../../assets/demo';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
      currentViewName: 'work-week',
    };
    this.currentViewNameChange = currentViewName => {
      this.setState({ currentViewName });
    };

    this.commitChanges = this.commitChanges.bind(this);
  }

  commitChanges({ added, changed, deleted }) {
    console.group('commitChanges');
    console.log('added: ', added);
    console.log('changed: ', changed);
    console.log('deleted: ', deleted);
    console.groupEnd();

    this.setState(state => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment =>
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment,
        );
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { data, currentViewName } = this.state;

    return (
      <div>
        <Typography component="div">
          <Box fontSize="h2.fontSize" m={1}>
            Scheduler
          </Box>
          <Box fontSize={16} m={1}>
            Check out what you need to do.
          </Box>
        </Typography>

        <Paper>
          <Scheduler data={data}>
            <ViewState
              defaultCurrentDate={new Date()}
              currentViewName={currentViewName}
              onCurrentViewNameChange={this.currentViewNameChange}
            />
            <EditingState onCommitChanges={this.commitChanges} />
            <IntegratedEditing />
            <ConfirmationDialog />

            <WeekView startDayHour={9} endDayHour={24} />
            <WeekView
              name="work-week"
              displayName="Work Week"
              excludedDays={[0, 6]}
              startDayHour={9}
              endDayHour={19}
            />
            <MonthView />
            <DayView />
            <Toolbar />

            <DateNavigator />
            <TodayButton />
            <ViewSwitcher />

            <Appointments />
            <AppointmentTooltip showOpenButton showDeleteButton />
            <AppointmentForm />

            <DragDropProvider />
          </Scheduler>
        </Paper>
      </div>
    );
  }
}
