'use strict';

leven.outputSchema = 'integer:double';
function leven(s1,s2){
  if(!s1 || !s2){
      return -1;
  }
  var a=s1//.toString();
  var b=s2//.toString();
  var al=a.toString().length();
  var bl=b.toString().length();
  if(al == 0) return bl; 
  if(bl == 0) return al; 
  var matrix = [];

  // increment along the first column of each row
  var i;
  for(i = 0; i <= bl; i++){
    matrix[i] = [i];
  }

  // increment each column in the first row
  var j;
  for(j = 0; j <= al; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(i = 1; i <= bl; i++){
    for(j = 1; j <= al; j++){
      if(b.toString().charAt(i-1) == a.toString().charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }
    
  return matrix[bl][al]/((al+bl)/2)*100;
};
