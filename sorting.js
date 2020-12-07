//import { randomArray, swap } from './helpers.js'
//for (let j = 0; j < a.length - 1 - j; j++) {
//    for (let i = 0; i < a.length - 1 - j; i++) {
//        if (a[i] > a[i + 1]) {
//            swap(a, i, i + 1)
//        }
//
//    }
//
//}

function bubbleSort(a) {
    import { randomArray, swap } from './helpers.js'
    for (let j = 0; j < a.length - 1 - j; j++) {
        for (let i = 0; i < a.length - 1 - j; i++) {
            if (a[i] > a[i + 1]) {
                swap(a, i, i + 1)
            }

        }

    }
}
const a = randomArray(100, 10)