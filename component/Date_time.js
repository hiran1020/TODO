import React, { useState } from 'react';
import { Button } from 'react-native';
import DatePicker from 'react-native-date-picker';

const DateTime = (props) => {

const { date,setDate } = props;
  const [open, setOpen] = useState(false);

  const formatDate = (date) => {

    const options = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: 'numeric',
      minute: '2-digit',

      hour12: true, // Use 24-hour format  // Convert to local time zone
    };

    setDate(date.toLocaleString('en-US', options));
};
const dueDate =(date)=>{
    setOpen(false);
    formatDate(date);

}

  return (
    <>
      <Button
        style={{ backgroundColor: '#9A2BE1' , margin: 10,fontSize: 50,}}
        title="Due Date"
        onPress={() => setOpen(true)}
      />
      <DatePicker
        modal
        open={open}
        date={new Date()}
        onConfirm={(selectedDate) => {
          dueDate (selectedDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        buttonColor='#9A2BE1'
        dividerColor='#9A2BE1'
      />
    </>
  );
};

export default DateTime;
