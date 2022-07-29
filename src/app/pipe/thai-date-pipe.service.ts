import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thaidate'
})
export class ThaiDatePipe implements PipeTransform {
  transform(date: string, format: string): string {
    let ThaiDay = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
    let shortThaiMonth = [
      'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
      'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
    ];
    let longThaiMonth = [
      'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
      'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];
    let inputDate = new Date(date);
    let dataDate = [
      inputDate.getDay(), inputDate.getDate(), inputDate.getMonth(), inputDate.getFullYear()
    ];
    let outputDateFull = [
      'วัน ' + ThaiDay[dataDate[0]],
      'ที่ ' + dataDate[1],
      'เดือน ' + longThaiMonth[dataDate[2]],
      'พ.ศ. ' + (dataDate[3] + 543)
    ];
    let outputDateLong = [
      // 'วัน ' + ThaiDay[dataDate[0]],
      'ที่ ' + dataDate[1],
      'เดือน ' + longThaiMonth[dataDate[2]],
      'พ.ศ. ' + (dataDate[3] + 543)
    ];
    let outputDateShort = [
      dataDate[1],
      shortThaiMonth[dataDate[2]],
      dataDate[3] + 543,

    ];

    let outputDateShort2: any

    if (inputDate.getHours() < 10 && inputDate.getMinutes() < 10) {
      outputDateShort2 = [
        dataDate[1],
        shortThaiMonth[dataDate[2]],
        dataDate[3] + 543,
        "0" + inputDate.getHours() + ":0" + inputDate.getMinutes(),
      ];
    } else if (inputDate.getHours() < 10) {
      outputDateShort2 = [
        dataDate[1],
        shortThaiMonth[dataDate[2]],
        dataDate[3] + 543,
        "0" + inputDate.getHours() + ":" + inputDate.getMinutes(),

      ];
    } else if (inputDate.getMinutes() < 10) {
      outputDateShort2 = [
        dataDate[1],
        shortThaiMonth[dataDate[2]],
        dataDate[3] + 543,
        inputDate.getHours() + ":0" + inputDate.getMinutes(),

      ];
    } else {
      outputDateShort2 = [
        dataDate[1],
        shortThaiMonth[dataDate[2]],
        dataDate[3] + 543,
        inputDate.getHours() + ":" + inputDate.getMinutes(),

      ];
    }


    let outputDateMedium = [
      dataDate[1],
      longThaiMonth[dataDate[2]],
      dataDate[3] + 543
    ];
    let outputDateYear = [
      inputDate.getDate(),
      inputDate.getMonth() + 1,
      dataDate[3] + 543
    ];
    let returnDate: string;
    returnDate = outputDateMedium.join(" ");
    if (format == 'full') {
      returnDate = outputDateFull.join(" ");
    }
    if (format == 'long') {
      returnDate = outputDateLong.join(" ");
    }
    if (format == 'medium') {
      returnDate = outputDateMedium.join(" ");
    }
    if (format == 'short') {
      returnDate = outputDateShort.join(" ");
    }
    if (format == 'year') {
      returnDate = outputDateYear.join("/");
    }
    if (format == 'forlog') {
      returnDate = outputDateShort2.join(" ");
    }
    return returnDate;
  }
}
