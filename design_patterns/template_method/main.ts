import { AbstractDisplay } from "./abstract_display";
import { CharDisplay } from "./char_display";
import { StringDisplay } from "./string_display";

var d1: AbstractDisplay = new CharDisplay("A");
var d2: AbstractDisplay = new StringDisplay("hogehoge");
var d3: AbstractDisplay = new StringDisplay("fugafuga!");

d1.display();
d2.display();
d3.display();
