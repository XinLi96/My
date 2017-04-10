import { DatePicker } from 'antd';
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();
class DateRange extends React.Component {
    state = {
        startValue: year+'-'+month+'-'+day,
        endValue: '2017-08-31',
        endOpen: false,
    };

    disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
    return false;
}
return startValue.valueOf() > endValue.valueOf();
}

disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
        return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
}

onChange = (field, value) => {
    this.setState({
        [field]: value,
    });
}

onStartChange = (value) => {
    this.onChange('startValue', value);
}
''
onEndChange = (value) => {
    this.onChange('endValue', value);
}

handleStartOpenChange = (open) => {
    if (!open) {
        this.setState({ endOpen: true });
    }
}

handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
}

render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
        <div>
        <DatePicker
    disabledDate={this.disabledStartDate}
    showTime
    format="YYYY-MM-DD HH:mm:ss"
    value={startValue}
    placeholder="Start"
    onChange={this.onStartChange}
    onOpenChange={this.handleStartOpenChange}
/>
<DatePicker
    disabledDate={this.disabledEndDate}
    showTime
    format="YYYY-MM-DD HH:mm:ss"
    value={endValue}
    placeholder="End"
    onChange={this.onEndChange}
    open={endOpen}
    onOpenChange={this.handleEndOpenChange}
/>
</div>
);
}
}

ReactDOM.render(<DateRange />, mountNode);