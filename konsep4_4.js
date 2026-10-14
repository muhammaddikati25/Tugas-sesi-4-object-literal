let produk = {
    nama : "Mouse Wireless",
    harga : 150000,
    stok : 3,
    diskon : 10,
    info : function () {
        return (
            this.nama + "\n" +
            "Harga: Rp" + this.harga + "\n" +
            "Stok tersedia: " + this.stok
        )
    },
    hargaDiskon : function () {
        let total = this.harga - (this.harga * this.diskon / 100)
        return "Harga setelah diskon: Rp" + total
    },
    beli : function (jumlah) {
        if (this.stok == 0) {
            return "Maaf, stok produk sudah habis!"
        }
        this.stok = this.stok - jumlah
        let pesan = "Pembelian berhasil! Anda membeli " + jumlah + " " + this.nama + ".\n" +
                    "Sisa stok sekarang: " + this.stok
        if (this.stok == 0) {
            pesan = pesan + "\nStok produk kini habis, segera restock!"
        }
        return pesan
    }
}

console.log(produk.info())
console.log("------------------------------")
console.log(produk.hargaDiskon())
console.log("------------------------------")
console.log(produk.beli(1))
console.log("------------------------------")
console.log(produk.beli(2))
console.log("------------------------------")
console.log(produk.beli(1))