import { TextBuilder } from "./text_builder";
import { Director } from "./director";
import { HtmlBuilder } from "./html_builder";

const textBuilder = new TextBuilder();
const director_1 = new Director(textBuilder);
director_1.construct();
const result_1 = textBuilder.getResult();
console.log(result_1);

const htmlBuilder = new HtmlBuilder();
const director_2 = new Director(htmlBuilder);
director_2.construct();
const result_2 = htmlBuilder.getResult();
console.log(result_2);
