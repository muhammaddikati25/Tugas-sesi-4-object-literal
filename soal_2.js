var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
]

let hasil = {}

for (let i in motoGP) {
    let negara = motoGP[i].winner.country
    let namaLengkap = motoGP[i].winner.firstName + " " + motoGP[i].winner.lastName
    let lokasi = motoGP[i].circuit + ", " + motoGP[i].location

    if (hasil[negara] == undefined) {
        hasil[negara] = {
            winningCircuits : [],
            totalWin : 0
        }
    }

    hasil[negara].winningCircuits.push({
        name : namaLengkap,
        winLocation : lokasi
    })
    hasil[negara].totalWin = hasil[negara].totalWin + 1
}

console.dir(hasil, { depth: null })