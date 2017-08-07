/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * Created by linghang on 2017/8/7.
 */
/**
 * Created by CnJon on 16/1/21.
 */
'use strict';

import React,{Component, PropTypes} from 'react';
import {
    AppRegistry,
    DatePickerIOS,
    Dimensions,
    Navigator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import  DatePickIos2 from './DatePick.ios';
import DatePickAndriond from './DatePick.android';
import DatePick from './DatePick';
const Screen = Dimensions.get('window');

export default class DateTimePicker extends Component {
    constructor(props) {
        super(props);
        this.state={
            date: new Date()
        };
        this.picker = null;
    }
    showDatePicker() {
        var date = this.state.date;
        this.picker.showDatePicker(date, (d)=>{
            this.setState({date: d});
        });
    }

    showTimePicker() {
        var date = this.state.date;
        this.picker.showTimePicker(date, (d)=>{
            this.setState({date: d});
        });
    }

    showDateTimePicker() {
        var date = this.state.date;
        this.picker.showDateTimePicker(date, (d)=>{
            this.setState({date: d});
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: 'center'}}>
                    {this.state.date.toString()}
                </Text>
                <View style={{height:40}} />
                <TouchableOpacity
                    onPress={()=>this.showDatePicker()}>
                    <Text>Show Date</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>this.showTimePicker()}>
                    <Text>Show Time</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>this.showDateTimePicker()}>
                    <Text>Show DateTime</Text>
                </TouchableOpacity>
                <DatePick cancelText="Cancel" okText="OK" ref={(picker)=>{this.picker=picker}} />
            </View>
        );


    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});



AppRegistry.registerComponent('datepicker', () => DateTimePicker);
