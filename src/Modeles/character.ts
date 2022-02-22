import { model,Schema } from 'mongoose';
class Character extends Schema<character> {
    constructor() {
        super({
            language: {type: String, default: 'RU'},
            name: String, // имя
            image: String, // изображение персонажа
            description: String, // описание персонажа
            vision: String, // глаз бога
            rarity: Number, //редкость
            birthday: String, // др
            obtain: String, // где найти?
            gender: String, // гендер
            weapontype: String, // тип оружия
            region: String, // регион
            guild: String, // группа
            constellations: Array,
            talents: Array,
            ranktierlist: String,
            // weapon: String,
            builds: Array
        });
    }
}
export default model<character>('character', new Character());
