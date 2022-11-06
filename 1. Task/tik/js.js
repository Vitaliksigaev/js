let array = [-1,0,3,5,7,9,12]; // Создание 

let search = function (nums, target) {

    let left = 0; //Указатель левой границы
    let right = nums.length - 1; // указатель правой границы
    let mid; // указатель середины - центра

    while (left <= right) { // циклы - итерация пока левая граница меньше или равна правой
        mid = Math.round((right-left)/2) + left; //Рассчитываем центральный элемент
        if (target === nums[mid]) {
            return mid; // Возвращаем позицию искомого элемента
        } else if (target < nums[mid]) {
            right = mid - 1; // откидываем всю правую часть
        } else {
        left = mid + 1; // меняем позицию левого указателья -тк target> num[mid]
        }
    }
    return -1; // Если искомого алгоритма нет.
}

console.log(search(array,9))