class mechanic {
  constructor(){
    this.arr = new Array();
    console.log("constructor:",this.arr);
    }

  add(from , to){
    if (from<0 || to<0 ){
      console.log("your input needs to be between 0 and 24");
    }
    else if (from > to) {
      console.log("the sart time can't be greater than to(end) time");
    }
    else if(to > 24){
      console.log("the end time cant be greather than 24hrs clock");
    }
    else if (this.arr.length <1) {
      this.arr[0] = new Array(from,to);
      console.log("initial add",this.arr);

    }

    else {
      // console.log(this.arr);
          // this.arr.push([from,to]);
          for (var i = 0; i <this.arr.length; i++) {
            let timeSlot = this.arr[i];
            let currF = timeSlot[0];
            let currT = timeSlot[1];
              // (1,5) => in the middle both
              // if(currF<=from && currT>=to){
              //   this.arr[i][0]=from;
              //   this.arr[i][1]=to;
              // }
              // if arr=[(1,5)] => add(2,8) right higher
              if (currF<from && currF>to && currT<to) {
                this.arr[i][1]=to;
              }

              // if arr=[(1,5)] => add(0,3)   left lower
              else if (currF>from && currT>to) {
                this.arr[i][0]=from;

              }
              else if (currF>=from && currT<=to) {
                this.arr[i][0]=from;
                this.arr[i][1]=to;
              }

              else if (currF<to ) {
                this.arr.push([from,to]);
              }
            }

        } //end else


    } //end of add
  } //end of class

let ali = new mechanic();
// ali.add(0,6);
ali.add(1,2);
ali.add(2,1);
ali.add(3,4);
// ali.add(2,3);
// ali.add(1,5);
// ali.add(11,19);
// ali.add(1,5);
// ali.add(-2,4);
// ali.add(2,8);
// ali.add(0,3);
// ali.add(4,15);
// ali.add(16,24);
// console.log(ali);
// ali.remove(2,4);
console.log(ali);
