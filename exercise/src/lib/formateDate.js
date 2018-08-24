const formatDate = (date) => {
    const dateSplit = date.split(' ')
    let mm
        switch ((dateSplit[1])) {
            case 'มกราคม':
                mm = '01'
                break;
                case 'กุมภาพันธ์':
                mm = '02'
                break;
                case 'มีนาคม':
                mm = '03'
                break;
                case 'เมษายน':
                mm = '04'
                break;
                case 'พฤษภาคม':
                mm = '05'
                break;
                case 'มิถุนายน':
                mm = '06'
                break;
                case 'กรกฎาคม':
                mm = '07'
                break;
                case 'สิงหาคม':
                mm = '08'
                break;
                case 'กันยายน':
                mm = '09'
                break;
                case 'ตุลาคม':
                mm = '10'
                break;
                case 'พฤศจิกายน':
                mm = '11'
                break;
                case 'ธันวาคม':
                mm = '12'
                break;
        
            default:
                break;
        }
    const newDate = `${dateSplit[2]}-${mm}-${dateSplit[0]}`

    return newDate
  }
  
  export default formatDate