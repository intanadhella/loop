//factorial
const factorial = (n) => {
    if (n < 0) {
        console.log(`Masukkan bilangan positif`)
        return
    }
    let hasil = 1 
    for (let i = n; i > 0; i--) {
        hasil = hasil * i
    }
    console.log (`Factorial dari ${n} adalah ${hasil}`)
}

//reverse array
const hasilReverseArray = () => {
    let x = ['apple', 'melon', 'mango']
    console.log(`Hasil reverse array dari`)
    console.log(JSON.stringify(x))
    console.log(`adalah`)
    console.log(JSON.stringify(reverseArray(x)))
}
const reverseArray = (arr) => {
    let len = arr.length
    let ret = []
    for (let i = 0; i < len; i++) {
        let lastArray = arr.pop()
        ret.push(lastArray)
    }
    return ret
}

//reverse string
const reverseString = (kata) => {
    let kataArr = kata.split('')
    let hasilArr = reverseArray(kataArr)
    let hasil = hasilArr.join('')
    console.log(`Hasil reverse string dari`)
    console.log(kata)
    console.log(`adalah`)
    console.log(hasil)
}

//assign grade
const assignGrade = (n) => {
    let grade
    switch (true) {
        case (n >= 93 && n <= 100):
            grade = 'A'
            break;
        case (n >= 90 && n <= 92):
            grade = 'A-'
            break;
        case (n >= 87 && n <= 89):
            grade = 'B+'
            break;
        case (n >= 83 && n <= 86):
            grade = 'B'
            break;
        case (n >= 80 && n <= 82):
            grade = 'B-'
            break;
        case (n >= 77 && n <= 79):
            grade = 'C+'
            break;
        case (n >= 73 && n <= 76):
            grade = 'C'
            break;
        case (n >= 70 && n <= 72):
            grade = 'C-'
            break;
        case (n >= 67 && n <= 69):
            grade = 'D+'
            break;
        case (n >= 63 && n <= 66):
            grade = 'D'
            break;
        case (n >= 60 && n <= 62):
            grade = 'D-'
            break;
        case (n >= 0 && n <= 59):
            grade = 'F'
            break;
    
        default:
            grade = 'Tidak diketahui'
            break;
    }

    console.log(`Grade dari ${n} adalah ${grade}`)
}

//multiplier
const multiplier = (number, index) => {
    if(index < 0) {
        console.log(`Masukkan index > 0`)
        return
    }

    for (let i = 0; i <= index; i++) {
        console.log(`${number} x ${i} = ${number * i}`)
    }
}