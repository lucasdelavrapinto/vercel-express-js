const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/:date', (req, res) => {
    console.log(req.params);
    console.log("@@");
    console.log("choice date is " + req.params.date);

    let dates = [
        { mes_numero: 11, mes: 'novembro', aprovacao_inicio: '2023-11-29', aprovacao_fim: '2023-12-15', pagamento: '2023-12-10' },
        { mes_numero: 12, mes: 'dezembro', aprovacao_inicio: '2023-12-06', aprovacao_fim: '2023-12-12', pagamento: '2023-12-27' },
        { mes_numero: 12, mes: 'dezembro', aprovacao_inicio: '2023-12-13', aprovacao_fim: '2023-12-19', pagamento: '2024-01-03' },
        { mes_numero: 12, mes: 'dezembro', aprovacao_inicio: '2023-12-20', aprovacao_fim: '2023-12-26', pagamento: '2024-01-10' },
        { mes_numero: 12, mes: 'dezembro', aprovacao_inicio: '2023-12-27', aprovacao_fim: '2024-01-02', pagamento: '2024-01-17' },
    ];

    let date = new Date(req.params.date);
    let month = date.getMonth() + 1; // Adding 1 because getMonth() is zero-based
    let year = date.getFullYear();

    console.log("month is " + month);
    console.log("year is " + year);

    if (year >= 2024 && month >= 1) {
        return res.json(false);
    }

    if (year < 2023) {
        return res.json(false);
    }

    if (year <= 2023 && month <= 11) {
        return res.json(false);
    }

    let filterMonth = dates.filter(date => date.mes_numero == month);
    // console.log(filterMonth);

    var a = filterMonth.filter(value => date <= Date.parse(value.aprovacao_fim));
    var b = a.filter(value => date >= Date.parse(value.aprovacao_inicio));

    console.log(b);

    // res.send("pagamento deve ser em: " + b[0].pagamento);
    res.json(b[0].pagamento);
});

module.exports = router;