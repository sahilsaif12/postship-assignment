import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import calenderIcon from '../../assets/calendar.png'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/utils';
 
const TimeFilter: React.FC = () => {
    const [date, setDate] = useState<Date >()
    const handleChange = (date:Date) => {
       setDate( date)
      }
      const [active, setactive] = useState('lifetime')
  return (
    <div className="flex space-x-4 flex-wrap ">
      <button onClick={() =>setactive('lifetime')} className={`${active=='lifetime' && "border border-purple-600 text-purple-600"} px-4 py-1 bg-gray-200 rounded-md font-semibold`}>Lifetime</button>
      <button onClick={() =>setactive('lastweak')}  className={`${active=='lastweak' && "border border-purple-600 text-purple-600"} px-4 py-1 bg-gray-200 rounded-md font-semibold`}>Last Week</button>
      <button onClick={() =>setactive('lastmonth')} className={`${active=='lastmonth' && " border border-purple-600 text-purple-600"} px-4 py-1 bg-gray-200 rounded-md font-semibold`}>Last Month</button>
      <button onClick={() =>setactive('lastyear')} className={`${active=='lastyear' && " border border-purple-600 text-purple-600"} px-4 py-1 bg-gray-200 rounded-md font-semibold`}>Last Year</button>
      <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          onClick={() =>setactive('customize')}
          className={cn(
            "w-[240px] justify-start text-left  font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
          <img src={calenderIcon} alt="" className='w-6 mr-2' />
          {date ? format(date, "PPP") : <span >Customize time line</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={()=>{}}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    </div>
  );
};

export default TimeFilter;
