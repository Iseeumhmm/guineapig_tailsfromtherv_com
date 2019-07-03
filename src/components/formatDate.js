

export default function formatDate(ISOdate) {

    function dateFromISO8601(isostr) {
        var parts = isostr.match(/\d+/g);
        return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4]);
    }
    var dateObject = dateFromISO8601(ISOdate);          
    
    function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ampm;
      return strTime;
    }
    let time = formatAMPM(dateObject);

    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = dateObject.getDate();
    var monthIndex = dateObject.getMonth();
    var year = dateObject.getFullYear();

    // return {
    //     date : monthNames[monthIndex] + ' ' + day,
    //     year: year,
    //     time : time
    // }
    const returnString = monthNames[monthIndex] + ' ' + day + ", " + year + " @ " + time;
    return returnString;
  }
  
