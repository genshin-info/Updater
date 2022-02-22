declare module NodeJS {
    interface ProcessEnv {
        MONGOURL: string;
    }
}

interface domain {
    language: "RU" | "EN";
    name: string;
    image: string;
    mobs: [mob];
    talents: string;
    artefacts: [art];
}

interface mob {
    language: "RU" | "EN";
    name: string;
    image: string;
    lvl: string;
}

interface builds {
    language: "RU" | "EN";
    description: string
    arts: [art]
    weapon: weapon
}
interface weapon {
    language: "RU" | "EN";
    name: string;
    image: string;
    type: "claymore" | "polearm" | "catalyst" | "bow" | "sword"
    ATK: number;
    passive: string;
    passivevalue: string;
    description: string;
    levels: [levelweapon]
}
interface levelweapon {
    lvl: number;
    asc: number;
    ATK: number;
    passive: string;
    passivevalue: string;
}
interface constellation {
    language: "RU" | "EN";
    name: string;
    image: string;
    description: string;
}

interface art {
    language: "RU" | "EN";
    name: string,
    image: string,
    description: string,
    domain: domain,
    bonuskit: {
        two: string,
        four: string
    },
}
interface talent {
    language: "RU" | "EN";
    name: string;
    image: string;
    description: string;
}
interface character {
    builds: [builds]
    talents: [talent];
    language: "RU" | "EN";
    name: string;
    image: string
    description: string;
    vision: "Pyro" | "Hydro" | "Dendro" | "Geo" | "Electro" | "Cryo" | "Пиро" | "Гидро" | "Дендро" | "Гео" | "Электро" | "Крио";
    birthday: string;
    rarity: 5 | 4;
    obtain: string;
    gender: "Male" | "Female" | "Мужской" | "Женский";
    weapontype: "Каталист" | "Одноручное" | "Двухручное" | "Лук" | "Копейщик";
    region: "Mondstadt" | "Монштад" | "Inazuma" | "Инадзума" | "Liyue" | "Ли юэ";
    guild: string;
    constellations: [constellation];
    ranktierlist: "SS" | "S+" | "S" | "A" | "B" | "C"
}