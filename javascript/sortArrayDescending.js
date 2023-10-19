function sortArrayDescending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                // Swap elements if they are in the wrong order
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
sortArrayDescending(inputArray);
console.log(inputArray);
