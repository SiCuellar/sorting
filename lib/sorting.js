// bubble sort
class Sort {

bubble_sort(array){
  do {
    var swapped = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        swapped = true;
      }
    }
  } while (swapped == true);
  return array
};
}
module.exports = Sort;
