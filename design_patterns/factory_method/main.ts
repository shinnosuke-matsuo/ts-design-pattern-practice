import { IDCardFactory } from "./id_card_factory";

const idCardFactory = new IDCardFactory();
const card_1 = idCardFactory.create("空条承太郎");
const card_2 = idCardFactory.create("DIO");

card_1.use();
card_2.use();
