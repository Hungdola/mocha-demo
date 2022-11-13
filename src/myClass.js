class MyClass {
    constructor () {
        console.log("initiate")
    }

    //hàm kiểm tra số lẻ
    isOddNumber(number) {
        return number % 2 === 1;
    }

    //hàm đếm số chẵn
    countEventNumbers (numberList) {
        if(!Array.isArray(numberList)) return 0;
    
        return numberList.filter((x) => x % 2 === 0).length;
    };

    //hàm tính diện tích tam giác
    triangleArea(side1, side2, side3) {
      if(side1 <= 0 || side2 <= 0 || side3 <= 0){
        return false
      }
      else {
        const s = (side1 + side2 + side3) / 2;
      
        const areaValue = Math.sqrt(
          s * (s - side1) * (s - side2) * (s - side3)
        );
        return areaValue;
      }
    }
  
    //kiểm tra năm nhuận
    leapYear(year) {
      if ((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)){
      return true;
      } else{
      return false;
      }
    };


    //giải phương trình bậc 2
    giaiPTBacHai(x, y, z) {
      var x1, x2;
      if(typeof (x, y, z) === 'number' ) {
        
          if (x == 0) {
            if(y == 0){
              return false
            }
            else{
              return x1 = (-z) / y;
            }
          }
          
          else {
            var delta = (y*y - 4*x*z)
            if(delta == 0){
               x1 = -y / (2*x) ;
               x2 = -y / (2*x);
               var b = [x1, x2]
              return b;
            }
            else if(delta < 0){
              return null;
            } 
            else{
              x1 = (-y - Math.sqrt( delta )) / (2*x);
              x2 = (-y + Math.sqrt( delta )) / (2*x);
              var c = [x1, x2]
              return c       
            }
          }
        
      }
      else {
        return false
      }
      
    }
  }

module.exports = MyClass