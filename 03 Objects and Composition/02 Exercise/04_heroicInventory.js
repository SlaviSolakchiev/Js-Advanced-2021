function solve(args) {

    let heros = [];

    let hero = {
        'name': '',
        'level': 0,
        'items': [],
    }


    args.forEach(x => {
        let [name, level, items] = x.split(' / ');
        level = Number(level);

        let hero = {
            'name': name,
            'level': level,
            'items': items.split(', '),
        }

        heros.push(hero);
    });

    console.log(JSON.stringify(heros));

}


solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);