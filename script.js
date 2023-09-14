
        const alas = document.getElementById('alas')
        const tinggi = document.getElementById('tinggi')
        const hitung = document.getElementById('hitung')
        const output = document.getElementById('output')
        hitung.addEventListener('click',function(){
            let a = alas.value
            let t = tinggi.value
            let c = 0.5*a*t
            output.innerHTML = `Hasilnya adalah ${c}`
        })
        
        let btnReset = document.querySelector('button');
        let inputs = document.querySelectorAll('input');

        btnReset.addEventListener('click', () => {
        inputs.forEach(input =>  input.value = '');
        });
    