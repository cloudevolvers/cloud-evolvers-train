import React, { useState } from 'react';
import { format, getWeek, startOfWeek, addWeeks } from 'date-fns';
import { Calendar } from '@phosphor-icons/react';
import { Button } from './button';
import { Input } from './input';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { cn } from '@/lib/utils';

interface DatePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function DatePicker({ 
  value, 
  onChange, 
  placeholder = "Select a date...", 
  disabled, 
  className 
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Generate week options for the selected year
  const generateWeekOptions = (year: number) => {
    const weeks: Array<{
      number: number;
      label: string;
      dateRange: string;
      value: string;
    }> = [];
    const startDate = new Date(year, 0, 1);
    
    for (let i = 1; i <= 52; i++) {
      const weekStart = startOfWeek(addWeeks(startDate, i - 1), { weekStartsOn: 1 });
      const weekEnd = addWeeks(weekStart, 0);
      weekEnd.setDate(weekEnd.getDate() + 6);
      
      weeks.push({
        number: i,
        label: `Week ${i}`,
        dateRange: `${format(weekStart, "MMM d")} - ${format(weekEnd, "MMM d")}`,
        value: `Week ${i}, ${year} (${format(weekStart, "MMM d")} - ${format(weekEnd, "MMM d")})`
      });
    }
    return weeks;
  };

  const currentWeeks = generateWeekOptions(selectedYear);
  const currentWeekNumber = getWeek(new Date(), { weekStartsOn: 1 });

  // Handle date input change
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    setInputValue(dateValue);
    if (onChange) {
      if (dateValue) {
        try {
          const date = new Date(dateValue);
          onChange(format(date, "MMMM d, yyyy"));
        } catch {
          onChange(dateValue);
        }
      } else {
        onChange("");
      }
    }
  };

  // Handle week selection
  const handleWeekChange = (weekValue: string) => {
    setInputValue(weekValue);
    if (onChange) {
      onChange(weekValue);
    }
  };

  // Handle text input change (for free-form text)
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const textValue = e.target.value;
    setInputValue(textValue);
    if (onChange) {
      onChange(textValue);
    }
  };

  React.useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !inputValue && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <Calendar className="mr-2 h-4 w-4" />
          {inputValue || placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-4 bg-card border-border shadow-lg" align="start">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Select a specific date:
            </label>
            <Input
              type="date"
              value={inputValue && inputValue.match(/^\\d{4}-\\d{2}-\\d{2}$/) ? inputValue : ""}
              onChange={handleDateChange}
              disabled={disabled}
              min={new Date().toISOString().split('T')[0]} // Prevent past dates
              className="w-full bg-background"
            />
          </div>
          
          <div className="border-t pt-4">
            <label className="text-sm font-medium mb-2 block">
              Select by week number:
            </label>
            <div className="space-y-2">
              <Select value={selectedYear.toString()} onValueChange={(year) => setSelectedYear(parseInt(year))}>
                <SelectTrigger className="w-full bg-background">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent className="bg-card">
                  <SelectItem value={new Date().getFullYear().toString()}>
                    {new Date().getFullYear()} (Current Year)
                  </SelectItem>
                  <SelectItem value={(new Date().getFullYear() + 1).toString()}>
                    {new Date().getFullYear() + 1}
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={handleWeekChange} disabled={disabled}>
                <SelectTrigger className="w-full bg-background">
                  <SelectValue placeholder={`Select week (Current: Week ${currentWeekNumber})`} />
                </SelectTrigger>
                <SelectContent className="max-h-60 bg-card">
                  {currentWeeks.map((week) => (
                    <SelectItem key={week.number} value={week.value}>
                      <div className="flex flex-col items-start">
                        <span className="font-medium">{week.label}</span>
                        <span className="text-xs text-muted-foreground">{week.dateRange}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <label className="text-sm font-medium mb-2 block">
              Or describe your preferred timeframe:
            </label>
            <Input
              placeholder="e.g., Week of August 15th, September 2025"
              value={inputValue}
              onChange={handleTextChange}
              disabled={disabled}
              className="w-full bg-background"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setInputValue("");
                if (onChange) onChange("");
                setOpen(false);
              }}
            >
              Clear
            </Button>
            <Button
              size="sm"
              onClick={() => setOpen(false)}
            >
              Done
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
