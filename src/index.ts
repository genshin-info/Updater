import path from "path";
import fs from "fs";
import mongoose from "mongoose";
import character from "@/Modeles/character";
class Main {
    constructor() {
        mongoose.connect(process.argv[2],{
            // @ts-ignore
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const directory = './Localization/';
        fs.readdirSync(directory).forEach((file: string) => {
            if (fs.lstatSync(path.resolve(directory, file)).isDirectory() && file !== ".git") {
                fs.readdirSync(directory+file).map(async (x:string) => {
                    switch (x) {
                        case 'characters.json': {
                            const data = JSON.parse(fs.readFileSync(directory+file+'/'+x, 'utf-8')) as character[];
                            for (const r of data) {
                                if (await character.findOne({
                                    name: r.name,
                                    language: file.toLocaleUpperCase()
                                }).then(x => x?.name)) {
                                    // @ts-ignore
                                    data.language = file.toLocaleUpperCase();
                                    await character.updateOne({
                                        name: r.name,
                                        language: file.toLocaleUpperCase()
                                    }, r)
                                        .catch(console.log)
                                }
                            }
                        }
                    }
                })
                process.exit()
            }
        });
    }
}
export default Main