import React, { useState } from 'react';
import { View, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const MyDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || datetime;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View>
      <Button style={{ backgroundColor: '#9A2BE1' }} onPress={() => setShowPicker(true)} title="Select Due Date" />
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default MyDatePicker;
