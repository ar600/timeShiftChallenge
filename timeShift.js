'use strict'
class newTimeShift {
  constructor(){
    this.arr = new Array();
    console.log("constructor:",this.arr);
    }

  add(start , end){
    //case0 negatie inputs
    if (start<0 || end<0 ){
      console.log("your input needs to be between 0 and 24");
    }
    //case1 start time cant be greater than the end time
    else if (start > end) {
      console.log("the sart time can't be greater than to(end) time");
    }
    //case2 end time input cant be greather than 24
    else if(end > 24){
      console.log("the end time cant be greather than 24hrs clock");
    }
    //case3 if timeShift Array is empty - create the array start end from here
    else if (this.arr.length <1) {
      this.arr[0] = new Array(start,end);
      console.log("initial add",this.arr);
    }

    else {
      for (var i = 0; i <this.arr.length; i++) {
        let timeSlot = this.arr[i];
        let currS = timeSlot[0];
        let currE = timeSlot[1];
        let sumAdd = start+end;
        let sumCurr = currS+currE;

        // case4 , adding numbers are bigger than the shift. Swallows the current
        if (currS>start && currE<end) {
          this.arr[i][0]=start;
          this.arr[i][1]=end;
          console.log("1");

          }
          // case5, if start to be added is lower than the current start
        else if (currS>start &&  currE>=end && end>currS) {
          console.log("current S",currS);
          this.arr[i][0]=start;
          console.log("2");
          }
          // case6, if right is higher=end to be added is greater than current end shift
        else if (currS<=start &&  currE<end  && start <=currE) {
          this.arr[i][0]=currS;
          this.arr[i][1]=end;
          console.log("3");
          }
          // case7
        else if ((!this.arr[i+1]) && start>currE ) {
          console.log("4");
              this.arr.push([start,end]);
              break;
            }
        else if (this.arr[i+1] && start>currE && end<this.arr[i+1][0]) {
          this.arr.splice(i+1,0,[start,end]);
          break;
        }
        else if (end<currS) {
          this.arr.splice(i,0,[start,end]);
          break;
        }



        // else if (this.arr[i+1]) {
        //   let sumNext = this.arr[i+1][0] + this.arr[i+1][1];
        //   if (sumAdd > sumCurr && sumAdd < sumNext){
        //     console.log("curr arr" , this.arr);
        //     this.arr.splice(i,0,[start,end]);
        //     console.log("after splice:", this.arr);
        //     break;
        //   }
        //
        // }
        // else if (sumAdd > sumCurr){
        //   console.log("before splice" , this.arr);
        //   this.arr.splice(i+1,0,[start,end]);
        //   break;
        // }
        // else {
        //   this.arr.splice(i,0,[start,end]);
        //   break;
        // }

         // case4 within the timsshif
        // if (start>currS && end<currE ) {
        //
        //   }

        // case4 add start less than the current time shift start


        // else if (currS<end ) {
        //   this.arr.push([start,end]);
        //   break;
        //   }
        }

      } //end else
    } //end of add
  } //end of class

let ali = new newTimeShift();
// ali.add(0,6);
// ali.add(3,6);
// // ali.add(1,25);
// ali.add(2,7);
// ali.add(2,3);
ali.add(3,10); //1,7
ali.add(1,2);
ali.add(11,12);
// ali.add(2,9);
// ali.add(13,15);
// ali.add(1,5);
// ali.add(-2,4);
// ali.add(2,8);
// ali.add(0,3);
// ali.add(4,15);
// ali.add(16,24);
// console.log(ali);
// ali.remove(2,4);
console.log(ali);
