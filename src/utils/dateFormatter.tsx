const formatDateAndTime = (date: Date): { date: string, time: string } => {
    const optionsDate: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const optionsTime: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const formattedDate = date.toLocaleString("en-US", optionsDate);
    const formattedTime = date.toLocaleString("en-US", optionsTime);
    return { date: formattedDate, time: formattedTime };
  };
  
  export default formatDateAndTime;
  